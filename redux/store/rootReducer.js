import { combineReducers } from "redux";
import { getDoctorReducer } from "../reducers/docReducers";

// Import all reducers


export const rootReducers = combineReducers({
    getDoctorReducer: getDoctorReducer
})
