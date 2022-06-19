import configureStore from 'redux-mock-store'
import {_pushProductToCart} from "../actions";
import {cartActionTypes} from "../action.types";

const middlewares = []
const mockStore = configureStore(middlewares)

it('should dispatch action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(_pushProductToCart('100'))

    const actions = store.getActions()
    const expectedPayload = {type: cartActionTypes.PUSH_TO_CART, payload: '100'}

    expect(actions).toEqual([expectedPayload])
})
