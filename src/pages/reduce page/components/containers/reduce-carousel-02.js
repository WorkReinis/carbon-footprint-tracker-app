import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/reduce-carousel-02.css";

import ReduceCarouselCard02 from "../cards/reduce-carousel-card-02";

import { FaRegHeart } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";

const ReduceCarousel02 = () => {
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
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img=""
                    category="Category"
                    title="Title"
                    time="time"
                    difficulty="difficulty"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img=""
                    category="Category"
                    title="Title"
                    time="time"
                    difficulty="difficulty"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img=""
                    category="Category"
                    title="Title"
                    time="time"
                    difficulty="difficulty"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img=""
                    category="Category"
                    title="Title"
                    time="time"
                    difficulty="difficulty"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img=""
                    category="Category"
                    title="Title"
                    time="time"
                    difficulty="difficulty"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default ReduceCarousel02;
