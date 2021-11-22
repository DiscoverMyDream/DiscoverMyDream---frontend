import * as ActionTypes from './actionTypes'

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.USER_UPDATE_PROFILE_REQUEST:
        return { loading: true };
      case ActionTypes.USER_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload };
      case ActionTypes.USER_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      case ActionTypes.USER_UPDATE_PROFILE_RESET:
          return {};
      default:
        return state;
    }
  };