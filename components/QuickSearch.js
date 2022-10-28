import React from 'react'
import styles from '../styles/quickSearch.module.css'
const QuickSearch = () => {
  return (
    <div className={`m-4 grid grid-cols-4 lg:grid-cols-8 gap-2 ${styles.maindiv}`}>  
     <div className='h-12 lg:h-16 rounded-2xl  border-2 border-red-600 bg-red-400 text-center      pt-3 lg:pt-4  text-white decoration-8'> <span className={`${styles.divtext}`}>Kideny</span> </div>
     <div className=' h-12 lg:h-16 rounded-2xl border-2 border-blue-600   bg-blue-600 text-center   pt-3 lg:pt-4 '>  <span className={`${styles.divtext}`}>Dentist</span></div>
     <div className=' h-12 lg:h-16 rounded-2xl border-2 border-green-600 bg-green-300 text-center   pt-3 lg:pt-4  ' > <span className={`${styles.divtext}`}>neuro</span> </div>
     <div className=' h-12 lg:h-16 rounded-2xl border-2 border-yellow-300 bg-yellow-300 text-center pt-3 lg:pt-4 '> <span className={`${styles.divtext}`}>surgery</span> </div>
     <div className=' h-12 lg:h-16 rounded-2xl border-2 border-orange-600 bg-orange-300 text-center pt-3 lg:pt-4'>  <span className={`${styles.divtext}`}>Skin</span></div>
     <div className=' h-12 lg:h-16 rounded-2xl border-2 border-sky-600 bg-sky-300 text-center       pt-3 lg:pt-4'><span className={`${styles.divtext}`}>Bone</span> </div>
     <div className=' h-12 lg:h-16 rounded-2xl  border-2 border-red-600 bg-pink-400 text-center    pt-3 lg:pt-4  text-white decoration-8'> <span className={`${styles.divtext}`}>Gynae</span> </div>
     <div className=' h-12 lg:h-16 rounded-2xl border-2 border-blue-600   bg-blue-600 text-center   pt-3 lg:pt-4 '>  <span className={`${styles.divtext}`}>Medicine</span></div>


    </div>
     


  )
}

export default React.memo( QuickSearch)