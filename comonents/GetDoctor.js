import React,{useCallback, useEffect ,useLayoutEffect, useState ,memo} from 'react'
import { useDispatch, useSelector } from '../redux/store/store'
import { getallDoctorAction } from '../redux/actions/docActions';
import { bgPriColor } from './theam/theam';
import Doctor from './Doctor';

const GetDoctor = () => {
    const [doctorData , setDoctorData ]= useState(''); 
   
    const dispatch = useDispatch(); 
    
    const getDoctor = useSelector((state)=>state.getDoctorReducer)
      
    console.log(getDoctor)
    useEffect(()=>{
         dispatch(getallDoctorAction())
         

    },[dispatch])
 
    if(getDoctor.loading){
      return<h1>loading... </h1>
    }
     
    
     
  return (
    <>

      
     {getDoctor.doctor&&  getDoctor.doctor.map((doctor)=>{
           return( <Doctor key={doctor._id}/>)
     })}
  
     
    
    </>
  )
}

export default React.memo(GetDoctor)