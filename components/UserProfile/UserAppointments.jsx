import React from 'react'
import Appointment from './Appointment'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'

const UserAppointments = () => {


    const router= useRouter()

    const url=`${process.env.NEXT_PUBLIC_B_PORT}/api/user/getuser`; 
    const [appointment , setappointment]= useState('')
    useEffect( ()=>{
      
      axios.get(url, {
        headers:{
          "x-auth-token":localStorage.usertoken
        }
     }).then((data)=>{
        setappointment(data)
     }).catch((err)=> console.log(err.message))
     
     
     if(!localStorage.usertoken){
      
      router.push('/User/UserRegistrationPage')
         console.log("its not worikng ")
    }
    },[])
  
      
   console.log("patitent ",appointment)
  

  return (
    <>
    
    <div className="p-4  w-full lg:max-w-[70%] bg-white m-auto rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"> Appointments </h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           {`Doctor's Name`}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            
                        </p>
                    </div>
            
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        
                       Appointment No.
                    </div>
                </div>
            </li>
           {appointment.data && appointment.data.appointment.map((data)=>{

                return(<>
                    
                    <Appointment
                         key={data._id}
                         docname={data.docname}
                         age={data.age}
                         appointmentno={data.appointmentno}
                         Pname={data.patientname}
                         doclocation={data.doclocation}
                         date={data.date}
                    />
                  
                  </>)

           }) }
            
            
        </ul>
   </div>

   </div>
   
    
    </>
  )
}

export default UserAppointments