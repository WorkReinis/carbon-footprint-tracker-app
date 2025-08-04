import React, { useState } from "react";

import '../../styles/leaderboard-slider-01.css'

function LeaderboardSlider01() {
    const [currentState, setCurrentState] = useState(1); // Set the initial state to the middle state

    const states = ["Friends", "Global"];

    const handleSlide = (index) => {
        setCurrentState(index);
    };

    return (
        <div className="leaderboard-slider-container flex justify-center items-center">
            <div className="leaderboard-slider text-sm flex justify-center items-center ">
                {states.map((state, index) => (
                    <div
                        key={index}
                        className={`leaderboard-slider-item ${
                            currentState === index ? "active" : ""
                        }`}
                        onClick={() => handleSlide(index)}
                    >
                        {state}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeaderboardSlider01;
