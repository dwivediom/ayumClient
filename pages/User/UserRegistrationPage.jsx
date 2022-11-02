import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { bgPriColor } from '../../components/theam/theam'

import axios from 'axios'

import { authentication } from '../../firebase.config'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
// import OtpInput from "otp-input-react";
import { useSelector } from 'react-redux'


const UserRegistrationPage = () => {
  const docdata = useSelector((state)=>state.setdocDataReducer)
  const router = useRouter()
  const loginurl = `${process.env.NEXT_PUBLIC_B_PORT}/api/user/login`;
  const url = `${process.env.NEXT_PUBLIC_B_PORT}/api/user/register`;
  const [uid, setuid] = useState('')
  const [error, seterror] = useState('')
  const [response, setresponce] = useState('')
  const [otp, setotp] = useState('')
  const [viewphone, setviewphone] = useState(true)
  const [viewOtp, setviewOtp] = useState(false)
  const [viewName, setviewName] = useState(false)
  const [otpmsg, setotpmsg] = useState(null)
  const [data, setdata] = useState({
    name: '',
    email: '',
    phone: '',
    password: "",

  })

  const generateRecaptcha = () => {


    // window.recaptchaVerifier = initializeAppCheck(authentication, {
    //   provider: new ReCaptchaV3Provider('6LfOJtEiAAAAAO1zDyGYumO6UUwErzRV2_7-xMXE'),
    
    //   // Optional argument. If true, the SDK automatically refreshes App Check
    //   // tokens as needed.
    //   isTokenAutoRefreshEnabled: true
    // });



    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      provider: new ReCaptchaV3Provider('6LfOJtEiAAAAAO1zDyGYumO6UUwErzRV2_7-xMXE'), 
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      }
    }, authentication);
  }



  const requsetOtp = (e) => {
    e.preventDefault()
    generateRecaptcha()
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = `+91${data.phone}`
    console.log(phoneNumber)
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setviewOtp(true)
      }).catch((error) => {
        console.log(error.message)
        setotpmsg(error.message)
      });


  }




  const varifyOtp = (e) => {
    console.log(Otp)
    let Otp = e.target.value;
    setotp(Otp)
    if (Otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(Otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(result.user.uid)
        setuid(result.user.uid)
        login()
        setviewOtp(false)
        setviewphone(false)
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        setotpmsg(error.message)
        console.log(error.message)
      });
    }

  }


  const login = async () => {

    try {
      let userdata = await axios.post(loginurl, {

        phone: data.phone,

        password: data.phone,

      })


      setresponce(userdata)
      console.log(response)
      localStorage.setItem('usertoken', userdata.data.token);

      if (docdata != null && localStorage.usertoken) {
        router.push('/User/BookAppointmentPage')
      } else {

        router.push('/')
      }

    } catch (err) {
      setviewName(true)
      console.log(err.response)
      if (err.response) {
        
      }

    }


  }


  const submit = async (e) => {
    e.preventDefault();
    try {
      let userdata = await axios.post(url, {
        name: data.name,
        phone: data.phone,
        password: data.phone,

      })

      setresponce(userdata)
      console.log(response)
      localStorage.setItem('usertoken', userdata.data.token);
      console.log(localStorage.usertoken)
      
      if (docdata != null && localStorage.usertoken) {
        router.push('/User/BookAppointmentPage')
      } else {

        router.push('/')
      }
    } catch (err) {
      console.log(err.response)
      if (err.response) {
        seterror(err.response.data.error)
      }

    }


  }


  const handlechange = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value;
    setdata(newdata)

  }



  return (
   <>
   <div>

<div className='lg:w-[60%] m-auto'><form className='m-2'>
  <h2 className='m-auto text-center text-cyan-500 font-bold'>User Registration </h2>
  <div className="mb-6">
    {viewName && <div className="mb-6">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>

      <input value={data.name} onChange={(e) => handlechange(e)} type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Your name " required />
      <button type="submit" onClick={(e) => submit(e)} className="mt-5 text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>
    </div>}
    {viewphone && <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your phone</label>
      <input type="number" onChange={(e) => handlechange(e)} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="+91 5675453453" required />
    </div>}
  </div>



  {viewphone && <button type="submit" onClick={(e) => requsetOtp(e)} className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>}
</form>


  {viewOtp && <div className='m-2'>
    <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">otp</label>
    <input type="number"
    inputmode="numeric"
    autocomplete="one-time-code"
    pattern="\d{6}"
    
    onChange={(e) => varifyOtp(e)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" required />

  </div>}



  {response.status == 200 ? <h5 className='text-green-500'>Registration success!</h5> :

    <h5 className='text-red-600 text-bold'>{error && Array.isArray(error) ? error.map((data) => {
      return (`${data.msg}!!`)
    }) : error}</h5>}


  {otpmsg && <h3 className='text-red-600 text-bold'> `${otpmsg}` </h3>}
</div>

<div id='sign-in-button'></div>



</div>
 
   </>
  )
}

export default UserRegistrationPage