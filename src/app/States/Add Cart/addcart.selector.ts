import { state } from "@angular/animations";
import { Appstate } from "../../app.state";
import { createSelector } from "@ngrx/store";
import { CartState } from "./addcart.reducer";



export const selectCartState = (state: Appstate) => state.cart;

export const selectProductsState = createSelector(
    selectCartState,
    (state: CartState) => state.products
)

export const selectTotalPrice = createSelector(
    selectCartState,
    (state: CartState) => state.totalprice
)
