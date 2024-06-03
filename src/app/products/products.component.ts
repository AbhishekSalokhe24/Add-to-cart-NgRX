import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CardComponent } from "../card/card.component";
import { Iproduct } from '../models/product.interface';
import { ProductApiService } from '../services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../States/Add Cart/addcart.action';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [AsyncPipe, CommonModule, CardComponent]
})
export class ProductsComponent implements OnInit{
  
  prodAPI = inject(ProductApiService)
  http = inject(HttpClient);
  products$ = this.prodAPI.getProduct()  as Observable<Iproduct[]>;

  

  constructor(private store: Store<{cart: {products: Iproduct[]}}>){}

  ngOnInit(): void {
    // this.prodAPI.getProduct().subscribe((res)=>{
    //   console.log("from products component...:",res)
    // })
  }
  addItemToCart(product: Iproduct){
    this.store.dispatch(addToCart({product}));
  }


}
