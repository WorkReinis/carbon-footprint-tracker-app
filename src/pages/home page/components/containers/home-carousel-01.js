import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/home-carousel-01.css";
import HomeCarouselCard01 from "../cards/home-carousel-card-01.js";

import { FaRegHeart } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";

const HomeCarousel01 = () => {
    const imagesMap = [
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
                <HomeCarouselCard01 />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01 />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01 />
            </SwiperSlide>

            
            <SwiperSlide>
                <HomeCarouselCard01 />
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeCarousel01;
