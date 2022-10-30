import React from 'react'
import Patient from './Patient'

const DocAppointments = () => {
  return (
   <>
   
   
   <div class="p-4 w-full lg:max-w-[70%] bg-white m-auto rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Patients</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            
           <Patient/> 
            
            
        </ul>
   </div>

   </div>
   
   </>
  )
}

export default DocAppointments