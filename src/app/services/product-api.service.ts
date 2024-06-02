import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Iproduct } from '../models/product.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  http = inject(HttpClient);
  constructor() { }

  getProduct(){
    return this.http.get<Iproduct[]>('https://fakestoreapi.com/products')
    .pipe(
      map((products)=>{
        return products.map((product)=>{
          return {...product,quantity:1}
        })
      })
    )
  }
}
