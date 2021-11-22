import * as ActionTypes from './actionTypes'

export const SatPrediction = (state = {
    isLoading: true,
    errMess: null,
    satAdmission: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SCOLLEGEPREDICT_SUCCESS:
            return { ...state, isLoading: false, errMess: null, satAdmission: action.payload };

        case ActionTypes.SCOLLEGEPREDICT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, satAdmission: [] };

        case ActionTypes.SCOLLEGEPREDICT_LOADING:
            return { ...state, isLoading: true, errMess: [], satAdmission: [] };

        default:
            return state;
    }
}