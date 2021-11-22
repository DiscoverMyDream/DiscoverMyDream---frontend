import * as ActionTypes from './actionTypes'

export const GmatColleges = (state = {
    isLoading: true,
    errMess: null,
    gColleges: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GCOLLEGE_SUCCESS:
            return { ...state, isLoading: false, errMess: null, gColleges: action.payload };

        case ActionTypes.GCOLLEGE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, gColleges: [] };

        case ActionTypes.GCOLLEGE_LOADING:
            return { ...state, isLoading: true, errMess: [], gColleges: [] };

        case ActionTypes.ADD_GCOLLEGE:
            var College = action.payload;
            return { ...state, gColleges: state.gColleges.concat(College) };

        default:
            return state;
    }
}