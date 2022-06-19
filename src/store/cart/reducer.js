import {cartActionTypes} from "./action.types";

const initState = Object.freeze({
    totalPrice: 0
})

export const cartReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case cartActionTypes.PUSH_TO_CART:
            return {...state, totalPrice: state.totalPrice + payload}
        case cartActionTypes.POP_FROM_CARD:
            return {...state, totalPrice: state.totalPrice - payload}
        case cartActionTypes.INIT_TOTAL_PRICE:
            return {...state, totalPrice: payload}
        case cartActionTypes.RESET_TOTAL_PRICE:
            return {...state, totalPrice: 0}
        default: return state
    }
}
