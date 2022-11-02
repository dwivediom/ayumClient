import React from 'react'


const Appointment = (props) => {
 const { docname, description, appointmentno, age, Pname, doclocation, date } = props
      
     const appodate = new Date(date); 



    return (
        <>

            <li className="py-3 sm:py-4">
                <div className="flex items-center  space-x-4">

                    <div className="flex-1 min-w-0">
                        <p className="text-sm ml-4 font-medium text-gray-900 truncate dark:text-white">
                            {docname}
                        </p>
                        <p className="text-sm ml-4 text-gray-500 truncate dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline mr-2 h-5 text-cyan-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {doclocation}
                        </p>
                        <p className="text-sm mt-1 ml-4 text-gray-500 truncate dark:text-gray-400">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline mr-2 h-5 text-cyan-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            {Pname}
                        </p>



                    </div>

                    <div className="inline-flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
                        <h2 className=''> {appointmentno}</h2>

                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">

                            {`${appodate.getDate()}-${appodate.getMonth()}-${appodate.getFullYear()}`}

                        </p>



                    </div>
                </div>
            </li>

        </>
    )
}

export default Appointment