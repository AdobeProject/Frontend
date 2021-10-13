import { combineReducers } from "redux";
import mainReducer from "./reducers/main";
import categoriesReducer from "./reducers/categories";

export default combineReducers({
  mainReducer,
  categoriesReducer,
});
