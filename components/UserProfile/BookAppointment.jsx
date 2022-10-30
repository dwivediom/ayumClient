import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { bgPriColor } from '../theam/theam'
import { doctorRegister } from '../../pages/api/DoctorApi/DocApi'
import axios from 'axios'
import { Port } from '../../pages/api/Mainport'
import { useSelector } from 'react-redux'


const BookAppointment = () => {
    
  const docdata = useSelector((state)=>state.setdocDataReducer)
    

    const router= useRouter()
    const [doctordata , setdoctordata]= useState(docdata)
    const [error, seterror]=useState('')
    const [token , settoken]= useState()
    const [response, setresponce]=useState('')
   const [data , setdata]=useState({   
    patientname:'',
    age:"",
    description:''
   })
 
useEffect(()=>{
    if(docdata==''){ 
      router.push('/')
    }
    
    setdoctordata(docdata.docdata)
     
      
    if(localStorage.usertoken){ 
        const usertoken = localStorage.getItem('usertoken')
        settoken(usertoken)
    }else{
        router.push('/User/UserLoginPage')
    }

     
},[token, router, docdata])
console.log(doctordata)
const url=`${process.env.NEXT_PUBLIC_B_PORT}/api/appointment/${doctordata.docid}`; 
 console.log('url ',url)
  const submit= async (e)=>{
     e.preventDefault(); 
     try{
         let userdata = await axios.post(url,{
            
             patientname:data.patientname, 
             age:data.age, 
             description:data.description, 
         
         }, 
          {
           headers:{
             'x-auth-token':token 
           }

          }
         
         
         )
         
         setresponce(userdata)
         console.log(response)
        
         
         
        
     }catch(err){
            console.log(err.response)
            if(err.response){
             seterror(err.response.data.error)
            }
           
     }
     
    
  }
 
  const  handlechange=(e)=>{
    const newdata = {...data }
    newdata[e.target.id]=e.target.value; 
    setdata(newdata)    
    
 }



    
  return (
    <div><div className='lg:w-[60%] m-auto'><form className='m-2'>
    <h2 className='m-auto text-center text-cyan-500 font-bold'>Book Your Appoitnemnt</h2>
  
  <div className="mb-6">
        
        <label   htmlFor="patientname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name of patient</label>
        <input type="text" onChange={(e)=>handlechange(e)} id="patientname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="maruti " required/>
      </div>
      
      <div className="mb-6">
        <label   htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Age of patient </label>
        <input type="text"onChange={(e)=>handlechange(e)} id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" required/>
      </div>

      <div className="mb-6">
        <label   htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> description of problem/disease </label>
        <input type="text"onChange={(e)=>handlechange(e)} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" required/>
      </div>
      
      <button type="submit" onClick={(e)=>submit(e)}  className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>
    </form>
     
    { response.status==200? <h5 className='text-green-500'>Booking  success!</h5>:
         
         <h5 className='text-red-600 text-bold'>{error && Array.isArray(error) ? error.map((data)=>{
               return(`${data.msg}!!`)
          }): error  }</h5>}
  
  
    <h6  className='text-white mt-6 ml-2'> If you are Rgistred please go to  <Link href="/DocRegistr"><a className='text-sky-500'> Registration page</a></Link></h6>
    </div>
  
  
  
  
  
      </div>
  )
}

export default BookAppointment