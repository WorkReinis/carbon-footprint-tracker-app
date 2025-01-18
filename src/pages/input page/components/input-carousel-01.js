import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/input-carousel-01.css";
import HomeCarouselCard01 from "./cards/input-carousel-card-01.js";

import { FaRegHeart } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
import { LuTreeDeciduous } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";
import { PiTrainLight } from "react-icons/pi";
import { FaTrain } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";

const InputCarousel01 = () => {
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
                <HomeCarouselCard01
                    category="Trees needed"
                    title="1-2"
                    units=""
                    context="To grow for a year"
                    img="https://cdn.dribbble.com/users/1338391/screenshots/15339530/forest_landscape_wallpaper_background_flat_design_art_4x.jpg"
                    // img="https://images.unsplash.com/photo-1514116799412-5876d319c242"
                    icon={<FaTree size={15} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    category="Hot showers"
                    title="2-3"
                    units=""
                    context="Taken at home"
                    img="https://static.vecteezy.com/system/resources/previews/006/403/160/non_2x/happy-man-taking-shower-in-bathroom-wash-head-and-hair-with-shampoo-soap-flat-cartoon-design-vector.jpg"
                    //img="https://images.unsplash.com/photo-1652662700928-5a4685e87d64"
                    icon={<FaShower size={15} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    category="Train Travel"
                    title="23 km"
                    units=""
                    context="Traveled with NS"
                    img="https://cbx-prod.b-cdn.net/COLOURBOX36658680.jpg?width=800&height=800&quality=70"
                    //img="https://images.unsplash.com/photo-1592768116796-f2c356806033"
                    icon={<FaTrain size={15} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    category="Km driven"
                    title="700"
                    units=""
                    context="With a small car"
                    img="https://thumbs.dreamstime.com/b/woman-going-out-train-walking-platform-background-modern-arriving-station-vector-flat-design-67447700.jpg"
                    //img="https://images.unsplash.com/photo-1518735391375-e4745c43c4b9"
                    icon={<FaCarAlt size={15} />}
                />
            </SwiperSlide>

            

            <SwiperSlide>
                <HomeCarouselCard01
                    category="Steak meals"
                    title="20"
                    units=""
                    context="Had at restaurant"
                    img="https://static.vecteezy.com/system/resources/previews/006/403/160/non_2x/happy-man-taking-shower-in-bathroom-wash-head-and-hair-with-shampoo-soap-flat-cartoon-design-vector.jpg"
                    //img="https://images.unsplash.com/photo-1652662700928-5a4685e87d64"
                    icon={<PiForkKnifeFill size={15} />}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default InputCarousel01;
