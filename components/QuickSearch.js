import React from 'react'
import styles from '../styles/quickSearch.module.css'
import { quickSearchaction } from '../redux/actions/searchAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useRouter } from 'next/router'


const QuickSearch = () => {
  const router =useRouter()
  const [key , setkey ]=useState(null)
  const dispatch = useDispatch(); 
  const qSearch=(e)=>{
     e.preventDefault()
     let val = e.target.innerText; 
        
      console.log(val)
        setkey(val)
       
      
        dispatch( quickSearchaction(val)) 
          router.push('/Search/Search')
       
      
  }

     

  return (
    <div    className={`m-4 grid grid-cols-4 lg:grid-cols-8 gap-2 ${styles.maindiv}`}>  
     <div  onClick={(e)=>qSearch(e)}    value='Kideny  '   className='h-12 lg:h-16 rounded-2xl  border-2 border-red-800 bg-red-400 text-center      pt-3 lg:pt-4  text-white decoration-8 '> <span className={`${styles.divtext}`}>Kideny</span> </div>
     <div  onClick={(e)=>qSearch(e)}    value='Dentist ' className=' h-12 lg:h-16 rounded-2xl border-2 border-blue-800   bg-blue-800 text-center   pt-3 lg:pt-4 '>  <span className={`${styles.divtext}`}>Dentist</span></div>
     <div  onClick={(e)=>qSearch(e)}    value='neuro   '   className=' h-12 lg:h-16 rounded-2xl border-2 border-green-800 bg-green-600 text-center   pt-3 lg:pt-4  ' > <span className={`${styles.divtext}`}  >neuro</span> </div>
     <div  onClick={(e)=>qSearch(e)}    value='surgery ' className=' h-12 lg:h-16 rounded-2xl border-2 border-yellow-600 bg-yellow-600 text-center pt-3 lg:pt-4 '> <span className={`${styles.divtext}`}  >surgery</span> </div>
     <div  onClick={(e)=>qSearch(e)}    value='Skin    ' className=' h-12 lg:h-16 rounded-2xl border-2 border-orange-800 bg-orange-600 text-center pt-3 lg:pt-4'>  <span className={`${styles.divtext}`}   >Skin</span></div>
     <div  onClick={(e)=>qSearch(e)}    value='Bone    '  className=' h-12 lg:h-16 rounded-2xl border-2 border-sky-800 bg-sky-600 text-center       pt-3 lg:pt-4'><span className={`${styles.divtext}`}   >Bone</span> </div>
     <div  onClick={(e)=>qSearch(e)}    value='Gynae   ' className=' h-12 lg:h-16 rounded-2xl  border-2 border-red-800 bg-pink-400 text-center    pt-3 lg:pt-4  text-white decoration-8'> <span className={`${styles.divtext}`}>Gynae</span> </div>
     <div  onClick={(e)=>qSearch(e)}    value='Medicine  ' className=' h-12 lg:h-16 rounded-2xl border-2 border-blue-800   bg-blue-800 text-center   pt-3 lg:pt-4 '>  <span className={`${styles.divtext}`}  >Medicine</span></div>


    </div>
     


  )
}

export default React.memo( QuickSearch)