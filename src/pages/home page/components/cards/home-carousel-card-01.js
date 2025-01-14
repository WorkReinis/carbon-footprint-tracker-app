import "../../styles/home-carousel-card-01.css";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function HomeCarouselCard01({
    icon,
    img,
    category,
    title,
    time,
    difficulty,
    emoticon,
    context,
}) {
    return (
        <div className="home-carousel-card-container-01 flex flex-col justify-between hover-scale ">
            {/* <div className="home-visuals-container-01">
                <img
                    className="home-carousel-card-img-01"
                    src={img}
                    fetchPriority="high"
                ></img>
            </div> */}

            <div className="home-carousel-card-text-01 flex flex-col justify-center align-center">
                <div className="flex flex-col justify-center ">
                    <div className="flex flex-row gap-1 justify-start items-center">
                        <div>{icon}</div>
                        <span className="text-xs font-bold">{category}</span>
                    </div>
                    <span className="text-3xl leading-tight font-bold ">
                        {title}
                    </span>
                    <span className=" text-xs">{context}</span>
                </div>
            </div>
        </div>
    );
}

export default HomeCarouselCard01;
