import {cartActionTypes} from "./action.types";

export const _pushProductToCart = (price) => {
    return {type: cartActionTypes.PUSH_TO_CART, payload: price}
}

export const _popProductFromCart = (price) => {
    return {type: cartActionTypes.POP_FROM_CARD, payload: price}
}

export const _initCartTotalPrice = (totalPrice) => {
    return {type: cartActionTypes.INIT_TOTAL_PRICE, payload: totalPrice}
}

export const _clearCart = () => {
    return {type: cartActionTypes.RESET_TOTAL_PRICE}
}
