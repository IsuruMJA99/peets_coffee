// import React from 'react';
// import DeleveryImg from './images/Rectangle 21.png';
// import { HiOutlineRefresh } from "react-icons/hi";

// function HomeDelivery() {
//   return (
//     <>
//     <div className=" relative w-[1280px] h-[7px] left-0 top-[3291px]">
//     <div className="absolute left-[268px] top-0 text-neutral-800 text-3xl font-semibold font-Lato">
//       ENJOY FREE HOME DELIVERY, SUBSCRIBE AND SAVE
//     </div>
//     <div className="absolute w-[139px] h-[19px] left-[350px] top-[68px]">
//       <div className="absolute left-[35px] top-[2px] text-neutral-800 text-[13px] font-medium font-Lato">
//         NEVER RUN OUT
//       </div>
//     </div>
    
//     <div className="absolute w-[143px]  left-[569px] top-[67px]">
//       <div className="absolute left-[35px] top-[2px] text-neutral-800 text-[13px] font-medium font-Lato">
//         SAVE EVERY TIME
//       </div>
//     </div>
    
//     <div className="absolute w-[151px]  left-[792px] top-[66px]">
//       <div className="absolute left-[35px] top-[2px] text-neutral-800 text-[13px] font-medium font-Lato">
//         PAUSE OR CANCEL
//       </div>
//     </div>
    
//   </div>
    
//     <div className="my-10 md:px-14 m-auto max-w-full-2xl mx-auto">
//       <div className="flex justify-center">
//         <div className="flex flex-col lg:flex-row">
//           <div className="w-full lg:w-1/2">
//             <div className="shadow-lg bg-slate-600 flex justify-center items-center h-[520px] w-[400px]">
//               {/* Content for the left side */}
              
//               <img src={DeleveryImg} className="h-[520px] w-[400px]"  />
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2">
//             <div className="shadow-lg bg-slate-200 flex justify-center items-center h-[520px] w-[400px]">
//               {/* Content for the right side */}
//               <p className="text-black text-center">Right Side Content</p>
//               <div className="text-neutral-800 text-2xl font-semibold font-['Lato'] h-[0px] w-[478px]">15% OFF FOR NEW SUBSCRIBERS</div>
//               <div className="w-[533px] text-neutral-800 text-lg font-medium font-['Lato']">A Peet's subscription gives you free shipping and access to discounts on all of your coffee purchases. Plus, new subscribers get 15% off their first order using code NEWSUB15. Copy Code</div>
//               <div className="text-neutral-500 text-xl font-medium font-['Lato']">Frequent Brewer</div>
//               <div className="text-neutral-500 text-xl font-medium font-['Lato']">Single Origin Series</div>
//               <div className="text-neutral-800 text-xl font-medium font-['Lato']">Small Batch Series</div>
//               <div className="w-[414px] text-neutral-800 text-base font-medium font-['Lato']">Be on the cutting edge of coffee. Rare and unique finds, selectively sourced in small batches from around the world</div>
//               <div className="text-neutral-800 text-[13px] font-medium font-['Lato']">GET STARTED</div>
//               <div className="text-neutral-500 text-xl font-medium font-['Lato']">Signature Blend Series</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default HomeDelivery;


import React from 'react';
import DeleveryImg from './images/Rectangle 21.png';
import { HiOutlineRefresh } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

function HomeDelivery() {
  return (
    <div className='my-10 '>
      {/* First Section */}
      <div className="relative w-[1280px] h-[7px] left-20 top-[30px]">
        <div className="absolute left-[290px] top-0 text-neutral-800 text-3xl font-semibold font-Lato">
          ENJOY FREE HOME DELIVERY, SUBSCRIBE AND SAVE
        </div>
        <div className="absolute w-[139px] h-[19px] left-[350px] top-[68px]">
          <div className="absolute left-[35px] top-[2px] text-neutral-800 text-[13px] font-medium font-Lato">
            NEVER RUN OUT
          </div>
        </div>

        <div className="absolute w-[143px]  left-[569px] top-[67px]">
          <div className="absolute left-[35px] top-[2px] text-neutral-800 text-[13px] font-medium font-Lato">
            SAVE EVERY TIME
          </div>
        </div>

        <div className="absolute w-[151px]  left-[792px] top-[66px]">
          <div className="absolute left-[35px] top-[2px] text-neutral-800 text-[13px] font-medium font-Lato">
            PAUSE OR CANCEL
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="my-20 md:px-14 mt-[150px] max-w-full-2xl mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className=" bg-slate-100 flex justify-center items-center h-[520px] w-[600px]">
               
                <img src={DeleveryImg} className="h-[520px] w-[450px]" alt="Delivery Image" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className=" bg-slate-100 flex flex-col  h-[520px] w-[600px]">
                
                
                <div className="text-neutral-800 mt-[15px] text-2xl font-semibold font-Lato h-[50px] w-[478px]">15% OFF FOR NEW SUBSCRIBERS</div>
                <div className="w-[533px] text-neutral-800 mb-[30px] text-lg font-medium font-Lato">A Peet's subscription gives you free shipping and access to discounts on all of your coffee purchases. Plus, new subscribers get 15% off their first order using code NEWSUB15. Copy Code</div>

            <button className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center mb-4 border-none focus:outline-none hover:bg-yellow-800">
             <div className="text-white text-sm font-semibold font-Lato ">CHOOSE A SUBSCRIPTION</div>
         </button>
                <div className="text-neutral-500 mt-[10px] mb-[10px] text-xl font-medium font-Lato">Frequent Brewer</div>
                <div className="text-neutral-500 mb-[15px] text-xl font-medium font-Lato">Single Origin Series</div>
                <div className="text-neutral-800 mb-[10px] text-xl font-medium font-Lato">Small Batch Series</div>
                <div className="w-[414px] text-neutral-800 mb-[10px] text-base font-medium font-Lato">Be on the cutting edge of coffee. Rare and unique finds, selectively sourced in small batches from around the world</div>
                <div className="text-neutral-800 mb-[10px] text-[13px] font-medium font-Lato">GET STARTED<FaArrowRight className="w-4 h-5  pb-[5px] relative flex-col justify-start items-start inline-flex" /></div>
                <div className="text-neutral-500 text-xl font-medium font-Lato">Signature Blend Series</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDelivery;
