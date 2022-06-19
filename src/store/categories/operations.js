import {_setCategoriesList, _setIsCategoriesLoading, _setSelectedCategory} from "./actions";
import {CategoriesAPI} from "../../services/CategoriesAPI";

export const requestCategoriesList = () => {
    return dispatch => {
        dispatch(_setIsCategoriesLoading(true))

        return new CategoriesAPI().getCategoriesList().then(({data}) => {
            dispatch(_setCategoriesList(data.map((category, index) => ({
                name: category,
                value: index,
            }))))
        }).catch(error => console.log(error)).finally(() => dispatch(_setIsCategoriesLoading(false)))
    }
}

export const setSelectedCategory = (category) => {
    return dispatch => {
        dispatch(_setSelectedCategory(category))
    }
}
