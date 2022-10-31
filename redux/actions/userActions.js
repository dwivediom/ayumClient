import { SET_DOC_DATA  } from "../constants/userConstants";

export const setDocDataAction = (data)=>(dispatch)=>{
    console.log(data)
  dispatch({type:SET_DOC_DATA , payload : data })

}