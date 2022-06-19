import {_setPaginationLimit, _setPaginationOffset} from "./actions";

export const setPaginationLimit = (limit) => {
    return dispatch => {
        dispatch(_setPaginationLimit(limit))
    }
}

export const setPaginationOffset = (offset) => {
    return dispatch => {
        dispatch(_setPaginationOffset(offset))
    }
}
