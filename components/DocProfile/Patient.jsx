import React from 'react'

const Patient = (props) => {
    const {Pname, age , description , bookingId, appointmentno}=props
  return (
    <>
    
    <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white" >{appointmentno}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm ml-4 font-medium text-gray-900 truncate dark:text-white">
                           {Pname}
                        </p>
                        <p className="text-sm ml-4 text-gray-500 truncate dark:text-gray-400">
                            {description}
                        </p>
                    </div>
            
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            
                        </p>
                       
                       
                       {age}
                    </div>
                </div>
            </li>
    
    </>
  )
}

export default Patient