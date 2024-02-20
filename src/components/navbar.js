import React, { useState } from 'react';
import logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import Links from './menu'

const Navbar = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    function toggleNav(){
        setDisplayMenu(prev => !prev)
        console.log('my menu')
    }

    


    return ( 
        <nav className='w-full min-h-[5vh] flex flex-row items-center justify-between'>
            <img src={logo} alt="logo" />
            <ul className='md:w-[45%] hidden md:flex flex-row items-center justify-between'>
                <li className='text-base font-medium capitalize font-display text-[#242D52] cursor-pointer hover:text-[gray]'>pricing</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52] cursor-pointer hover:text-[gray]'>product</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52] cursor-pointer hover:text-[gray]'>about us</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52] cursor-pointer hover:text-[gray]'>careers</li>
                <li className='text-base font-medium capitalize font-display text-[#242D52] cursor-pointer hover:text-[gray]'>community</li>
            </ul>
            <button className='w-[15%] h-[40px] rounded-full hidden md:block extras items-center bg-[#F25F3A] font-display text-[13px] border-2 border-[#e24e29] capitalize text-[#ffffff]'>
                get started
            </button>
            <button onClick={toggleNav} className='block md:hidden' >
                {displayMenu ? <img className='block md:hidden' src={Close} alt="" /> : <img  className='block md:hidden' src={Hamburger} alt="" />}   
            </button>

            <Links displayMenu={displayMenu}/>
        </nav>
     );
}
 
export default Navbar;