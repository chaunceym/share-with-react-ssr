import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../common/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});

export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
// 两端维护不同的 store, 所以暴露一个函数来生成不同的 store
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
