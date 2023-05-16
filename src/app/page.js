import '../utils/fontawesome';

import Image from 'next/image';
import regIcon from '../assets/reg-icon.png'
import resIcon from '../assets/res-icon.png'
import histIcon from '../assets/hist-icon.png'
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="p-0 m-0">
      <div className="bg-[black] w-full h-[50vh] flex flex-col justify-center items-center">
        <Navbar />
        <div className="flex flex-col justify-center w-[50%] text-[white] mt-[5%]">
          <h2 className="font-bold text-[28px]">
            Register your restourant on SupaMenu
          </h2>
          <p className="text-[24px] mt-[-1%]">for free and get more revenue!</p>
          <div className="w-full flex justify-between mt-[3%] mb-[7.5%]">
            <button className="w-[45%] rounded-[10px] bg-[#F7941D] font-medium py-[1%]">
              Register your Restourant
            </button>
            <button className="w-[45%] border-[1.25px] border-[white] font-medium rounded-[10px] px-[2%]">
              Restourant already registered? Signin
            </button>
          </div>
        </div>
      </div>
      <div className="text-[black] bg-[url('../assets/bg-main.png')] w-full h-[50vh]">
        <h2 className="text-center font-bold text-[24px] pt-[2%]">
          How it works
        </h2>
        <div className="flex justify-evenly w-[80%] items-center pt-[2%] ml-[10%]">
          <div className="w-[20%] flex flex-col items-center justify-center bg-[white] rounded-md h-[40%] py-[2.5%]">
            <Image src={regIcon} className='h-[20%] w-[20%]' alt="registration icon" />
            <h2 className="font-semibold text-[20px]">Step 1</h2>
            <p>Register your restourant</p>
          </div>
          <div className="w-[20%] flex flex-col items-center justify-center bg-[white] rounded-md h-[40%] py-[2.5%]">
            <Image src={resIcon} className='h-[20%] w-[20%]' alt="restaurant icon" />
            <h2 className="font-semibold text-[20px]">Step 2</h2>
            <p>Register your restourant</p>
          </div>
          <div className="w-[20%] flex flex-col items-center justify-center bg-[white] rounded-md h-[40%] py-[2.5%]">
            <Image src={histIcon} className='h-[20%] w-[20%]' alt="registration icon" />
            <h2 className="font-semibold text-[20px] py-[2%]">Step 3</h2>
            <p>Start receiving orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}
