import * as ActionTypes from './actionTypes'

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case ActionTypes.USER_LIST_REQUEST:
        return { loading: true };
      case ActionTypes.USER_LIST_SUCCESS:
        return { loading: false, users: action.payload };
      case ActionTypes.USER_LIST_FAIL:
        return { loading: false, error: action.payload };
      case ActionTypes.USER_LIST_RESET:
        return { users: [] };
      default:
        return state;
    }
  };
export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.USER_DELETE_REQUEST:
        return { loading: true };
      case ActionTypes.USER_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ActionTypes.USER_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case ActionTypes.USER_UPDATE_REQUEST:
        return { loading: true };
      case ActionTypes.USER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case ActionTypes.USER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case ActionTypes.USER_UPDATE_RESET:
        return {
          user: {},
        };
      default:
        return state;
    }
  };