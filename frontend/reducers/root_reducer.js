import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errors from './errors_reducer';
import entities_reducer from "./entities_reducer";


export default combineReducers({
    entities: entities_reducer,
    session: sessionReducer,
    errors,
})