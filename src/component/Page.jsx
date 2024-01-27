// import React from 'react';
// import Img01 from "./images/Rectangle 4.png";

// function Page() {
//   return (
//     <> 
//       <div className="w-screen h-[1000px]">
//         <div className='absolute bottom-0 left-0 p-4 justify-center  items-center'>
//         <div className="text-black text-[13px] font-medium font-['Lato'] ">LIMITED RELEASE EARLY ACCESS</div>
//         <div className="text-yellow-700 text-4xl font-semibold font-['Lato']">SUBSCRIBERS GET IT FIRST</div>
//         <div className="w-[858px] text-center text-black text-lg font-medium font-['Lato']">Seasonal Essentials Coffee Subscribers, get ready to brew! Vine & Walnut is roasting now. Pro tip: any subscriber can add on to their next shipment. Not a subscriber? Sign up today.</div>
//         <div className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px]" />
//         </div>
//         <img src={Img01} alt="Image" className="w-screen h-[599] origin-top-left bg-neutral-900 bg-opacity-70" />
        
//       </div>
//     </>
//   );
// }

// export default Page;
import React from 'react';
import Img01 from "./images/Rectangle 4.png";

function Page() {
  return (
    <> 
      <div className="w-full h-[650px] relative">
        <div className=" absolute inset-0 w-full h-[590px] bg-neutral-1000 bg-opacity-70">
        <div className="absolute inset-0 bg-black opacity-40 h-[600px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center ">
            <div className="text-white text-[13px] font-medium font-['Lato']">LIMITED RELEASE EARLY ACCESS</div><br/>
            <div className="text-yellow-700 text-4xl font-semibold font-['Lato']">SUBSCRIBERS GET IT FIRST</div><br/>
            <div className="w-[858px] text-center text-white text-lg font-medium font-['Lato']">Seasonal Essentials Coffee Subscribers, get ready to brew! Vine & Walnut is roasting now. Pro tip: any subscriber can add on to their next shipment. Not a subscriber? Sign up today.</div><br/>
             <button className="w-[260px] h-[50px] bg-yellow-700 rounded-[5px] flex justify-center items-center mb-4 border-none focus:outline-none hover:bg-yellow-800">
             <div className="text-white text-sm font-semibold font-Lato ">SHOP NOW</div>
             </button>
          </div>
        </div>
       

        <img src={Img01} alt="Image" className="w-full h-[600px]  origin-top-left bg-neutral-900 bg-opacity-70 " />
      </div>
    </>
  );
}

export default Page;

