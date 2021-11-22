import * as ActionTypes from './actionTypes';

export const collegeListReducer = (state = { colleges: [] }, action) => {
    switch (action.type) {
      case ActionTypes.COLLEGE_LIST_REQUEST:
        return { loading: true, colleges: [] };
      case ActionTypes.COLLEGE_LIST_SUCCESS:
        return { loading: false, colleges: action.payload.colleges, pages: action.payload.pages, page:action.payload.page, }
      case ActionTypes.COLLEGE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  };
  
  export const collegeDetailsReducer = (
    state = { college: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case ActionTypes.COLLEGE_DETAILS_REQUEST:
        return {...state, loading: true };
      case ActionTypes.COLLEGE_DETAILS_SUCCESS:
        return { loading: false, college: action.payload };
      case ActionTypes.COLLEGE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };