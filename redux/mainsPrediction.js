import * as ActionTypes from './actionTypes'

export const MainsPrediction = (state = {
    isLoading: true,
    errMess: null,
    mrankD: []
}, action) => {
    switch (action.type) {
        case ActionTypes.MRANKPREDICT_SUCCESS:
            return { ...state, isLoading: false, errMess: null, mrankD: action.payload };

        case ActionTypes.MRANKPREDICT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, mrankD: [] };

        case ActionTypes.MRANKPREDICT_LOADING:
            return { ...state, isLoading: true, errMess: [], mrankD: [] };

        default:
            return state;
    }
}