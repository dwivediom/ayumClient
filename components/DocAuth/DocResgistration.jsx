import React, { useState } from 'react'
import Link from 'next/link'
import { bgPriColor } from '../theam/theam'
import { doctorRegister } from '../../pages/api/DoctorApi/DocApi'
import axios from 'axios'
import { Port } from '../../pages/api/Mainport'


const DocResgistration = () => {
   const url=`http://localhost:5000/api/doctor/register`; 
   const [error, seterror]=useState('')
   const [response, setresponce]=useState('')
  const [data , setdata]=useState({
     name:'',
     email:'',
     phone:'',
     password:"",
     hospital:''

  })


 const submit= async (e)=>{
    e.preventDefault(); 
    try{
        let docdata = await axios.post(url,{
            name:data.name,
            email:data.email, 
            phone:data.phone, 
            password:data.password, 
            hospital:data.hospital
        })
        
        setresponce(docdata)
        console.log(response)

    }catch(err){
           console.log(err.response.data.error)
           seterror(err.response.data.error)
    }
    
   
 }


 const  handlechange=(e)=>{
    const newdata = {...data }
    newdata[e.target.id]=e.target.value; 
    setdata(newdata)    
    
 }



  return (
    <div>
 <form className='m-2' >
 <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
      <input value={data.name} onChange={(e)=>handlechange(e)} type="text" id="name" name='name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Your name " required/>
    </div>

    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
      <input value={data.email} onChange={(e)=>handlechange(e)} type="email" id="email" name='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="name@flowbite.com" required/>
    </div>

    <div class="mb-6">
      <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Phone </label>
      <input value={data.phone} onChange={(e)=>handlechange(e)} type="number" id="phone" name='phone' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="name@flowbite.com" required/>
    </div>
   

    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
      <input value={data.password}onChange={(e)=>handlechange(e)} type="password" id="password" name='password' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" required/>
    </div>
    <div className='grid grid-cols-2 gap-1'>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      </div>
      <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input  onChange={(e)=>handlechange(e)} name='hospital' type="radio" value="gov hospital" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
      </div>
      <label  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Government hospital </label>
    </div>
       
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input onChange={(e)=>handlechange(e)} name='hospital' type="radio" value="clinic" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
      </div>
      <label  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Clinic </label>
    </div>

    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input autoComplete='off' onChange={(e)=>handlechange(e)} name='hospital' type="radio" value="private hospital" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
      </div>
      <label  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Private hospital </label>
    </div>
 
    </div>
              
    <button type="submit" onClick={(e)=>submit(e)} class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>
  </form>



       { response.status==200? <h5 className='text-green-500'>Registration success!</h5>:
       
       <h5 className='text-red-600 text-bold'>{error && Array.isArray(error) ? error.map((data)=>{
             return(`${data.msg}!!`)
        }): error  }</h5>}
         
    <h6  className='text-white mt-6 ml-2'> If you are Rgistred please go to  <Link href="/DocLogin"><a className='text-sky-500'>Login page</a></Link></h6>
  </div>
  )
}

export default DocResgistration