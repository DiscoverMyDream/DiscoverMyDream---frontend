import * as ActionTypes from './actionTypes'

export const AdvancedPrediction = (state = {
    isLoading: true,
    errMess: null,
    arankD: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ARANKPREDICT_SUCCESS:
            return { ...state, isLoading: false, errMess: null, arankD: action.payload };

        case ActionTypes.ARANKPREDICT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, arankD: [] };

        case ActionTypes.ARANKPREDICT_LOADING:
            return { ...state, isLoading: true, errMess: [], arankD: [] };

        default:
            return state;
    }
}