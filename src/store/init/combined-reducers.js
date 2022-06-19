import {combineReducers} from "redux";
import {categoriesReducer} from "../categories/reducer";
import {paginationReducer} from "../pagination/reducer";
import {productsReducer} from "../products/reducer";
import {cartReducer} from "../cart/reducer";

export const combinedReducers = combineReducers({
    categoriesState: categoriesReducer,
    paginationState: paginationReducer,
    productsState: productsReducer,
    cartState: cartReducer,
});
