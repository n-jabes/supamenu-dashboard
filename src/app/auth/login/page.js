'use client';

import React, { useState } from 'react';
import LoginForm from '../../../components/loginForm.js'

function page() {

  return (
    <div className="w-[100vw] h-[100vh] bg-[#F7941D] flex justify-evenly items-center">
      <div className="w-[35%] h-[80%] flex items-center justify-center">
        <h2 className="text-[black] text-[52px] font-bold">
          Supa<span className="text-[#fff]">Menu</span>
        </h2>
      </div>
      <div className="w-[40%] h-[80%] border-[2px] border-[#fff] rounded-lg bg-[#fff] p-[2%] flex flex-col items-center justify-center">
        <h2 className="text-[#A4A6B3] text-[16px] mb-[3%] font-semibold">
          Welcome
        </h2>
        <h1 className="text-[24px] font-semibold mb-[3%]">Login to SupaMenu</h1>
        <h2 className="text-[#A4A6B3] text-[16px] mb-[2%] font-medium">
          Enter your email and password below
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default page;
