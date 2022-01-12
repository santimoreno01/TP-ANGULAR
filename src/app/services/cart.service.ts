import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: any = []
  constructor() { }

  postCartProduct(product: any){
    this.cartProducts.push(product)
    console.log(this.cartProducts)
  }

  deleteCartProduct(product: any){
    this.cartProducts = this.cartProducts.filter((i: any) => i !== product);
    console.log(this.cartProducts)
  }

  getCartProducts(){
    console.log(this.cartProducts)
    return this.cartProducts
  }
}
