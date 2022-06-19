import {_setIsProductsLoading, _setProductsList, _setProductsTotalCount} from "./actions";
import {ProductsAPI} from "../../services/ProductsAPI";

export const requestProductsListByQuery = (limit, skip, q) => {
    return dispatch => {
        dispatch(_setIsProductsLoading(true))

        new ProductsAPI().getProductsByQuery(q, skip, limit).then(({data: {products, total}}) => {
            dispatch(_setProductsList(products))
            dispatch(_setProductsTotalCount(total))
        }).catch(error => console.log(error)).finally(() => dispatch(_setIsProductsLoading(false)))
    }
}

export const requestProductsListByCategory = (limit, skip, category) => {
    return dispatch => {
        dispatch(_setIsProductsLoading(true))

        new ProductsAPI().getProductsByCategory(category, skip, limit).then(({data: {products, total}}) => {
            dispatch(_setProductsList(products))
            dispatch(_setProductsTotalCount(total))
        }).catch(error => console.log(error)).finally(() => dispatch(_setIsProductsLoading(false)))
    }
}
