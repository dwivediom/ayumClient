import {Port} from "../Mainport"

// get doctor 
export const getdoctor = `${Port}/api/profile`
//doctor registr 
export const doctorRegister =`${Port}/api/doctor/register`            // method post 

//doctor login 
export const doctorLogin=`${Port}/api/doctor/login`                   //method post 

//doctor create profile 

export const createDocProfile = `${Port}/api/profile/createprofile`