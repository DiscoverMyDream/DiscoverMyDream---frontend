import * as ActionTypes from './actionTypes'

export const GmatPrediction = (state = {
    isLoading: true,
    errMess: null,
    gmatAdmission: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GCOLLEGEPREDICT_SUCCESS:
            return { ...state, isLoading: false, errMess: null, gmatAdmission: action.payload };

        case ActionTypes.GCOLLEGEPREDICT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, satAdmission: [] };

        case ActionTypes.GCOLLEGEPREDICT_LOADING:
            return { ...state, isLoading: true, errMess: [], gmatAdmission: [] };

        default:
            return state;
    }
}