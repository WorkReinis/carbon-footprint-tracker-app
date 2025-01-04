import React, { useState, useEffect, useContext, useRef } from "react";
import { MyContext } from "../../context/pages";

import { IoMicOutline } from "react-icons/io5";

import "../../styles/animation/pulse.css";
import "./styles/InputPage.css";

import InputPopup from "./InputPopup";

function InputPage({ sendDataToParent }) {
    const [isListening, setIsListening] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { navBar, setNavBar } = useContext(MyContext);
    const { page, setPage } = useContext(MyContext);
    const buttonRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // const handleMouseDown = () => {
    //     setIsAnimating(true); // Start the animation
    // };

    // const handleAnimationEnd = () => {
    //     setIsAnimating(false); // Optionally reset animation state
    //     setNavBar(false);
    //     setPage("input-edit");
    // };

    // const handleButtonClick = () => {
    //     const button = buttonRef.current;

    //     // Restart animation
    //     button.classList.remove("pulsing");
    //     void button.offsetWidth; // Trigger reflow to reset animation
    //     button.classList.add("pulsing");

    //     setIsListening(true);

    //     // Simulate end of listening (replace with real logic as needed)
    //     setTimeout(() => {
    //         button.classList.remove("pulsing");
    //         setIsListening(false);
    //         setNavBar(false);
    //         setPage("input-edit");
    //     }, 3000); // Matches animation duration
    // };

    // useEffect(() => {
    //     const button = document.querySelector(".speech-input-btn");

    //     // Function to add the 'pulsing' class on mouse click
    //     const handleMouseDown = () => {
    //         button.classList.add("pulsing");
    //         setIsListening(true);
    //     };

    //     const handleMouseUp = () => {
    //         // Keep the pulsing animation going
    //         setTimeout(() => button.classList.remove("pulsing"), 3000); // Optional delay for persistent effect
    //     };

    //     // Function to remove the 'pulsing' class when animation ends
    //     const handleAnimationEnd = () => {
    //         setIsListening(false);
    //         // setIsPopupVisible(true);
    //         setNavBar(false);
    //         setPage("input-edit");
    //     };

    //     // Add event listeners
    //     button.addEventListener("mousedown", handleMouseDown);
    //     button.addEventListener("mouseup", handleMouseUp);
    //     button.addEventListener("animationend", handleAnimationEnd);

    //     // Cleanup function to remove event listeners when component unmounts
    //     return () => {
    //         button.removeEventListener("mousedown", handleMouseDown);
    //         button.removeEventListener("mouseup", handleMouseUp);
    //         button.removeEventListener("animationend", handleAnimationEnd);
    //     };
    // }, []); // Empty dependency array ensures it runs only on mount and unmount

    // const closePopup = (boolean) => {
    //     setIsPopupVisible(boolean);
    // };

    const handleClick = () => {
           setNavBar(false);
            setPage("input-edit");
    } 


    return (
        <div className="input-container flex flex-col justify-center align - center gap-10 fade-in-1">
            <div className="greetings-text flex justify-center align-center">
                <h3 className="font-bold text-lg">
                    Please tell me what did you do today
                </h3>
            </div>

            <div className="button-container flex justify-center align-center">
            <button
                    className={`speech-input-btn `}   //{isAnimating ? "pulsing" : ""}
                    // onMouseDown={handleMouseDown}
                    // onAnimationEnd={handleAnimationEnd}
                    onClick={handleClick}
                >
                    <IoMicOutline className="mic-icon" />
                </button>
            </div>

             <div className="loading-response">
                {isListening ? (
                    <>
                        <h3 class="font-bold">Listening</h3>
                        <span>Make sure your device can hear you</span>
                    </>
                ) : (
                    <h3 class="font-bold">Tap to Record</h3>
                )}
            </div> 

             {/* {isPopupVisible && <InputPopup sendCloseButton={closePopup} />}  */}
        </div>
    );
}

export default InputPage;
