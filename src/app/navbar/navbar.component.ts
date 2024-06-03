import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../app.state';
import { selectProductsState } from '../States/Add Cart/addcart.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  products$ =  this.store.select(selectProductsState)
  constructor(private store: Store<Appstate>){
    this.products$ = this.store.select(selectProductsState)
  }
}
