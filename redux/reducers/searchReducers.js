import { QUICK_SEARCH } from "../constants/searchConstants"

export const quickSearchReducer = (state ={searchkey:null , event:false}, action )=>{
    switch(action.type){ 
        case QUICK_SEARCH : 
             return ({...state , searchkey:action.payload , event:false})
        default : 
             return  state      
    }
}