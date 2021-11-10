import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];
const composeEnhances = compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhances(applyMiddleware(...middleware))
);

export default store;
