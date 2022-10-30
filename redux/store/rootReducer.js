import { combineReducers } from "redux";
import { getDoctorReducer,createDocProfileReducer } from "../reducers/docReducers";


// Import all reducers


export const rootReducers = combineReducers({
    getDoctorReducer: getDoctorReducer,
    createDocProfileReducer:createDocProfileReducer
})
