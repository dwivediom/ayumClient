
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { bgPriColor } from '../theam/theam'
import { doctorRegister } from '../../pages/api/DoctorApi/DocApi'
import axios from 'axios'
import { Port } from '../../pages/api/Mainport'
import { useSelector } from 'react-redux'

const UserLogin = () => {
  const docdata = useSelector((state)=>state.setdocDataReducer)
    const router= useRouter()
    const url=`${process.env.NEXT_PUBLIC_B_PORT}/api/user/login`; 
    const [error, seterror]=useState('')
    const [response, setresponce]=useState('')
   const [data , setdata]=useState({
  
     
      phone:'',
      password:"",
   
   })
 
 
  const submit= async (e)=>{
     e.preventDefault(); 
     try{
         let userdata = await axios.post(url,{
            
             phone:data.phone, 
           
             password:data.password, 
         
         })
         
         setresponce(userdata)
         console.log(response)
         localStorage.setItem('usertoken', userdata.data.token);
         
         if(docdata!=null && localStorage.usertoken  ){
          router.push('/User/BookAppointmentPage')
         }else{ 
          
          router.push('/')
         }
        
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
    <div>

<div className='lg:w-[60%] m-auto'><form className='m-2'>
  <h2 className='m-auto text-center text-cyan-500 font-bold'>User Login</h2>

<div className="mb-6">
      
      <label   htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your phone</label>
      <input type="phone" onChange={(e)=>handlechange(e)} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="+91 5675453453" required/>
    </div>
    
    <div className="mb-6">
      <label   htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
      <input type="password"onChange={(e)=>handlechange(e)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" required/>
    </div>
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800" required />
      </div>
      <label   htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button type="submit" onClick={(e)=>submit(e)}  className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>
  </form>
   
  { response.status==200? <h5 className='text-green-500'>Registration success!</h5>:
       
       <h5 className='text-red-600 text-bold'>{error && Array.isArray(error) ? error.map((data)=>{
             return(`${data.msg}!!`)
        }): error  }</h5>}


  <h6  className='text-white mt-6 ml-2'> If you are Rgistred please go to  <Link href="/DocRegistr"><a className='text-sky-500'> Registration page</a></Link></h6>
  </div>





    </div>
  )
}

export default UserLogin