import React from "react";

export default function Links({displayMenu}){
    return(
        <div className={`extras w-[90%] border-[1px] border-[lightgray] rounded-[5px] px-[20px] py-[40px] md:hidden  h-[40vh] mx-auto absolute top-[135px]  bg-[#ffffff] ${displayMenu ? 'block':'hidden'}`}>
            <ul className='w-full h-full flex flex-col justify-between items-center'>
                <li className='text-[18px] font-bold capitalize font-display text-[#242D52]'>pricing</li>
                <li className='text-[18px] font-bold capitalize font-display text-[#242D52]'>product</li>
                <li className='text-[18px] font-bold capitalize font-display text-[#242D52]'>about us</li>
                <li className='text-[18px] font-bold capitalize font-display text-[#242D52]'>careers</li>
                <li className='text-[18px] font-bold capitalize font-display text-[#242D52]'>community</li>
            </ul>
        </div>
    )
    
}