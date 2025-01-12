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
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ReduceCarousel02 = () => {
    const imagesMap = [
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
            slidesPerView={1.4}
            navigation={false} // Enable navigation
            loop={false} // Enable infinite loop
            modules={[Navigation, Pagination]} // Use modules as a prop
        >
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imagesMap[0]}
                    category=""
                    title="Carbon Trading in the Global Economy"
                    time="3h 30min"
                    difficulty="27k students"
                    emoticon={<FiSmile size={12} />}
                    rating='4,7'
                    raters='(238)'
                    stars={
                        <>
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStarHalfAlt size={13} style={{ fill: "#AE6B1C" }} />
                        </>
                      }
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imagesMap[1]}
                    category=""
                    title="Tree-Based Solutions for Carbon Storage"
                    time="2h 15min"
                    difficulty="17k students"
                    emoticon={<FiSmile size={12} />}
                    rating='4,5'
                    raters='(195)'
                    stars={
                        <>
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStarHalfAlt size={13} style={{ fill: "#AE6B1C" }} />
                        </>
                      }
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imagesMap[2]}
                    category=""
                    title="The Future of EVs in a Sustainable World"
                    time="1h 15min"
                    difficulty="21k students"
                    emoticon={<FiSmile size={12} />}
                    rating='4,0'
                    raters='(151)'
                    stars={
                        <>
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaRegStar size={13} style={{ fill: "#AE6B1C" }} />
                        </>
                      }
                />
            </SwiperSlide>

            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imagesMap[3]}
                    category=""
                    title="How Carbon Offsetting Works"
                    time="1h 45min"
                    difficulty="5,1k students"
                    emoticon={<FiSmile size={12} />}
                    rating='4,1'
                    raters='(123)'
                    stars={
                        <>
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaRegStar size={13} style={{ fill: "#AE6B1C" }} />
                        </>
                      }
                />
            </SwiperSlide>
            <SwiperSlide>
                <ReduceCarouselCard02
                    icon={<FaRegHeart size={20} />}
                    img={imagesMap[4]}
                    category=""
                    title="The Impact of Meat-Based Diets"
                    time="2h 15min"
                    difficulty="2,7k students"
                    emoticon={<FiSmile size={12} />}
                    rating='3,9'
                    raters='(57)'
                    stars={
                        <>
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStar size={13} style={{ fill: "#AE6B1C" }} />
                          <FaStarHalfAlt size={13} style={{ fill: "#AE6B1C" }} />
                          <FaRegStar size={13} style={{ fill: "#AE6B1C" }} />
                        </>
                      }
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default ReduceCarousel02;
