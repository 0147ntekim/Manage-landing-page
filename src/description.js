import bgtablet from "./images/bg-tablet-pattern.svg";


const About = () => {
    return ( 
        <main className="w-full min-h-[80vh] px-[20px] sm:px-[50px] md:px-[150px] mt-[80px] md:mt-[50px] relative overflow-hidden">
            <img className=" w-[45%] right-[-20%] md:right-[85%] z-[-1] top-[-35%] md:top-[40%] absolute" src={bgtablet} alt="" />
            <div className="w-full max-[769px]:min min-[720px]:min-h-[50vh] min-h-[70vh] flex flex-col md:flex-row justify-between items-start">
                <div className="w-[100%] md:w-[40%] px-[30px] sm:px-[50px] md:px-[0] min-[720px]:min-h-[25vh] max-[376px]:min-h-[39vh] min-h-[25vh] sm:min-h-[35vh] md:min-h-[30vh] flex flex-col justify-between">
                    <h1 className="max-[769px]:text-[35px] min-[720px]:text-[50px] text-[35px] md:text-[28px] text-center md:text-start font-bold text-[#242D52]">What's different about Manage?</h1>
                    <p className="max-[769px]:text-[16px] min-[720px]:text-[25px] md:text-[16px] max-[376px]:text-[18px] font-normal text-[gray] text-center md:text-start">
                        Manage provides all the functionality your team needs, without the complexity.
                        Our software is tailor-made for modern digital product teams
                    </p>
                </div>

                <div className="w-[100%] md:w-[50%] max-[769px]:h-[100%] min-[720px]:min-h-[35vh] h-[100%] mt-[70px] md:mt-[0] flex flex-col justify-between items-start">
                    <div className="w-full  flex flex-row justify-between items-start max-[769px]:mb-[25px] min-[720px]:mb-[35px] mb-[25px] md:mb-[15px]">
                        <button className="w-[15%] h-[30px] rounded-[25px] bg-[#F25F3A] text-[#ffffff]">01</button>

                        <div className="max-[769px]:min-h-[none] min-[720px]:min-h-[12vh] w-[80%] flex flex-col">
                            <h6 className="max-[769px]:text-[16px] min-[720px]:text-[30px] md:text-[16px] font-bold text-start text-[#242D52]">
                                Track company-wide progress
                            </h6>
                            <p className="max-[769px]:text-[16px] min-[720px]:text-[24px] md:text-[16px] text-[gray] text-start mt-[15px]">
                                see how your day-to-day tasks fit into the wider vision.
                                Go from tracking progress at the milestone level all the 
                                way down to the smallest details.Never lose sight of the
                                bigger picture again.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-start mb-[25px] md:mb-[15px]">
                        <button className="w-[15%] h-[30px] rounded-[25px] bg-[#F25F3A] text-[#ffffff]">02</button>

                        <div className="max-[769px]:min-h-[none] min-[720px]:min-h-[12vh] w-[80%] flex flex-col">
                            <h6 className="max-[769px]:text-[16px] min-[720px]:text-[30px] md:text-[16px] font-bold text-start text-[#242D52]">
                                Advanced built-in reports
                            </h6>
                            <p className="max-[769px]:text-[16px] min-[720px]:text-[24px] md:text-[16px] text-[gray] text-start mt-[15px]">
                                Set internal delivery estimates and track progress toward company goals.
                                Our customisable dahsboard helps you build out the reports you need to keep 
                                key stakeholders informed.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-start mb-[25px] md:mb-[15px]">
                        <button className="w-[15%] h-[30px] rounded-[25px] bg-[#F25F3A] text-[#ffffff]">03</button>

                        <div className="max-[769px]:min-h-[none] min-[720px]:min-h-[12vh] w-[80%] flex flex-col">
                            <h6 className="max-[769px]:text-[16px] min-[720px]:text-[30px] md:text-[16px] font-bold text-start text-[#242D52]">
                                Everything you need in one place
                            </h6>
                            <p className="max-[769px]:text-[16px] min-[720px]:text-[24px] md:text-[16px] text-[gray] text-start mt-[15px]">
                                Stop jumping from one service to another to communicate ,store files, track tasks
                                and share documents.Manage offers an all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </main>
        
     );
}
 
export default About;