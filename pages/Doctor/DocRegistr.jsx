
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { bgPriColor } from '../../components/theam/theam'
import { doctorRegister } from '../../pages/api/DoctorApi/DocApi'
import axios from 'axios'
import { Port } from '../../pages/api/Mainport'
import { authentication } from '../../firebase.config'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
// import OtpInput from "otp-input-react";
import { useSelector } from 'react-redux'

const DocRegistr = () => {

  const docdata = useSelector((state) => state.setdocDataReducer)
  const router = useRouter()
  const loginurl = `${process.env.NEXT_PUBLIC_B_PORT}/api/doctor/login`;
  const url = `${process.env.NEXT_PUBLIC_B_PORT}/api/doctor/register`;
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
    phone: '',
    password: "",
    hospital: '',
    city:" "


  })

  const generateRecaptcha = () => {

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
      localStorage.setItem('doctoken', userdata.data.token);

      if ( localStorage.doctoken) {
        router.push('/Doctor/DocAppointment')
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
        city:data.city, 
        hospital:data.hospital
        

      })

      setresponce(userdata)
      console.log(response)
      localStorage.setItem('doctoken', userdata.data.token);
      console.log(localStorage.doctoken)

      if ( localStorage.doctoken) {
        router.push('/Doctor/createDocProfile')
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
    <div className='lg:w-[60%]  m-auto'>

      <div>
        <h2 className='m-auto text-center text-cyan-500 font-bold'>Doctor Registration</h2>
        <form className='m-2' >

          {viewphone&&<div className="mb-6">
            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Phone </label>
            <input value={data.phone} onChange={(e) => handlechange(e)} type="number" id="phone" name='phone' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="9812345678" required />
          </div>}
          {viewphone && <button type="submit" onClick={(e) => requsetOtp(e)} className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>}

          {viewName&&<div>

            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input value={data.name} onChange={(e) => handlechange(e)} type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Your name " required />
            </div>

            <div className="mb-6">
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your city </label>
              <input value={data.city} onChange={(e) => handlechange(e)} type="text" id="city" name='city' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Mumbai" required />
            </div>



            <div className='grid grid-cols-2 gap-1'>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input onChange={(e) => handlechange(e)} name='hospital' type="radio" value="gov hospital" className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Government hospital </label>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input onChange={(e) => handlechange(e)} name='hospital' type="radio" value="clinic" className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Clinic </label>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input autoComplete='off' onChange={(e) => handlechange(e)} name='hospital' type="radio" value="private hospital" className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Private hospital </label>
              </div>

            </div>


            <button type="submit" onClick={(e) => submit(e)} className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>

          </div>}
        </form>

        {viewOtp && <div className='m-2'>
          <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">otp</label>
          <input type="number"
          inputmode="numeric"
          autocomplete="one-time-code"
          pattern="\d{6}"
          
          onChange={(e) => varifyOtp(e)} id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" required />

        </div>}


        {response.status == 200 ? <h5 className='text-green-500'>Registration success!</h5> :

          <h5 className='text-red-600 text-bold'>{error && Array.isArray(error) ? error.map((data) => {
            return (`${data.msg}!!`)
          }) : error}</h5>}

      
      </div>

      <div id='sign-in-button'></div>


    </div>
  )
}

export default DocRegistr