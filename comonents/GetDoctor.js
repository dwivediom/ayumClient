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

      <div className='   lg:grid  md:gird-cols-2  lg:grid-cols-4 gap-4'>
     {getDoctor.doctor&&  getDoctor.doctor.map((doctor)=>{
             console.log('doctor',doctor)
           return( <Doctor key={doctor._id} name={doctor.doctor.name} 
            
                        specialist={doctor.specialist}
                        location={doctor.location}
                        phone={doctor.doctor.phone}
                        fees={doctor.fees}
                        timing={doctor.timing}

            />)
     })}
      </div>
     
    
    </>
  )
}

export default React.memo(GetDoctor)