import SmallCard01 from "../cards/small-card-01";
import HomeCarousel01 from "../containers/home-carousel-01";
import "../../styles/home-header-01.css";

import { FaArrowDownLong } from "react-icons/fa6";
import { FaDownLong } from "react-icons/fa6";
import { GoArrowDown } from "react-icons/go";
import { HiOutlineArrowDown } from "react-icons/hi";
import { ImArrowDown2 } from "react-icons/im";
import { VscTriangleDown } from "react-icons/vsc";
import { LuTreeDeciduous } from "react-icons/lu";
import { PiTreeBold } from "react-icons/pi";

import { AiOutlineGlobal } from "react-icons/ai";
import { RiShare2Line } from "react-icons/ri";

import { CiCloudOn } from "react-icons/ci";

import { FaRegBell } from "react-icons/fa";

function HomeHeader01({ avatarNumber }) {
    const avatarMap = [
        "/images/avatar-a.png",
        "/images/avatar-b.png",
        "/images/avatar-c.png",
        "/images/avatar-d.png",
        "/images/avatar-e.png",
        "/images/avatar-f.png",
    ];

    const avatarText = [
        "amazing",
        "great",
        "worrying",
        "poor",
        "terrible",
        "horrible",
    ];

    return (
        <div className="home-greeting-container fade-in-1">
            <div className="flex flex-row justify-between pl-10 pr-10">
                <div className="flex flex-col justify-between">
                    <h1 className="text-white font-bold text-2xl ">
                        Hello John,
                    </h1>
                    <h2 className="text-white  text-md  leading-tight">
                        Your emissions are currently looking{" "}
                        <b>{avatarText[avatarNumber - 1]}</b>
                    </h2>
                </div>

                <div className="relative hover-scale active-scale flex justify-center items-start">
                    <button>
                        <FaRegBell className="h-7 w-7 text-white" />
                         <span className="absolute top-0 left-0 h-3 w-3 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </div>

            {/* <h1 className="text-white font-bold text-lg pb-1">Home</h1>

            {/* <div className="greeting-text-box">
                
                <h2 className="font-bold text-xl">Hello John</h2>
                <h3 className="text-sm leading-tight">
                    Your emissions are looking{" "}
                    <b>{avatarText[avatarNumber - 1]}</b> this month.
                </h3>
            </div> */}

            <div className="home-avatar-img-container flex justify-center items-center">
                <div className="home-avatar-img-outline flex justify-center items-center">
                    <img
                        className="home-avatar-img"
                        alt="avatar"
                        src={avatarMap[avatarNumber - 1]}
                    />
                </div>
            </div>

            <div className="footprint-value flex justify-center items-center flex-col gap-0.5">
                <span className="text-md">
                    CO<sub>2</sub>e
                </span>
                <h4 className="font-bold text-5xl">120kg</h4>
                <span className="text-md">So far this month</span>
            </div>

            <HomeCarousel01 />
            {/* 
            <div className="flex flex-row justify-between w-full badge-container gap-3">
                <SmallCard01
                    title="20%"
                    value="Than average Dutch"
                    context="Your emissions"
                    icon={<HiOutlineArrowDown />}
                />

                <SmallCard01
                    title="3.4"
                    value="To offset footprint"
                    context="Trees needed"
                    icon={<LuTreeDeciduous />}
                />
            </div> */}
        </div>
    );
}

export default HomeHeader01;
