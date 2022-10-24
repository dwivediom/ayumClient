
import axios  from "axios";
import{GET_DOCTOR_FAIL, GET_DOCTOR_REQUEST,GET_DOCTOR_SUCCESS} from '../constants/docConstants'; 


export const getallDoctorAction = () => async (dispatch) => {

    try {
      dispatch({ type: GET_DOCTOR_REQUEST });
      const { data } = await axios.get(
        "http://192.168.156.152:5000/api/profile"
      );
     console.log(data)
      dispatch({ type: GET_DOCTOR_SUCCESS, payload: data });
       console.log("data success")
    } catch (error) {
      dispatch({
        type: GET_DOCTOR_FAIL,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
