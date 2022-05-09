import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "../reducer/authReducer";
import { bubblesReducer } from "../reducer/bubblesReducer";

const reducers = combineReducers({
  bubbles: bubblesReducer,
  auth: authReducer,
});

export const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
