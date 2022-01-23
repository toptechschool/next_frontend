import axios from "axios";
import * as actionTypes from "./types";
import {
  USER_LOGIN_API,
  USER_REGISTER_API,
  USER_LOGOUT_API,
  USER_PROFILE_API,
  USER_EMAIL_CONFIRMATION_API,
} from "../API_ENDPOINTS";
import { toast } from "react-toastify";

export const loadUser = () => (dispatch, getState) => {
  if (getState().auth.token) {
    axios
      .get(USER_PROFILE_API, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: actionTypes.HAS_TOKEN, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.LOGIN_FAIL });
      });
  } else {
    dispatch({ type: actionTypes.LOGIN_FAIL });
  }
};

export const logout = () => (dispatch, getState) => {
  axios
    .post(USER_LOGOUT_API, null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: actionTypes.LOGOUT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.LOGOUT_FAILED });
    });
};

export const register = (email, password, user_type) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password, user_type });
  console.log(body);
  axios
    .post(USER_REGISTER_API, body, config)
    .then((res) => {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch({ type: actionTypes.REGISTER_FAIL });
      console.log(err);
    });
};

export const login = (email, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  axios
    .post(USER_LOGIN_API, body, config)
    .then((res) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch({ type: actionTypes.LOGIN_FAIL });
      toast.error(err.response.data.error[0]);
      console.log(err.response.data.error[0]);
    });
};

export const confirmEmail = (uuid, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .get(USER_EMAIL_CONFIRMATION_API(uuid, token), config)
    .then((res) => console.log("FAILED"))
    .catch((err) => console.log(err));
};

export const updateProfile = (profile) => (dispatch, getState) => {
  const { bio, name, profile_pic } = profile;

  if (getState().auth.token) {
    const data = new FormData();
    if (profile_pic) {
      data.append("profile_pic", profile_pic);
    }
    if (name) {
      data.append("name", name);
    }
    if (bio) {
      data.append("bio", bio);
    }
    axios
      .patch(USER_PROFILE_API, data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: actionTypes.UPDATE_PROFILE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.warn(err));
  }
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
