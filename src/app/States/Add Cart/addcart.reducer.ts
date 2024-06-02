import { State, createReducer, on } from "@ngrx/store";
import { addToCart,increment } from "./addcart.action";
import { Iproduct } from "../../models/product.interface";

export interface CartState{
    products: Iproduct[];
}

export const initialCartState: CartState ={
    products: []
}



export const counterReducer = createReducer(
    
    initialCartState,
    on(addToCart, (state,{product})=>{
        
        const updtatedProduct = [...state.products,product]
        return{
            ...state,
            products:updtatedProduct
        }
    }),
    on(increment, (state, {productId}) => {
        
        const updtatedProduct = state.products.map((product)=> product.id === productId ? product.quantity++ : product)
        return{
            ...state,
        }
    })


)