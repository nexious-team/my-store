import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// const initialState = {};

const middleware = [thunk];
const composEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composEn(applyMiddleware(...middleware))
);

export default store;
