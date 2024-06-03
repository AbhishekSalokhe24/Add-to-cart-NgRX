import { State, createReducer, on } from "@ngrx/store";
import { addToCart,decrement,increment, removeItem } from "./addcart.action";
import { Iproduct } from "../../models/product.interface";


export interface CartState{
    products: Iproduct[];
    totalprice: number
}

export const initialCartState: CartState = {
    products: [],
    totalprice: 0
}

export function calculatePrice(products: Iproduct[]){
    return products.reduce((total,product)=> total + (product.price * product.quantity),0);
}

export const cartReducer = createReducer(
    
    initialCartState,
    on(addToCart, (state,{product})=>{
        debugger;
        const updtatedProduct = [...state.products,product]
        return{
            ...state,
            products:updtatedProduct,
            totalprice:calculatePrice(updtatedProduct)
        }
    }),
    on(increment, (state, { productId }) => {
        const updatedProducts = state.products.map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        );
        return {
          ...state,
          products: updatedProducts,
          totalprice:calculatePrice(updatedProducts)
        };
      }),
      on(decrement, (state, { productId }) => {
        const updatedProducts = state.products.map((product) =>
          product.id === productId && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        return {
          ...state,
          products: updatedProducts,
          totalprice:calculatePrice(updatedProducts)
        };
      }),


    on(removeItem, (state,{productId})=>{
        const updtatedProduct = state.products.filter((product)=> product.id !== productId)
        return{
            ...state,
            products:updtatedProduct,
            totalprice:calculatePrice(updtatedProduct)
        }
    })


)