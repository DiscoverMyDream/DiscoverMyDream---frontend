import * as ActionTypes from './actionTypes'

export const GradeConvertor = (state = {
    isLoading: true,
    errMess: null,
    grade: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GRADECONVERT_SUCCESS:
            return { ...state, isLoading: false, errMess: null, grade: action.payload };

        case ActionTypes.GRADECONVERT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, grade: [] };

        case ActionTypes.GRADECONVERT_LOADING:
            return { ...state, isLoading: true, errMess: [], grade: [] };

        default:
            return state;
    }
}