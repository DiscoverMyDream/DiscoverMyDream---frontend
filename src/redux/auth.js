import * as ActionTypes from './actionTypes';

export const Auth = (state = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    errMess: null,
    admin: false
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.creds
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                errMess: '',
                token: action.token,
                admin: action.admin
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: '',
                user: null,
                admin: false
            };
        default:
            return state
    }
}
export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case ActionTypes.USER_DETAILS_REQUEST:
        return { ...state, loading: true };
      case ActionTypes.USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case ActionTypes.USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      case ActionTypes.USER_DETAILS_RESET:
        return { user: {} };
      default:
        return state;
    }
  };