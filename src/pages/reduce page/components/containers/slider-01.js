import React, { useState } from "react";

import '../../styles/slider-01.css'

function Slider01() {
    const [currentState, setCurrentState] = useState(1); // Set the initial state to the middle state

    const states = ["Suggested", "Active", "Finished"];

    const handleSlide = (index) => {
        setCurrentState(index);
    };

    return (
        <div className="slider-container flex justify-center items-center">
            <div className="slider text-sm flex justify-center items-center">
                {states.map((state, index) => (
                    <div
                        key={index}
                        className={`slider-item ${
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

export default Slider01;
