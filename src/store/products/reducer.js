import {productsActionsTypes} from "./action.types";

const initState = Object.freeze({
    list: [],
    isLoading: false,
    totalCount: 0,
})

export const productsReducer = (state = initState, {payload, type}) => {
    switch (type) {
        case productsActionsTypes.SET_LIST:
            return {...state, list: payload}
        case productsActionsTypes.SET_IS_LOADING:
            return {...state, isLoading: payload}
        case productsActionsTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: payload}
        default: return state
    }
}
