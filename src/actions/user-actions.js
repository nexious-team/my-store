import { CURRENT_USER, GET_USER, UPDATE_USER, SELECTED_USER } from "./types";
import auth from "../services/authService";

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER,
    payload: {
      user: auth.currentUser()
    }
  });
};

export const currentUser = user => dispatch => {
  dispatch({
    type: CURRENT_USER,
    payload: user
  });
};
export const selectedUser = selected_user => dispatch => {
  dispatch({
    type: SELECTED_USER,
    payload: selected_user
  });
};
export const updateUser = user => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user
  });
};
