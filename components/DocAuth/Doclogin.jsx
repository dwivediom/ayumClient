import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { doctorLogin } from "../../pages/api/DoctorApi/DocApi";
import axios from "axios";

const DocLogin = () => {
  const router = useRouter();

  const url = `http://localhost:5000/api/doctor/login`;
  const [dataerror, setdataerror] = useState("");
  const [response1, setresponce1] = useState("");

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

      setresponce1(docdata);
      if (docdata.status == 200) {
        router.push("/createDocProfile");
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
        <h5 className="text-green-500">Registration success!</h5>
      ) : (
        <h5 className="text-red-600 text-bold">
          {" "}
          {dataerror && `check you credentials`}{" "}
        </h5>
      )}

      <h6 className="text-white mt-6 ml-2">
        {" "}
        If you are Rgistred please go to{" "}
        <Link href="/DocRegistr">
          <a className="text-sky-500"> Registration page</a>
        </Link>
      </h6>
    </div>
  );
};

export default DocLogin;
