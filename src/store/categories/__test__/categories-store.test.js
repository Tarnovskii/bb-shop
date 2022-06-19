import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {requestCategoriesList} from "../operations";
import {_setCategoriesList, _setIsCategoriesLoading} from "../actions";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('should execute fetch categories', () => {
    const store = mockStore({})

    return store.dispatch(requestCategoriesList()).then(() => {
        const actions = store.getActions()

        expect(actions).toEqual([_setIsCategoriesLoading(true), _setCategoriesList([
            "smartphones",
            "laptops",
            "fragrances",
            "skincare",
            "groceries",
            "home-decoration",
            "furniture",
            "tops",
            "womens-dresses",
            "womens-shoes",
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "womens-watches",
            "womens-bags",
            "womens-jewellery",
            "sunglasses",
            "automotive",
            "motorcycle",
            "lighting"
        ].map((c, i) => ({name: c, value: i}))), _setIsCategoriesLoading(false)])
    })
})
