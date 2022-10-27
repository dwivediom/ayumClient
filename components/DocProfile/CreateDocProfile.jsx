import React, { useEffect } from 'react'

const CreateDocProfile = () => {
  useEffect(()=>{

    const data = localStorage.getItem('token'); 
    console.log(data) 
 

  },[])
   
  return (
    <div>CreateDocProfile</div>
  )
}

export default CreateDocProfile