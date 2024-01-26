import Navbar from "./components/navbar";
import Home from "./components/home";
import bgtablet from "./images/bg-tablet-pattern.svg";

const Header = () => {
    return ( 
        <div className=" w-full max-[720px]:min-h-[75vh] min-h-screen px-[20px] sm:px-[50px] md:px-[150px] pt-[50px] relative overflow-x-hidden ">
            <img className="w-[100%] md:w-[50%] h-[70%] md:h-[100%] z-[-1] absolute bottom-[54%] md:bottom-[15%] left-[30%] md:left-[55%]" src={bgtablet} alt="" />
            <Navbar/>
            <Home/>
        </div>
    );
}
 
export default Header;