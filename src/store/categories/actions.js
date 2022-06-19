import {categoriesTypes} from "./action.types";

export const _setIsCategoriesLoading = (isLoading) => {
    return {type: categoriesTypes.SET_IS_LOADING, payload: isLoading}
}

export const _setCategoriesList = (list) => {
    return {type: categoriesTypes.SET_LIST, payload: list}
}

export const _setSelectedCategory = (category) => {
    return {type: categoriesTypes.SET_SELECT_CATEGORY, payload: category}
}
