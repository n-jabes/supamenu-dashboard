'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import RegisterForm from '../../../components/registerForm.js'

function page() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#F7941D] flex justify-evenly items-center">
      <div className="w-[35%] h-[80%] flex items-center justify-center">
        <h2 className="text-[black] text-[52px] font-bold">
          Supa<span className="text-[#fff]">Menu</span>
        </h2>
      </div>
      <div className="w-[40%] h-[80%] border-[2px] border-[#fff] rounded-lg bg-[#fff] p-[2%] flex flex-col items-center justify-center">
        <h1 className="text-[24px] font-semibold mb-[3%]">Signup</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default page;
