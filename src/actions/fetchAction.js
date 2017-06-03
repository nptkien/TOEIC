import {FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './types';


export function getData() {
    return {
        type: FETCHING_DATA
    }
}
export function getDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}
export function getDataFailure() {
    return {
        type: FETCH_DATA_FAILURE
    }
}