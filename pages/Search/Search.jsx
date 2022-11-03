import React from 'react'
import axios  from 'axios'
import { bgPriColor,bgSecColor } from '../../components/theam/theam'
import Doctor from '../../components/Doctor'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Search = () => {
    
    
    const [data, setdata ]=useState(null)
    const [input , setinput ]=useState('')
    const  sdata  = useSelector((state)=>state.quickSearchReducer)
    const [reload , setreload]=useState(true)
    const url=`${process.env.NEXT_PUBLIC_B_PORT}/api/search/${input}`; 
    useEffect(()=>{
          if(sdata.searchkey && reload){
             setinput(sdata.searchkey)
            input && onloadSearch(input)
     
              
          }
    },[sdata,reload,input])

    


    const onloadSearch= async (input)=>{
       
        const newurl=`${process.env.NEXT_PUBLIC_B_PORT}/api/search/${input}`; 
         console.log(newurl)
        const searchdata = await axios.get(newurl)
        console.log(searchdata)
        setdata(searchdata)
        setreload(false)
    }

    const onSearch= async (e)=>{
        setreload(false)
         if(e){   e.preventDefault(); }
         console.log(sdata)
        const searchdata = await   axios.get(url)
        console.log(searchdata)
        setdata(searchdata)
       
    }
        {data&& console.log(data.data)}


      const handleChange=(e)=>{
           let val =e.target.value
           setinput(val)
      }  

    return (
        <div className='m-4'>
       <form>   
       <label  htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
       <div className="relative">
           <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
               <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           </div>
           <input type="search" onChange={(e)=>handleChange(e)} id="default-search" className={`block p-4 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 ${bgSecColor} dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`} placeholder="Search Mockups, Logos..." required/>
           <button type="button" onClick={(e)=>onSearch(e)} className={`text-white absolute right-2.5 bottom-2.5 ${bgPriColor} hover:bg-cyan-800 focus:ring-7 focus:outline-none focus:ring-cyan-50 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-cyan-500`}>Search</button>
       </div>
   </form>

 <div className=' m-auto  grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-2 md:gap-4'>
      {data && data.data.map((doctor)=>{
           return( <Doctor key={doctor._id} name={doctor.name} 
            
            specialist={doctor.specialist}
            location={doctor.location}
            phone={doctor.phone}
            fees={doctor.fees}
            timing={doctor.timing}
            docid={doctor._id}
          

/>)
      })
        
      }
        </div>

   </div>
     )
}

export default Search