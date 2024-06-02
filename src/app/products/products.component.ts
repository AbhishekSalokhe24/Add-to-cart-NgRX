import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CardComponent } from "../card/card.component";
import { Iproduct } from '../models/product.interface';
import { ProductApiService } from '../services/product-api.service';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [AsyncPipe, CommonModule, CardComponent]
})
export class ProductsComponent implements OnInit{
  

  http = inject(HttpClient);
  products$ = this.http.get('https://fakestoreapi.com/products') as Observable<Iproduct[]>;

  prodAPI = inject(ProductApiService)

  ngOnInit(): void {
    this.prodAPI.getProduct().subscribe((res)=>{
      console.log(res)
    })
  }
  


}
