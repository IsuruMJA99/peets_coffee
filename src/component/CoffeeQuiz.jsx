import React from 'react'
import quizImg from './images/peets_coffee_grains 1.png';
import { FaArrowRight } from "react-icons/fa";

function CoffeeQuiz() {
  return (
    <div className="flex items-center justify-center mb-20 h-[300px]">
      <div className="w-full h-[429px] bg-gradient-to-b from-amber-100 to-stone-100 flex items-center justify-between px-20 pl-[200px]">
        <img src={quizImg} className="w-[345px] h-[227px]" />
        <div className="text-right pr-[150px]">
          <div className="text-neutral-800 mr-[100px] text-lg font-bold font-Lato mb-4">Coffee Match Quiz</div>
          <div className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center mb-4">
            <div className="text-white text-sm font-semibold font-Lato">SHOP NOW</div>
          </div>
          <div className="text-neutral-800 text-[13px] font-medium font-Lato flex items-center">
            <span>TAKE THE FULL QUIZ</span>
            <FaArrowRight className="w-4 h-5 ml-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeQuiz

