import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public httpClient: HttpClient) { }

  getCategory(){
    return this.httpClient.get<any>('https://fakestoreapi.com/products/categories')
  }
}
