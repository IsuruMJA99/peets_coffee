import React, { useState } from 'react';
import Img01 from "./images/image 1.png";
import { FaRegUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";


function Navbar() {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Shop", path: "shop" },
        { link: "Coffee", path: "coffee" },
        { link: "Free Shipping", path: "shipping" },
        { link: "About us", path: "about" },
    ];

    return (
        <>
       <div className="w-full h-[30px] bg-yellow-700 flex items-center justify-center">
            <div className="text-white text-[13px] font-normal font-['Lato'] flex items-center">
                <FaArrowLeft className="w-4 h-4 relative" /> 
                Free Shipping on orders $49+ Shop Now
                <FaArrowRight className="w-4 h-4 relative" />
            </div>
        </div>
        <div className="w-full h-20 bg-white shadow" > 
        <nav className='bg-white md:px-14 p-0 max-w-screen-2x1 mx-auto text-primary'>
            
           
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <a href="/">
                    <img src={Img01} className="w-[90px] h-[90px]" alt="Logo" />
                </a>

                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({ link, path }) => (
                        <li key={link}>
                            <a href={`/${path}`} className='block hover:text-gray-300'>{link}</a>
                        </li>
                    ))}
                </ul>

                <div className="md:flex items-center space-x-8 hidden">
                    <div className="text-black text-[13px] lg:flex font-normal font-['Lato'] inline-flex items-center space-x-2">
                        <FaRegUser />
                        <span>Log in</span>
                    </div>
                    <div className="relative inline-block">
                        <FaSearch className="w-4 h-4 absolute left-0 mt-[-7px]" />
                    </div>
                    <div className="relative inline-block">
                        <CiLocationOn className="w-4 h-4 absolute left-0 mt-[-7px]" />
                    </div>
                    <div className="relative inline-block">
                        <IoCartOutline className="w-4 h-4 absolute left-0 mt-[-7px]" />
                    </div>
                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                                
                                { isMenuOpen ? (<HiOutlineXMark className='w-6 h-6 text-primary'/>): (<IoMenu className='w-6 h-6 text-primary'/>) 
                                    }
                            </button>
                        </div>
                </div>
            </div>
        </nav>
        </div>
        </>
    );
}

export default Navbar;
