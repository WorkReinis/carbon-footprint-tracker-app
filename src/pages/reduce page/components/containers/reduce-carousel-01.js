import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import "../../styles/reduce-carousel-01.css"; 

import ReduceCarouselCard01 from "../cards/reduce-carousel-card-01";

import { FaRegHeart } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";

const ReduceCarousel01 = () => {
    const avatarMap = [
        "/images/salad-01.png",
        "/images/salad-02.png",
        "/images/train-01.png",
        "/images/carbon-offset-01.png",
        "/images/learning-01.png",

    ];

    return (
        <Swiper
            className="swiper-container"
            spaceBetween={10}
            slidesPerView={2}
            navigation={false} // Enable navigation
            loop={false} // Enable infinite loop
            modules={[Navigation, Pagination]} // Use modules as a prop
        >
            <SwiperSlide>
                <ReduceCarouselCard01
                    icon={<FaRegHeart size={20} />}
                    img={avatarMap[1]}
                    category="Food"
                    title="Try Plant Based Diet"
                    time="30min"
                    difficulty="Easy"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard01
                    icon={<FaRegHeart size={20} />}
                    img={avatarMap[2]}
                    category="Transport"
                    title="Take Public Transport"
                    time="1-2h"
                    difficulty="Medium"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard01
                    icon={<FaRegHeart size={20} />}
                    img={avatarMap[3]}
                    category="Carbon Offset"
                    title="Check Offset Incentives"
                    time="10min"
                    difficulty="Easy"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ReduceCarouselCard01
                    icon={<FaRegHeart size={20} />}
                    img={avatarMap[4]}
                    category="Education"
                    title="Take a Climate Class"
                    time="1-2h"
                    difficulty="Medium"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default ReduceCarousel01;
