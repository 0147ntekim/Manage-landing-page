import React from "react";
import { Link } from "react-router-dom";

import logos from "../images/logos.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconIg from "../images/icon-instagram.svg";
import iconYouTube from "../images/icon-youtube.svg";
import iconPinterest from "../images/icon-pinterest.svg";

const Footer = () => {
    return ( 
        <div className="w-full max-[769px]:min-h-[80vh] min-[720px]:min-h-[50vh]  min-h-[70vh] md:min-h-[25vh] bg-[#000000] flex flex-col-reverse md:flex-row justify-between content-center max-[769px]:px-[50px] min-[720px]:px-[120px] md:px-[50px] lg:px-[120px] max-[769px]:py-[30px] min-[720px]:py-[50px] py-[30px] md:py-[50px] sm:relative">
            <div className="w-[100%] max-[769px]:h-[20vh] min-[720px]:h-[8vh] md:w-[15%] h-[17vh] md:h-[20vh] flex flex-col-reverse md:flex-col justify-between items-center md:items-start" >
                <img src={logos} alt="fotter logo" />

                <ul className="w-full flex flex-row justify-between items-center">
                    <li className="cursor-pointer"><Link to="https://www.facebook.com"><img className="hover:text-[#f25f3a]" src={iconFacebook} alt="" /></Link></li>
                    <li className="cursor-pointer"><Link to="https://www.twitter.com"><img className="hover:text-[#f25f3a]" src={iconTwitter} alt="" /></Link></li>
                    <li className="cursor-pointer"><Link to="https://www.instagram.com"><img className="hover:text-[#f25f3a]" src={iconIg} alt="" /></Link></li>
                    <li className="cursor-pointer"><Link to="https://www.youtube.com"><img className="hover:text-[#f25f3a]" src={iconYouTube} alt="" /></Link></li>
                    <li className="cursor-pointer"><Link to="https://www.pinterest.com"><img className="hover:text-[#f25f3a]" src={iconPinterest} alt="" /></Link></li>

                </ul>
            </div>
            <div className="w-[100%] md:w-[30%] max-[769px]:h-[20vh] min-[720px]:h-[10vh] md:h-[20vh] flex flex-row justify-between content-center">
                <ul className="flex flex-col  items-start">
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">home</li>
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">pricing</li>
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">products</li>
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">about us</li>
                </ul>
                <ul>
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">careers</li>
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">community</li>
                    <li className="mb-[10px] max-[769px]:text-[16px] min-[720px]:text-[20px] md:text-[14px] text-[gray] hover:text-[#f25f3a] cursor-pointer capitalize">privacy policy</li>
                </ul>
            </div>
            
            <div className="w-[100%] md:w-[30%] max-[769px]:h-[15vh] min-[720px]:h-[10vh] h-[15vh] md:h-[20vh] flex flex-col justify-between items-center">
                <div className=" w-full  flex flex-row justify-between">
                    <input className="search w-[74%] h-[40px] hover:border-none rounded-3xl" type="search" placeholder="updates in your inbox" />
                    <button className="w-[24%] h-[40px] rounded-3xl bg-[#f25f3a] text-[#ffffff] capitalize text-[20px]">go</button>
                </div>
                
                <p className="text-center max-[769px]:text-[14px] min-[720px]:text-[19px] md:text-[14px]  text-[gray] capitalize">copyright 2020. all rights reservered</p>
            </div>
        </div>
    );
}
 
export default Footer;