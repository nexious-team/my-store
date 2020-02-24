import {
  UPDATE_USER,
  SET_USERNAME,
  CURRENT_USER,
  GET_USER,
  SELECTED_USER
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, items: action.payload };
    case UPDATE_USER:
      return { ...state, items: action.payload };
    case SET_USERNAME:
      return { ...state, items: action.payload };
    case CURRENT_USER:
      return { ...state, CURRENT_USER: action.payload };
    case SELECTED_USER:
      return { ...state, SELECTED_USER: action.payload };
    default:
      return state;
  }
};

export default userReducer;
