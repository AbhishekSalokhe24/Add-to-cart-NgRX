import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() product!: Iproduct;
  @Output() handelAdd = new EventEmitter();

  addToCart(product: Iproduct){
    this.handelAdd.emit(product)
    console.log("this is from card component: ",product)
  }
}
 