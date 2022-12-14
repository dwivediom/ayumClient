import React from 'react'
import styles from "../styles/search.module.css"
import { useRouter } from 'next/router'
import { bgSecColor, bgPriColor } from './theam/theam'



const SearchBox = () => {
  const router = useRouter()

  const clickserch=()=>{
     router.push('/Search/Search')
  }

  return (
     <div className='m-4' onClick={()=>clickserch()}>
    <form>   
    <label  htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className={`block p-4 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 ${bgSecColor} dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`} placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className={`text-white absolute right-2.5 bottom-2.5 ${bgPriColor} hover:bg-cyan-800 focus:ring-7 focus:outline-none focus:ring-cyan-50 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-cyan-500`}>Search</button>
    </div>
</form>
</div>
  )
}

export default SearchBox