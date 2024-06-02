import { createAction, props } from "@ngrx/store";
import { Iproduct } from "../../models/product.interface";

export const addToCart = createAction('[Cart Component] AddToCart', props<{product:Iproduct}>());
export const increment = createAction('[Cart Component] Increment', props<{productId: number}>());
export const decrement = createAction('[Cart Component] Decrement', props<{productId: number}>());