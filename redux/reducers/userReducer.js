import { SET_DOC_DATA  } from "../constants/userConstants";

export const setdocDataReducer = (state ={docdata:null}, action )=>{
    switch(action.type){ 
        case SET_DOC_DATA : 
             return ({...state , docdata:action.payload})
        default : 
             return  state      
    }
}