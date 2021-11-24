import * as ActionTypes from './actionTypes'

export const SatColleges = (state = {
    isLoading: true,
    errMess: null,
    sColleges: [],
    pages:0,
    page:0
}, action) => {
    switch (action.type) {
        case ActionTypes.SCOLLEGE_SUCCESS:
            console.log("S");
            return { ...state, isLoading: false, errMess: null, sColleges: action.payload.colleges,pages: action.payload .pages,page:action.payload.page};

        case ActionTypes.SCOLLEGE_FAILED:
            console.log("F");
            return { ...state, isLoading: false, errMess: action.payload, sColleges: [] };

        case ActionTypes.SCOLLEGE_LOADING:
            console.log("L");
            return { ...state, isLoading: true, errMess: [], sColleges: [] };

        case ActionTypes.ADD_SCOLLEGE:
            var College = action.payload;
            return { ...state, sColleges: state.sColleges.concat(College) };

        default:
            return state;
    }
}