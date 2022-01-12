import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<any>('https://fakestoreapi.com/products')
  }

  getProductsForCategory(category: string){
    return this.httpClient.get<any>('https://fakestoreapi.com/products/category/' + category)
  }
}
