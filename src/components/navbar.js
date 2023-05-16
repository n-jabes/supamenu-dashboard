import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="flex justify-between w-[100%] pr-[5%] ">
      <div className="text-[48px] font-bold w-[20%] pl-[10%] text-[#fff]">
        Supa<span className="text-[#F7941D]">Menu</span>
      </div>
      <div className="w-[22.5%] flex mt-[1%] cursor-pointer justify-evenly items-center ">
        <div className="w-[10%]">
          <FontAwesomeIcon
            className="w-[20px] h-[25px] text-[#fff]"
            icon={faSearch}
          />
        </div>
        <div className="w-[7%] relative">
          <FontAwesomeIcon
            className="w-[20px] h-[25px] text-[#fff]"
            icon={faBell}
          />
          <div className="w-[10px] h-[10px] rounded-full absolute top-0 right-0 bg-[blue] border-[2px] border-[white] p-[1px]"></div>
        </div>
        <div className="flex text-[#fff] justify-between w-[65%] ml-[4%] h-[50px] items-center">
          <h2 className="w-[70%] pl-[5%] font-semibold items-center border-l-[2px] border-[white]">
            Jacques Kagabo
          </h2>
          <div className="w-[50px] h-[50px] rounded-full border-[2px] border-[white]">
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
