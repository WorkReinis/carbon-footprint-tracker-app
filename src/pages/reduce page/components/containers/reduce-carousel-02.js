import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/reduce-carousel-01.css";

import ReduceCarouselCard02 from "../cards/reduce-carousel-card-02";

import { FaRegHeart } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";

const ReduceCarousel02 = () => {
    const imageMap = [
        "/images/carbon-trading-02.png",
        "/images/trees-02.png",
        "/images/electric-car-01.png",
        "/images/carbon-offset-02.png",
        "/images/farming-02.png",
    ];

    return (
        <Swiper
            className="swiper-container"
            spaceBetween={10}
            slidesPerView={1.3}
            navigation={false} // Enable navigation
            loop={false} // Enable infinite loop
            modules={[Navigation, Pagination]} // Use modules as a prop
        >
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imageMap[0]}
                    category=""
                    title="Carbon Trading in the Global Economy"
                    time="1h 30min"
                    difficulty="Economy"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imageMap[1]}
                    category=""
                    title="Tree-Based Solutions for Carbon Storage"
                    time="2h 15min"
                    difficulty="Environment"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imageMap[2]}
                    category=""
                    title="The Future of EVs in a Sustainable World"
                    time="1h 15min"
                    difficulty="Transportation"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imageMap[3]}
                    category=""
                    title="Understanding How Carbon Offsetting Works"
                    time="1h 45min"
                    difficulty="Management"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imageMap[4]}
                    category=""
                    title="The Impact of Meat-Based Diets"
                    time="2h 15min"
                    difficulty="Food Systems"
                    emoticon={<FiSmile size={12} />}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default ReduceCarousel02;
