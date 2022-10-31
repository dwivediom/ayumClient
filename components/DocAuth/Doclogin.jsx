import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { doctorLogin } from "../../pages/api/DoctorApi/DocApi";
import axios from "axios";

const DocLogin = () => {
  const router = useRouter();

  // const url = `http://localhost:5000/api/doctor/login`;
  const [dataerror, setdataerror] = useState("");
  const [response1, setresponse1] = useState("");

  const url = `${process.env.NEXT_PUBLIC_B_PORT}/api/doctor/login`;

  const [data, setdata] = useState({
    email: "",

    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      let docdata = await axios.post(url, {
        email: data.email,

        password: data.password,
      });

      setresponse1(docdata);
      console.log(response1, "yeh hai response1");
      localStorage.setItem("doctoken", docdata.data.token);
      if (localStorage.doctoken) {
        router.push("/Doctor/createDocProfile");
      }

      console.log(response1);
    } catch (err) {
      console.log(err);
      setdataerror(err);
    }
  };

  const handlechange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
  };

  console.log("error:", dataerror);

  return (
    <div className="lg:w-[60%] m-auto">
      <h2 className="m-auto text-center text-cyan-500 font-bold">
        Doctor Login{" "}
      </h2>

      <form className="m-2">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            onChange={(e) => handlechange(e)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            onChange={(e) => handlechange(e)}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          onClick={(e) => submit(e)}
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Submit
        </button>
      </form>

      {response1.status == 200 ? (
        <h5 className="text-green-500">Login success!</h5>
      ) : (
        <h5 className="text-red-600 text-bold">
          {" "}
          {dataerror && `check you credentials`}{" "}
        </h5>
      )}

      {response1.status == 200 ? (
        <h5 className="text-green-500">Registration success!</h5>
      ) : (
        <h5 className="text-red-600 text-bold">
          {" "}
          {dataerror && `check you credentials`}{" "}
        </h5>
      )}

      <h6 className="text-white mt-6 ml-2">
        {" "}
        If you Already have account
        <Link href="/DocRegistr">
          <a className="text-cyan-400"> Login</a>
        </Link>
      </h6>
    </div>
  );
};

export default DocLogin;
