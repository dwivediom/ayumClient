import React from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setDocDataAction } from '../redux/actions/userActions';

const Doctor = (props) => {
   const dispatch = useDispatch()
   const router = useRouter(); 
   const {name,specialist , location , fees , phone   ,timing , docid     }=props; 

        

   const  Click=(e)=>{ 
    e.preventDefault() ; 


   dispatch(setDocDataAction(props))


    if(localStorage.usertoken){ 
         
       router.push('/User/BookAppointmentPage')
    }else{ 
      router.push('/User/UserLoginPage')
    }

   }











  return (
    <div className='mt-4'><div className="p-6 max-w-sm overflow-hidden rounded-lg border border-cyan-700 shadow-md bg-gray-800 light:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name} </h5>
        <h6 className='text-gray-100  border-solid inline p-1 border-cyan-500/40 rounded-full   border-[1px] ' > <span className='m-1' >{specialist}</span> </h6>
    </a>
    <div className='mt-2 '> <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-cyan-600/60 inline h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

      {location}
      
      
      
      
      </p> </div>

      <div className= 'grid  grid-cols-2 gap-1 mb-2'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline  text-cyan-600/60  h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

        <p className="mb-3 inline ml-1   font-normal text-gray-700 dark:text-gray-400"> {phone}</p>
    
        </div>
       
        
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-cyan-600/60  inline h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
           
        <p className="mb-3 inline ml-1   font-normal text-gray-700 dark:text-gray-400"> {timing}</p>

        </div>
      </div>
 

    <a href="#" onClick={(e)=>Click(e)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600  hover:bg-cyan-800 dark:focus:ring-cyan-500">
        Book slot
        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </a>
</div></div>
  )
}

export default Doctor