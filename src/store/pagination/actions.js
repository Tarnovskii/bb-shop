import {paginationActionTypes} from "./action.types";

export const _setPaginationOffset = (offset) => {
    return {type: paginationActionTypes.SET_OFFSET, payload: offset}
}

export const _setPaginationLimit = limit => {
    return {type: paginationActionTypes.SET_LIMIT, payload: limit}
}
