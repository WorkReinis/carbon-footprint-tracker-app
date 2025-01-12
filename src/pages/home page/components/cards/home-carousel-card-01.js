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
}) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="home-carousel-card-container-01 flex flex-col justify-between hover-scale ">
            <div className="home-visuals-container-01">
                <button className="home-carousel-card-heart-01 flex justify-center items-center absolute top-3 left-3"></button>
                <img
                    className="home-carousel-card-img-01"
                    src={img}
                    fetchPriority="high"
                ></img>
            </div>

            <div className="home-carousel-card-text-01 flex flex-col justify-center align-center">
                <div className="flex flex-col justify-center pb-2 pt-2">
                    <span className="text-sm">{category}</span>

                    <span className="text-xl leading-tight font-bold">
                        {title}
                    </span>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-between items-center gap-1">
                        <IoMdTime size={12} />
                        <div className=" text-xs">{time}</div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-1">
                        <div>{emoticon}</div>
                        <div className=" text-xs">{difficulty}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCarouselCard01;
