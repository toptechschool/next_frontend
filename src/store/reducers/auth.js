import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  REGISTER_FAIL,
  HAS_TOKEN,
  UPDATE_PROFILE_SUCCESS,
} from "../actions/types";

let initialState;
if (typeof window !== "undefined") {
  initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: true,
  };
} else {
  initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: true,
  };
}
export default function auth(state = initialState, action) {
  switch (action.type) {
    case HAS_TOKEN:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case LOGOUT_FAILED:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
