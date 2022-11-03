import React,{useCallback, useEffect ,useLayoutEffect, useState ,memo} from 'react'
import { useDispatch, useSelector } from '../redux/store/store'
import { getallDoctorAction } from '../redux/actions/docActions';
import { bgPriColor } from './theam/theam';
import Doctor from './Doctor';
import DoctorCard from './DoctorCard';

import styles from "../styles/doctorcard.module.css";

const GetDoctor = () => {
    const [doctorData , setDoctorData ]= useState(''); 
   
    const dispatch = useDispatch(); 
    
    const getDoctor = useSelector((state)=>state.getDoctorReducer)
      
   
    useEffect(()=>{
         dispatch(getallDoctorAction())
         

    },[dispatch])
 
    if(getDoctor.loading){
      return<h1>loading... </h1>
    }
     
    
     
  return (
    <>

      <div className='  md:grid m-auto  overflow-hidden md:grid-cols-2  lg:grid-cols-4  gap-3'>
      {/* <div className={`${styles.doc_container}`} > */}
     {getDoctor.doctor&&  getDoctor.doctor.slice(0).reverse().map((doctor)=>{
            
           return( <Doctor key={doctor._id} name={doctor.doctor.name} 
            
                        specialist={doctor.specialist}
                        location={doctor.location}
                        phone={doctor.doctor.phone}
                        fees={doctor.fees}
                        timing={doctor.timing}
                        docid={doctor.doctor._id}


            />)
     })}
      </div>
     
    
    </>
  )
}

export default React.memo(GetDoctor)