import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function registerForm(props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    
    return (
        <form className="w-full max-w-sm flex flex-col justify-between items-center ">
            <div className="mb-4 flex flex-col w-full justify-between">
            <label
              htmlFor="firstname"
              className="text-gray-600 text-sm font-semibold text-start"
            >
              FIRST NAME
            </label>
            <input
              id="firstname"
              className="p-2 border w-full rounded border-gray-400 w-full"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4 flex flex-col w-full justify-between">
            <label
              htmlFor="lastname"
              className="text-gray-600 text-sm font-semibold text-start"
            >
              LAST NAME
            </label>
            <input
              id="lastname"
              className="p-2 border w-full rounded border-gray-400 w-full"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4 flex flex-col w-full justify-between">
            <label
              htmlFor="email"
              className="text-gray-600 text-sm font-semibold text-start"
            >
              EMAIL
            </label>
            <input
              id="email"
              className="p-2 border w-full rounded border-gray-400 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 flex w-full flex-col justify-between items-center">
            <div className="flex items-center w-full justify-between">
              <label
                htmlFor="password"
                className="text-gray-600 text-sm font-semibold"
              >
                PASSWORD
              </label>
              <a href="#" className="ml-2 text-sm text-gray-400 no-underline">
                Forgot Password?
              </a>
            </div>
            <div className="relative w-full">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                className="p-2 border rounded border-gray-400 w-full pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#F7941D] text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign up
          </button>
          <div className="mb-4 mt-[2%]">
            <a href="#" className="text-gray-500 no-underline">
              Already have account?
              <span className="text-blue-500 no-underline px-[10px]">Login</span>
            </a>
          </div>
        </form>
    );
}

export default registerForm;