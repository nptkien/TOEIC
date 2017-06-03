import {FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions/types';

const DEFAULT_STATE = {
    data: [],
    isFetching: false,
    isFetched: false,
    error: false,
}
export default (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case FETCHING_DATA: 
        return {
            ...state,
            isFetching: true,
            data: [],
        }
        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            isFetching: false,
            data: action.payload,
        }
        case FETCH_DATA_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true,
        }
        default: return state
    }
}