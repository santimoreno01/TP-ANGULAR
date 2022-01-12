import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartProducts: any = []
  public totalPrice: number = 0

  constructor(
    private CartService: CartService
    ) { }

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){
    this.cartProducts = this.CartService.getCartProducts()
    console.log(this.cartProducts)
    this.summaryPrice()
  }

  deleteCartProduct(product: any){
    this.CartService.deleteCartProduct(product)
    this.getCartProducts()
    this.summaryPrice()
  }

  async buyProducts(){
    const { value: email } = await Swal.fire({
      title: 'Envianos tu email! Nos pondremos en contacto para realizar el cobro y la entrega',
      input: 'email',
      icon: 'info',
      inputPlaceholder: 'Ingresa tu email'
    })
    
    if (email) {
      Swal.fire(`Email enviado a: ${email}`)
    }
  }

  summaryPrice(){
    this.totalPrice = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice = this.totalPrice + this.cartProducts[i].price;
    }
  }
}
