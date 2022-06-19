import {
    addProductToCart,
    clearCartProductsArrayInCookie,
    getTotalProductsPrice,
    removeProductFromCart
} from "../../utils/cartManager";
import {_clearCart, _initCartTotalPrice, _popProductFromCart, _pushProductToCart} from "./actions";

export const pushProductToCart = (product) => {
    return dispatch => {
        addProductToCart(product)
        dispatch(_pushProductToCart(product.price))
    }
}

export const popProductFromCart = (product) => {
    return dispatch => {
        removeProductFromCart(product.id)
        dispatch(_popProductFromCart(product.price))
    }
}

export const initCartFromCookie = () => {
    return dispatch => {
        dispatch(_initCartTotalPrice(getTotalProductsPrice()))
    }
}

export const clearCart = () => {
    return dispatch => {
        clearCartProductsArrayInCookie()
        dispatch(_clearCart())
    }
}
