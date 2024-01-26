import React from 'react';
import logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

const Navbar = () => {
    return ( 
        <nav className='w-full min-h-[5vh] flex flex-row items-center justify-between'>
            <img src={logo} alt="logo" />
            <ul className='w-[45%] hidden md:flex flex-row items-center justify-between'>
                <li className='text-base font-medium capitalize font-display text-[#242D52]'>pricing</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52]'>product</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52]'>about us</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52]'>careers</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52]'>community</li>
            </ul>
            <button className='w-[15%] h-[40px] rounded-full hidden md:block items-center bg-[#F25F3A] font-display text-[13px] border-2 border-[#e24e29] capitalize text-[#ffffff]'>
                get started
            </button>

            <img className='block md:hidden' src={Hamburger} alt="" />
        </nav>
     );
}
 
export default Navbar;