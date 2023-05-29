import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

let store = null;
store = createStore(rootReducer, compose(applyMiddleware(createLogger())));
export default store;
