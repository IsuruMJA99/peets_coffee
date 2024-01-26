import React from 'react';
import Img01 from "./images/Rectangle 7.png";
import Img02 from "./images/Rectangle 8.png";
import Img03 from "./images/Rectangle 9.png";
import Img04 from "./images/Rectangle 10.png";
import Img05 from "./images/Rectangle 11.png";
import Img06 from "./images/Rectangle 12.png";
import { FaArrowRight } from "react-icons/fa";


const Category = () => {
    return (
        <div className="my-10 md:px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="w-full p-[30px] ">
                    <div className='grid md:grid-cols-2 sm:grid-cols-3 grid-cols-1 items-start md:gap-20 gap-10'>
                        <div className=" shadow-lg items-center flex justify-center hover:-translate-y-4 transition-all duration-300  h-[495px] w-[520px] ">
                            <div>
                                <img src={Img01}  alt="Featured" className='h-[290px] w-[520px] mt-0' />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>SUBSCRIBERS GET IT FIRST</h5>
                                <div className="w-[525px] text-center text-black text-lg font-medium font-['Lato']">Experience an elevated Kenya with uplifting brightness, balanced acidity, and signature notes of brambleberry and malty black tea.</div>
                                <div className="text-neutral-800 text-[11px] font-medium font-['Lato'] pt-20 pl-5">SHOP NOW
                                <FaArrowRight  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                            </div>
                            
                        </div>
                        <div className=" shadow-lg items-center flex justify-center hover:-translate-y-4 transition-all duration-300 h-[490px] w-[520px]">
                            <div>
                                <img src={Img02}  alt="Featured" className='h-[290px] w-[520px]'  />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>LIMITED RELEASE COFFEES SUBSCRIPTION</h5>
                                <div className="w-[519px] text-center text-black text-lg font-medium font-['Lato']">Subscribe today and experience Peet’s iconic, seasonal coffees—without marking your calendar. For 15% Off your first shipment, use code NEWSUB15</div>
                                <div className="text-neutral-800 text-[11px] font-medium font-['Lato'] pt-10 pl-5">SHOP NOW
                                <FaArrowRight  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                            </div>
                        </div>
                        <div className="shadow-lg items-center flex justify-center hover:-translate-y-4 transition-all duration-300 h-[490px] w-[520px]">
                            <div>
                                <img src={Img03}  alt="Featured" className='h-[290px] w-[520px]' />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>MEDIUM ROAST SUBSCRIPTION SERIES</h5>
                                <div className="w-[519px] text-center text-black text-lg font-medium font-['Lato']">Talk about easy-drinking, experience one of Peet’s most-loved medium roasts every month. Score 15% Off your first order with code NEWSUB15</div>
                                <div className="text-neutral-800 text-[11px] font-medium font-['Lato'] pt-10 pl-5">SHOP NOW
                                <FaArrowRight  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                            </div>
                        </div>
                        <div className=" shadow-lg items-center flex justify-center hover:-translate-y-4 transition-all duration-300 h-[490px] w-[520px]">
                            <div>
                                <img src={Img04}  alt="Featured" className='h-[290px] w-[520px]' />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>GROUND CONTROL TO MAJOR DICKASON’S</h5>
                                <div className="w-[519px] text-center text-black text-lg font-medium font-['Lato']">Elevate your coffee experience with this bold blend, a bestseller since 1969.</div>
                                <div className="text-neutral-800 text-[11px] font-medium font-['Lato'] pt-10 pl-5">SHOP NOW
                                <FaArrowRight  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                            </div>
                        </div>
                        <div className=" shadow-lg items-center flex justify-center hover:-translate-y-4 transition-all duration-300 h-[490px] w-[520px]">
                            <div>
                                <img src={Img05}  alt="Featured" className='h-[290px] w-[520px]' />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>SHOP COFFEE</h5>
                                <div className="w-[519px] text-center text-black text-lg font-medium font-['Lato']">Hand roasted on demand and delivered fresh to your door.</div>
                                <div className="text-neutral-800 text-[11px] font-medium font-['Lato'] pt-20 pl-5">ALL COFFEE
                                <FaArrowRight  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                            </div>
                        </div>
                        <div className=" shadow-lg items-center flex justify-center hover:-translate-y-4 transition-all duration-300 h-[490px] w-[520px]">
                            <div>
                                <img src={Img06}  alt="Featured" className='h-[290px] w-[520px]' />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>SHOP TEA</h5>
                                <div className="w-[519px] text-center text-black text-lg font-medium font-['Lato']">Savor Mighty Leaf’s tea collection: Different from the start.</div>
                                <div className="text-neutral-800 text-[11px] font-medium font-['Lato'] pt-20 pl-5">ALL TEA
                                <FaArrowRight  className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

;

export default Category;
