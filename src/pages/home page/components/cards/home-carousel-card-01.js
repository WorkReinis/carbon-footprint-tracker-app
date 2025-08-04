import "../../styles/home-carousel-card-01.css";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function HomeCarouselCard01({ icon, category, title, context, img }) {
    return (
        <div className="home-carousel-card-container-01 flex flex-col justify-center items-center">
            <span className="text-3xl leading-tight font-bold ">{title}</span>
            <span className="text-xs  leading-tight text-center">{context}</span>
        </div>
    );
}

export default HomeCarouselCard01;
