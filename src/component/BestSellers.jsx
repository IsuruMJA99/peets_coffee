import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ActivImg1 from './images/23SUM-Asset-18-HP-Carousel-Header-Desktop-2164x592 1.png'

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constant02";

function BestSellers() {
  return (
    <>
        <div className="flex flex-col  mb-10 pt-10">
  <div className="flex justify-center gap-60 w-500 ">
    <div className="text-neutral-800 text-3xl ml-10 mt-4 font-semibold font-['Lato'] leading-[42px]"> BEST SELLERS</div>
    <div className="w-[580px] text-neutral-800 pt-3 text-lg font-medium font-['Lato']">The coffees our customers love best. From dark to light, intense to bright, there's always a new cup worth experiencing.</div>
  </div>
</div>
<hr className="mw-[1080px] h-[0px] border border-neutral-800 border-opacity-30 ml-40 mr-40"/>
  <div className="flex items-center justify-center flex-col pl-20 h-[600px] bg-[#ffffff]">
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="max-w-[90%] lg:max-w-[80%]"
    >
      {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[275px] overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover mb-20 bg-center" alt='no image'
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className=" flex flex-col gap-3 absolute bottom-5   h-[35px] w-full">

            <h1 className="text-xl absolute bottom-[40px]  lg:text-[22px]">{item.title} </h1>
            <p className="absolute bottom-[5px]  w-[250px] h-[35px] lg:text-[15px]  ">{item.content} </p>
            <hr className="w-[225px] absolute bottom-[10px] border border-neutral-800 border-opacity-30  "/>
            </div>
            
          </div>
         
        </SwiperSlide>
        
      ))}
      
    </Swiper>
    <button className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center border-none focus:outline-none hover:bg-yellow-800">
  <div className="text-white text-sm font-semibold font-['Lato']">VIEW ALL BEST SELLERS</div>
</button>


  </div>
    </>
  )
}

export default BestSellers