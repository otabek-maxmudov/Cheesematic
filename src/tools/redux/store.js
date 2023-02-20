import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers/index";

const store = configureStore({ reducer: Reducers });
export default store;
