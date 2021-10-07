import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducers, composeEnhancer(applyMiddleware(thunk)));
export default store;
