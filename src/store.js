import {createStore,combineReducers} from "redux";
import red from "./reducer"

const store= createStore(red);
export default store