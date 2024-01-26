import React from "react";
import illustration from "../images/illustration-intro.svg"

const Home = () => {
    return ( 
        <div className="min-w-[100%] max-[720px]:min-h-[50vh] min-h-[70vh]  flex flex-col-reverse md:flex-row justify-between mt-[70px]">
            <div className="w-[100%] md:w-[35%] max-[379px]:min-h-[65vh] max-[769px]:min-h-[50vh] min-[720px]:min-h-[20vh]  min-h-[40vh] md:min-h-[60vh] flex flex-col items-center md:items-start justify-between mt-[50px]">
                <h1 className="text-[38px] font-semibold text-center md:text-start font-display text-[#242D52]">
                    Bring everyone together to build better products.
                </h1>

                <p className="text-[16px] max-[720px]:text-[24px] text-center md:text-start text-[gray]"> 
                    Manage makes it simple for software
                    teams to plan day-to-day tasks while
                    keeping the larger team goals in view
                </p>

                <button className='w-[40%] h-[40px] rounded-full items-center bg-[#F25F3A] font-display text-[13px] border-2 border-[#e24e29] capitalize text-[#ffffff]'>
                    get started
                </button>
            </div>

            <div className="w-[100%] md:w-[47%] flex content-end ">
                <img src={illustration} alt="home bg" />
            </div>
        </div>
     );
}
 
export default Home;