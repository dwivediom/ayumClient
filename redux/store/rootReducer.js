import { combineReducers } from "redux";
import { getDoctorReducer,createDocProfileReducer } from "../reducers/docReducers";
import { setdocDataReducer } from "../reducers/userReducer";

// Import all reducers


export const rootReducers = combineReducers({
    getDoctorReducer: getDoctorReducer,
    createDocProfileReducer:createDocProfileReducer,
    setdocDataReducer
})
