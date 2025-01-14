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
import { LuTreeDeciduous } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";

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
                <HomeCarouselCard01
                    category="Trees needed"
                    title="1-2"
                    units=""
                    context="To offset footprint"
                    img="https://cdn.dribbble.com/users/1338391/screenshots/15339530/forest_landscape_wallpaper_background_flat_design_art_4x.jpg"
                    // img="https://images.unsplash.com/photo-1514116799412-5876d319c242"
                    icon={<LuTreeDeciduous size={15} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    category="Your emissions"
                    title="20%"
                    units=""
                    context="Than average Dutch"
                    img="https://cdn.dribbble.com/users/1338391/screenshots/15339530/forest_landscape_wallpaper_background_flat_design_art_4x.jpg"
                    // img="https://images.unsplash.com/photo-1514116799412-5876d319c242"
                    icon={<CiCloudOn size={20} />}
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    heading=""
                    value="20 steaks"
                    units=""
                    context="enjoyed at a fine restaurant"
                    img="https://cbx-prod.b-cdn.net/COLOURBOX36658680.jpg?width=800&height=800&quality=70"
                    //img="https://images.unsplash.com/photo-1592768116796-f2c356806033"
                    icon=""
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    heading=""
                    value="2.800 km"
                    units=""
                    context="traveled with NS trains"
                    img="https://thumbs.dreamstime.com/b/woman-going-out-train-walking-platform-background-modern-arriving-station-vector-flat-design-67447700.jpg"
                    //img="https://images.unsplash.com/photo-1518735391375-e4745c43c4b9"
                    icon=""
                />
            </SwiperSlide>

            <SwiperSlide>
                <HomeCarouselCard01
                    heading=""
                    value="70 showers"
                    units=""
                    context="taking a hot shower at home"
                    img="https://static.vecteezy.com/system/resources/previews/006/403/160/non_2x/happy-man-taking-shower-in-bathroom-wash-head-and-hair-with-shampoo-soap-flat-cartoon-design-vector.jpg"
                    //img="https://images.unsplash.com/photo-1652662700928-5a4685e87d64"
                    icon=""
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeCarousel01;
