const Testimonial = ({ testimonial, index }) => {
    return (
      <div className={`w-full max-[769px]:min-h-[30vh] min-[720px]:min-h-[18vh] md:min-h-[30vh] flex flex-col max-[769px]:justify-none min-[720px]:justify-around items-center p-6 space-y-6 rounded-lg ${index !== 0 ? "mt-[60px]" : ""} bg-[#FBFBFB] md:mt-[50px] md:w-full`}>
        <img src={testimonial.image} className="w-16 -mt-14" alt={`${testimonial.name} avatar`} />
        <h5 className="max-[769px]:text-lg min-[720px]:text-[35px] md:text-lg font-bold">{testimonial.name}</h5>
        <p className="max-[769px]:text-sm min-[720px]:text-[22px]  md:text-sm text-[darkGray]">"{testimonial.text}"</p>
      </div>
    );
};
  
export default Testimonial;