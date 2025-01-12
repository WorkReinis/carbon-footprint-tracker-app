import "./styles/HomePage.css";
import './styles/home-activities.css';
import './styles/home-avatar.css'

import React, { useState } from "react";

import { LuTreeDeciduous } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";

import HomeCarousel01 from './components/containers/home-carousel-01'

function HomePage({ avatarNumber }) {
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
        <>
            <div className="home-page">
                <div className="greeting-container fade-in-1">
                    <div>
                        <div className="greeting-text-box">
                            <h2 className="font-bold text-3xl">Hello user</h2>
                            <h3 className="text-lg leading-tight">
                                Your emissions are looking{" "}
                                <b>{avatarText[avatarNumber - 1]}</b> this
                                month.
                            </h3>
                        </div>
                        {/* <div className="greeting-text-box-triangle"></div> */}
                    </div>

                    <div className="flex justify-center items-center avatar-img-container">
                        <img
                            className="avatar-img"
                            alt="avatar"
                            src={avatarMap[avatarNumber - 1]}
                        />
                    </div>

                    <div className="flex justify-center items-center w-100">
                        <div className="flex justify-center items-center flex-col footprint-value">
                            <span className="text-lg">CO2e</span>
                            <h4 className="font-bold text-6xl">120kg</h4>
                            <span className="text-lg">So far this month</span>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between w-full badge-container">
                        <div className="flex flex-col badge">
                            <div className="flex items-center gap-2">
                                <CiCloudOn
                                    style={{
                                        strokeWidth: 1,
                                        stroke: "currentColor",
                                    }}
                                />
                                <h3 className="text-xs font-bold">
                                    Your emissions
                                </h3>
                            </div>
                            <div>
                                <span className="text-2xl font-bold pt-1 pb-0 inline-block">
                                    ↓ 20%
                                </span>
                            </div>
                            <span className="text-xs">Than average Dutch</span>
                        </div>

                        <div className="flex flex-col badge">
                            <div className="flex items-center gap-2">
                                <LuTreeDeciduous
                                    style={{
                                        strokeWidth: 2,
                                        stroke: "currentColor",
                                    }}
                                />
                                <h3 className="text-xs font-bold">
                                    Trees needed
                                </h3>
                            </div>
                            <div>
                                <span className="text-2xl font-bold pt-1 pb-0 inline-block">
                                    700
                                </span>
                            </div>
                            <span className="text-xs">To offset footprint</span>
                        </div>
                    </div>


                                <HomeCarousel01 />

                </div>

                <div className="activities-container fade-in-2">
                    <h2 className="font-bold mb-4">Latest Activities</h2>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4 items-start">
                            <div className="image-placeholder">
                                <img />
                            </div>

                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-col ">
                                    <span className="font-bold">
                                        Chicken Salad
                                    </span>
                                    <span>For lunch</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold">+300g</span>
                                    <span>CO2</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start">
                            <div className="image-placeholder">
                                <img />
                            </div>

                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-col ">
                                    <span className="font-bold">Car ride</span>
                                    <span>Weekend road trip</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold">+900g</span>
                                    <span>CO2</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start">
                            <div className="image-placeholder">
                                <img />
                            </div>

                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-col ">
                                    <span className="font-bold">
                                        Flight to UK
                                    </span>
                                    <span>Business trip</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold">+1000kg</span>
                                    <span>CO2</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start">
                            <div className="image-placeholder">
                                <img />
                            </div>

                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-col ">
                                    <span className="font-bold">
                                        Steak dinner
                                    </span>
                                    <span>Friday eating out</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold">+2kg</span>
                                    <span>CO2</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start">
                            <div className="image-placeholder">
                                <img />
                            </div>

                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-col ">
                                    <span className="font-bold">
                                        Happy Meal
                                    </span>
                                    <span>McDonald's</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-bold">+5kg</span>
                                    <span>CO2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
