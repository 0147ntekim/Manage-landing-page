import React from 'react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import avatarAnisha from "./images/avatar-anisha.png";
import avatarAli from "./images/avatar-ali.png";
import avatarRichard from "./images/avatar-richard.png";
import avatarShanai from "./images/avatar-shanai.png"
import Testimonial from "./components/testimonial";

const Testimonials = () => {
  const testimonials = [
      {
        name: "Anisha Li",
        image: avatarAnisha,
        text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      },
      {
        name: "Ali Bravo",
        image: avatarAli,
        text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      },
      {
        name: "Richard Watts",
        image: avatarRichard,
        text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      },
      {
        name: "Shanai Gough",
        image: avatarShanai,
        text: "Their software allows us to track, manage and collaborate on our projects from anywhere.it keeps the whole team in sync without being intrusive."
      }
  ];

    
  const swiper = useSwiper()
  return (
    <section id="testimonials" >
        <div className="w-full  mx-auto mt-[70px] sm:mt-[50px] md:mt-24 text-center ">
          <h2 className="text-4xl font-bold text-center">What they've said</h2>
          <Swiper className="swiper-container w-full max-[769px]:h-[40vh] min-[720px]:h-[25vh] md:h-[40vh] flex flex-col mt-24 md:flex-row "
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay
            loop
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                pagination: { clickable: true, },

              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                pagination: { clickable: true }

              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className='w-[100%]'>
                <Testimonial key={index} testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="w-full mt-[50px] h-[10vh] flex justify-center items-center">
            <button className="w-[30%] sm:w-[25%] md:w-[15%] h-[40px] bg-[#f25f3a] rounded-full baseline hover:bg-brightRedLight">
              <a href="/#" className=" text-white ">
                Get Started
              </a>
            </button>
            
          </div>
        </div>
      </section>
  );
}

export default Testimonials;