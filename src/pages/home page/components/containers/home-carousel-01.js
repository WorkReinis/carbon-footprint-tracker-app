import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/home-carousel-01.css";

import HomeCarouselCard01 from "../cards/home-carousel-card-01.js";

import { HiOutlineArrowDown } from "react-icons/hi2";
import { FaTree, FaVideo, FaMobileAlt, FaTshirt, FaRecycle } from "react-icons/fa";

const HomeCarousel01 = () => {
const slides = [
  {
    category: "",
    title: "20%",
    context: "Than average Dutch emissions footprint",
    icon: <HiOutlineArrowDown size={12} />,
    img: "/images/carbon-01.png",
  },
  {
    category: "",
    title: "1.5",
    context: "Trees needed to offset footprint impact",
    icon: <FaTree size={10} />,
  },
  {
    category: "",
    title: "80 hrs",
    context: "Hours of Netflix streaming energy used",
    icon: <FaVideo size={12} />,
  },
  {
    category: "",
    title: "14,000",
    context: "Phone charges worth the same energy",
    icon: <FaMobileAlt size={12} />,
  },
  {
    category: "",
    title: "25",
    context: "Laundry cycles washed at 60°C",
    icon: <FaTshirt size={11} />,
  },
  {
    category: "",
    title: "150",
    context: "Plastic bottles’ full production impact",
    icon: <FaRecycle size={11} />,
  },
];



    return (
        <Swiper
            className="home-swiper-container"
            spaceBetween={10}
            slidesPerView={2}
            navigation={false}
            loop={false}
            modules={[Navigation, Pagination]}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <HomeCarouselCard01
                        category={slide.category}
                        title={slide.title}
                        units=""
                        context={slide.context}
                        img={slide.img}
                        icon={slide.icon}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeCarousel01;
