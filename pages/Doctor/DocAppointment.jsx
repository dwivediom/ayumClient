import React from 'react'
import Patient from '../../components/DocProfile/Patient'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/router'



const DocAppointment = () => {
  const router= useRouter()

  const url=`${process.env.NEXT_PUBLIC_B_PORT}/api/dailyappointment`; 
  const [patient , setpatient]= useState('')
  useEffect( ()=>{
    
    axios.get(url, {
      headers:{
        "x-auth-token":localStorage.doctoken
      }
   }).then((data)=>{
     setpatient(data)
   }).catch((err)=> console.log(err.message))
   
   
   if(!localStorage.doctoken){
    
    router.push('/Doctor/DocRegistr')
       console.log("its not worikng ")
  }
  },[])

    
 console.log("patitent ",patient)



  return (
    <>
   
   
    <div className="p-4 w-full lg:max-w-[70%] bg-white m-auto rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
     <div className="flex justify-between items-center mb-4">
         <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Todays Appointments </h5>
         <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
             View all
         </a>
    </div>
    <div className="flow-root">
         <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
         <li className="py-3 sm:py-4">
                 <div className="flex items-center space-x-4">
                     <div className="flex-shrink-0">
                         <p className="text-sm font-medium text-gray-900 truncate dark:text-white" >S.no</p>
                     </div>
                     <div className="flex-1 min-w-0">
                         <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Name
                         </p>
                         <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                             
                         </p>
                     </div>
             
                     <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                         
                        
                        age
                     </div>
                 </div>
             </li>
            {patient.data && patient.data.patients.map((data)=>{
 
                 return(<>
                   <Patient
                    Pname={data.patientname }
                    description={data.description}
                    bookingId= {data.bookingId}
                    appointmentno={data.appointmentno}
                    age= {data.age}
                    />
                   
                   </>)
 
            }) }
             
             
         </ul>
    </div>
 
    </div>
    
    </>
  )
}

export default DocAppointment