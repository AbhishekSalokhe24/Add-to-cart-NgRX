import { Store } from '@ngrx/store';
import { Appstate } from './../app.state';
import { Component } from '@angular/core';
import { selectProductsState, selectTotalPrice } from '../States/Add Cart/addcart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { decrement, increment, removeItem } from '../States/Add Cart/addcart.action';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,AsyncPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cartItems$ =  this.store.select(selectProductsState);
  totalPrice$ = this.store.select(selectTotalPrice);

  constructor(private store: Store<Appstate>){}

  removeProduct(productId: number){
    this.store.dispatch(removeItem({productId}));
  }
  incrementProduct(productId: number){
    this.store.dispatch(increment({productId}));
  }
  decrementProduct(productId: number){
    this.store.dispatch(decrement({productId}));
  }

}
