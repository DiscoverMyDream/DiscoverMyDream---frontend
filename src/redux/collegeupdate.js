import * as ActionTypes from './actionTypes';

export const collegeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.COLLEGE_DELETE_REQUEST:
        return { loading: true };
      case ActionTypes.COLLEGE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ActionTypes.COLLEGE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
export const collegeCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.COLLEGE_CREATE_REQUEST:
        return { loading: true };
      case ActionTypes.COLLEGE_CREATE_SUCCESS:
        return { loading: false, success: true, college: action.payload };
      case ActionTypes.COLLEGE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ActionTypes.COLLEGE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  
export const collegeUpdateReducer = (state = { college: {} }, action) => {
    switch (action.type) {
      case ActionTypes.COLLEGE_UPDATE_REQUEST:
        return { loading: true };
      case ActionTypes.COLLEGE_UPDATE_SUCCESS:
        return { loading: false, success: true, college: action.payload };
      case ActionTypes.COLLEGE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case ActionTypes.COLLEGE_UPDATE_RESET:
        return { college: {} };
      default:
        return state;
    }
  }