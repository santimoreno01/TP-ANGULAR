import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: any[] = [];
  public loanding: boolean = true;
  public outstandings: any[] = [];
  public maxPrice: number = 0;
  public minPrice: number = 100;
  public favorites:any [] = [];
  public favsLocalStorage: any = []
  public categories: any[] = []
  public categorySelected: string = "";

  constructor(
    private productsServices : ProductsService,
    private CategoryService: CategoryService,
    private CartService: CartService
    ) { }

  ngOnInit(): void {
    // Traemos los productos favoritos del local storage
    this.favsLocalStorage = JSON.parse(localStorage.getItem('favorites') || '{}');
    this.getProducts()
  }

  getProducts(){
    this.productsServices.getProducts().subscribe((products) => {
      this.products = products;
      this.loanding = false;
      for (let i = 0; i < 3; i++) {
        this.outstandings.push(this.randomOutstanding());
      }
      this.setMaxMinPrice(products)
      console.log(this.products)
    })
  }

  getCategories(){
    this.CategoryService.getCategory().subscribe((categories) => {
      this.categories = categories;
      // category
      console.log(this.categories)
    })
  }

  randomOutstanding = () => {
    return Math.floor(Math.random() * (20 - 0 ))
  }

  addFavorite(product: any){
    if (!this.inFavorites(product)){
      this.favorites.push(product)
    }else {
      this.favorites = this.favorites.filter((i) => i !== product);
    }

    for (let i = 0; i < this.favsLocalStorage.length; i++) {
      if (!this.favorites.includes(this.favsLocalStorage[i])){
        this.favorites.push(this.favsLocalStorage[i])
      }
    }

    console.log(this.favorites)
    localStorage.setItem("favorites",  JSON.stringify(this.favorites));
  }

  setMaxMinPrice(products: any){
    products.forEach((product: any) => {
      this.maxPrice = this.maxPrice < product.price ? product.price : this.maxPrice;
      this.minPrice = this.minPrice > product.price ? product.price : this.minPrice;
    });
  }

  inFavorites(product: any){
    // Validamos si el producto esta en favoritos previamente
    let in_favorites = false;
    for (let i = 0; i < this.favsLocalStorage.length; i++) {
      if(JSON.stringify(this.favsLocalStorage[i]) == JSON.stringify(product) || this.favorites.includes(product)){
        in_favorites = true;
        break
      } 
    }
    return in_favorites
  }

  addCart(product: any){
    // this.cartProducts.push(product)
    Swal.fire({
      icon: 'success',
      text: 'Se agrego el carrito al producto',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1200,
    })
    this.CartService.postCartProduct(product)
    // console.log(this.product)
    // localStorage.setItem("cart",  JSON.stringify(this.cartProducts));
  }
}
