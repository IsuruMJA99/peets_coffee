import React from "react";
import RevolutionImg from './images/Rectangle 32.png';
import { HiOutlineRefresh } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

function CoffeeRevolution() {
  return (
    <div>


<div className='my-10'>
  
    <div className="flex justify-center">
  <div>
    <div className="flex justify-center items-center h-[250px] w-[1000px]">
      <div className="mr-[40px]">
        <div className="text-yellow-700 text-3xl font-semibold font-['Lato'] leading-[42px]">OUR COFFEE</div>
        <div className="text-yellow-700 text-[32px] font-bold font-['Lato'] leading-[42px]">REVOLUTION</div><br/>
        <div className="w-[533px] text-neutral-800 mb-[20px] text-lg font-medium font-Lato">When Alfred Peet opened the doors to his first coffeebar in 1966, he forever changed the expectations of American coffee drinkers.</div>
        <button className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center mb-2 border-none focus:outline-none hover:bg-yellow-800">
          <div className="text-white text-sm font-semibold font-Lato ">LEARN MORE</div>
        </button>
      </div>
      <div className="ml-20 "> 
        <img src={RevolutionImg} className="h-[242px] w-[650px] ml-35" alt="Delivery Image" />
      </div>
    </div>
  </div>
</div>

  
</div>


      <div className="w-full h-[183px] bg-stone-100 flex items-center justify-between">
        <div className="ml-20">
          <div className="text-neutral-800 text-3xl font-semibold font-Lato leading-[42px] tracking-wider">
            NEVER MISS AN OFFER
          </div>
          <div className="w-[664px] text-neutral-800 text-lg font-medium font-Lato">
            Sign up for our newsletter and receive 10% off + free shipping on
            your first order.
          </div>
        </div>
        <div className="mr-20">
          <button className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center border-none focus:outline-none hover:bg-yellow-800">
            <div className="text-white text-sm font-semibold font-Lato ">
              SIGN UP
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeRevolution;
