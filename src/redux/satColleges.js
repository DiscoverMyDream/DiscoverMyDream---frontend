import * as ActionTypes from './actionTypes'

export const SatColleges = (state = {
    isLoading: true,
    errMess: null,
    sColleges: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SCOLLEGE_SUCCESS:
            return { ...state, isLoading: false, errMess: null, sColleges: action.payload };

        case ActionTypes.SCOLLEGE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, sColleges: [] };

        case ActionTypes.SCOLLEGE_LOADING:
            return { ...state, isLoading: true, errMess: [], sColleges: [] };

        case ActionTypes.ADD_SCOLLEGE:
            var College = action.payload;
            return { ...state, sColleges: state.sColleges.concat(College) };

        default:
            return state;
    }
}