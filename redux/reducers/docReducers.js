import{GET_DOCTOR_FAIL, GET_DOCTOR_REQUEST,GET_DOCTOR_SUCCESS} from '../constants/docConstants'; 



   export const getDoctorReducer = (state = { doctor: [],loading:false }, action) => {
    console.log("out side switch")
   switch (action.type) {
     case GET_DOCTOR_REQUEST:
     
       return { ... state ,loading: true};
 
     case GET_DOCTOR_SUCCESS:
         console.log("action.payload:" ,state)
       return {...state,loading: false, doctor: [...action.payload] };

            
     case GET_DOCTOR_FAIL:
       return {...state, loading: false, error: action.payload };
 
     default:
       return state;
   }


}