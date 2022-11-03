import { combineReducers } from "redux";
import { getDoctorReducer,createDocProfileReducer } from "../reducers/docReducers";
import { setdocDataReducer } from "../reducers/userReducer";
import { quickSearchReducer } from "../reducers/searchReducers";
// Import all reducers


export const rootReducers = combineReducers({
    getDoctorReducer: getDoctorReducer,
    createDocProfileReducer:createDocProfileReducer,
    setdocDataReducer, 
    quickSearchReducer
})
