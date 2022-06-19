import {productsActionsTypes} from "./action.types";

export const _setIsProductsLoading = (isLoading) => {
    return {type: productsActionsTypes.SET_IS_LOADING, payload: isLoading}
}

export const _setProductsList = list => {
    return {type: productsActionsTypes.SET_LIST, payload: list}
}

export const _setProductsTotalCount = totalCount => {
    return {type: productsActionsTypes.SET_TOTAL_COUNT, payload: totalCount}
}
