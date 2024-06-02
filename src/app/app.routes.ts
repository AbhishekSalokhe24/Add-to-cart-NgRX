import { Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductsComponent
    },
    {
        path:'cart',
        component: CartPageComponent
    }
];
