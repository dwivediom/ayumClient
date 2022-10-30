import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
import { useDispatch, useSelector } from "../../redux/store/store";
import { createDocProfileAction } from "../../redux/actions/docActions";
import setAuthToken from "../../utils/setauthtoken";

const CreateDocProfile = () => {
  const router = useRouter();
  const [token, settoken] = useState("");
  const [profile, setprofile] = useState({
    clinic: "",
    location: "",
    timing: "",
    bio: "",
    status: "",
    specialist: "",
    fees: "",
    website: "",
    youtube: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const dispatch = useDispatch();
  const postprofile = useSelector((state) => state.createDocProfileReducer);
  useEffect(() => {
    const data = localStorage.getItem("doctoken");
    settoken(data);

    if (!data) {
      router.push("/DocLogin");
    }
  }, [router]);
  const setclick = (e) => {
    e.preventDefault();
    dispatch(createDocProfileAction(profile));
    console.log(postprofile && postprofile);
  };

  const handlechange = (e) => {
    const newdata = { ...profile };
    newdata[e.target.id] = e.target.value;
    setprofile(newdata);
  };

  return (
    <>
      <h2 className="m-auto text-center text-cyan-500 font-bold">
        Update profile{" "}
      </h2>
      <form className=" lg:w-[60%]  m-auto">
        <div className="mb-6">
          <label
            htmlFor="clinic"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your clinic/hospital
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="clinic"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Ayum clinic/hospital"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            location
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="timing"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            timing{" "}
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="timing"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="from 10 A.M to 3P.M "
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            status
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="HOD / MD"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="specialist"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {" "}
            specialist
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="specialist"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="fees"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your fees
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="fees"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Rs500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your website
          </label>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            id="website"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            r
          />
        </div>

        {postprofile.docProfile && (
          <h5 className="text-green-500"> pofile updated </h5>
        )}

        <button
          type="submit"
          onClick={(e) => setclick(e)}
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateDocProfile;
