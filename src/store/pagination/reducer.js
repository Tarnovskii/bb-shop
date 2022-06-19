import {paginationActionTypes} from "./action.types";

const initState = Object.freeze({
    limit: 10,
    skip: 0
})

export const paginationReducer = (state = initState, {payload, type}) => {
    switch (type) {
        case paginationActionTypes.SET_LIMIT:
            return {...state, limit: payload}
        case paginationActionTypes.SET_OFFSET:
            return {...state, skip: payload}
        default: return state
    }
}
