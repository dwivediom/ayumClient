import { QUICK_SEARCH } from "../constants/searchConstants"

export const quickSearchaction = (data)=>(dispatch)=>{
    console.log("data action  ",data)
  dispatch({type:QUICK_SEARCH , payload : data })

}