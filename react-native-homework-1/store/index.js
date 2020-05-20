import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import { listReducer, MODULE_NAME as listsModuleName } from "./lists";
import { userReducer, MODULE_NAME as userModuleName } from "./user";

const rootReducer = combineReducers({
  [listsModuleName]: listReducer,
  [userModuleName]: userReducer,
});

const store = createStore(rootReducer);

export default store;
