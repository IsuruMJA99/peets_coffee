import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { CiLocationOn } from "react-icons/ci";
import ActivImg1 from './images/23SUM-Asset-18-HP-Carousel-Header-Desktop-2164x592 1.png'

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants";

const ActiveSlider = () => {
  return (


    <>
<div className="flex flex-col  mb-10 pt-10">
  <div className="flex justify-center gap-60 w-500 mb-4">
    <div className="text-neutral-800 text-3xl ml-10 font-semibold font-['Lato'] leading-[42px]"> From the Coffeebar<br/>OUR FEATURED MENU</div>
    <div className="w-[580px] text-neutral-800 pt-3 text-lg font-medium font-['Lato']">Bold and cold for summer, three refreshing drinks to beat the heat: Baridi Cold Brew, The Black Tie, and our Cold Brew Oat Latte.</div>
  </div>
</div>

  <div className="flex justify-center">
    <img src={ActivImg1} className="w-[1180px] h-[350px] mb-[30px]  " />
  </div>
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
            <div className="relative flex flex-col gap-3">
              {/* <h1 className="text-xl lg:text-2xl">{item.title} </h1> */}
            </div>
            <p className="absolute bottom-5   h-[35px]lg:text-[18px] mt-20 ">{item.content} </p>
          </div>
          
        </SwiperSlide>
        
      ))}
      
    </Swiper>
    <button className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center border-none focus:outline-none hover:bg-yellow-800">
  <div className="text-white text-sm font-semibold font-['Lato']">VIEW ALL SEASONAL BEVERAGES</div>
</button>

<div className="text-center text-neutral-800 mt-5 text-[15px] font-medium font- Lato">FIND A COFFEEBAR <CiLocationOn  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex " /></div>
<hr className="w-[1225px] border border-neutral-800 border-opacity-30 mt-10 mb-10"/>
            

  </div>
</>

  );
};

export default ActiveSlider;