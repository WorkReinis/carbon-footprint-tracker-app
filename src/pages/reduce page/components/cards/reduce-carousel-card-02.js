import "../../styles/reduce-carousel-card-02.css";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";


function ReduceCarouselCard02({
    icon,
    img,
    category,
    title,
    time,
    difficulty,
    emoticon,
    rating,
    raters,
    stars
}) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="reduce-carousel-card-container-02 flex flex-col justify-between">
            <div className="reduce-visuals-container-02">
                <button className="reduce-carousel-card-heart-02 flex justify-center items-center">
                    <FaPlayCircle size={70} />
                </button>
                <img
                    className="reduce-carousel-card-img-02"
                    src={img}
                    fetchPriority="high"
                ></img>
            </div>

            <div className="reduce-carousel-card-text-02 flex flex-col justify-center align-center gap-1">
                <div className="flex flex-col justify-center pb-0.5">
                    <span className=" text-sm">{category}</span>
                    <span className="text-lg leading-tight font-bold">
                        {title}
                    </span>
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <span className='text-sm font-bold' >{rating}</span>
                    <div className='flex flex-row'>
                        {stars}
                    </div>
                    <span className='text-sm' style={{ color: "var(--darkish-gray)" }}>{raters}</span>
                </div>
                <div
                    className="flex flex-row justify-between"
                    style={{ color: "var(--darkish-gray)" }}
                >
                    <div className="flex flex-row justify-between items-center gap-1"  style={{ color: "var(--darkish-gray)" }}>
                        <PiStudentBold size={13} />
                        <div className="reduce-carousel-card-text-category-02 text-sm">
                            {difficulty}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-1">
                        <IoMdTime size={13} />
                        <div className=" text-sm">{time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduceCarouselCard02;
