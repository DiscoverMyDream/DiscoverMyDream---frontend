import * as ActionTypes from './actionTypes';

export const Auth = (state = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    errMess: null,
    isAdmin: localStorage.getItem('isAdmin') ? true : false
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            console.log("request");
            return {
                
                ...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.creds
            };
        case ActionTypes.LOGIN_SUCCESS:
            console.log("hi",state.isAdmin);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                errMess: '',
                token: action.token,
                isAdmin: action.isAdmin
            };
        case ActionTypes.LOGIN_FAILURE:
            console.log("fail");
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        case ActionTypes.LOGOUT_REQUEST:
            console.log("outrequest");
            return {
                ...state,
                isLoading: true,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            console.log("outsuccess");
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: '',
                user: null,
                isAdmin: false
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
