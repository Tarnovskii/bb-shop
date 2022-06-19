import {categoriesTypes} from "./action.types";

const initState = Object.freeze({
    isLoading: false,
    selectedCategory: null,
    list: []
})

export const categoriesReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case categoriesTypes.SET_IS_LOADING:
            return {...state, isLoading: payload}
        case categoriesTypes.SET_LIST:
            return {...state, list: payload}
        case categoriesTypes.SET_SELECT_CATEGORY:
            return {...state, selectedCategory: payload}
        default: return state
    }
}
