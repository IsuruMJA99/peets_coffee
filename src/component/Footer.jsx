import React from 'react';
import footImg from './images/footer.png';

function Footer() {
  return (
    <>
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
        <img src={footImg} alt="Logo" className="w-13  h-1/3 mb-4 mx-auto" />

           </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
          <div className="text-lg font-medium font-['Lato'] mb-4">HELP CENTER</div>
          <ul >
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin ">CONTACT US</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">HELP CENTER</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">SHIPPING & RETURNS</a></li>
          </ul><br/>
          <div className="text-lg font-medium font-['Lato'] mb-4">COMPANY</div>
          <ul>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">CAREERS</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">OUR PEOPLE</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">NEWSROOM</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">CODE OF ETHICS</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">SUPPLY CHAIN TRANSPARENCY</a></li>
            </ul>
          
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
          <div className="text-lg font-medium font-['Lato'] mb-4">GIFT CARDS </div>
          <ul>
          <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">SHOP GIFT CARDS</a></li>
          </ul><br/>

          <div className="text-lg font-medium font-['Lato'] mb-4">OFFERS </div>
          <ul>
          <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">CURRENT OFFERS</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">GET FREE COFFEE</a></li>
            </ul>
          
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
          <div className="text-lg font-medium font-['Lato'] mb-4">PARTNER WITH PEET’S</div>
          <ul>
          <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">FOODSERVICE PROGRAM</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">BECOME AN AFFILIATE</a></li>
            <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">SUBMIT A SITE</a></li>
            </ul><br/>

          <div className="text-lg font-medium font-['Lato'] mb-4">FIND PEET’S IN GROCERY</div>
          <ul>
          <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">PRODUCT FINDER</a></li>
          </ul><br/>

          <div className="text-lg font-medium font-['Lato'] mb-4">BLOG</div>
          <ul>
          <li className="text-base mb-2"><a className="hover:text-gray-400 font-thin">THE CUPPING ROOM</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className=" bg-neutral-900 text-center text-white text-sm font-medium pt-4 pb-4 font-['Lato']">© 2023. PEET'S COFFEE <br/>| Privacy Policy | Your Privacy Choices | Terms of Service <br/>*Nespresso is a registered trademark of Société des Produits Nestlé S.A., and is not affiliated with Peet’s Coffee Inc. Compatible with most Nespresso Original machines.</div>
       </>
  );
}

export default Footer;
