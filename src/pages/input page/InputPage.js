import "./InputPage.css";
import { IoMicOutline } from "react-icons/io5";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from '../../context/pages';
import InputPopup from "./InputPopup";

function InputPage({ sendDataToParent }) {
     const [isListening, setIsListening] = useState(false);
     const [isPopupVisible, setIsPopupVisible] = useState(false);
     const { navBar, setNavBar } = useContext(MyContext);
     const { page, setPage } = useContext(MyContext);

     useEffect(() => {
          const button = document.querySelector(".speech-input-btn");

          // Function to add the 'pulsing' class on mouse click
          const handleMouseDown = () => {
               button.classList.add("pulsing");
               setIsListening(true);
          };

          // Function to remove the 'pulsing' class when animation ends
          const handleAnimationEnd = () => {
               button.classList.remove("pulsing");
               setIsListening(false);
               // setIsPopupVisible(true);
               setNavBar(false);
               setPage("input-edit");
               
               //sendData();   // Call function for the Input Confirmation Page Display
          };

          // Add event listeners
          button.addEventListener("mousedown", handleMouseDown);
          button.addEventListener("animationend", handleAnimationEnd);

          // Cleanup function to remove event listeners when component unmounts
          return () => {
               button.removeEventListener("mousedown", handleMouseDown);
               button.removeEventListener("animationend", handleAnimationEnd);
          };
     }, []); // Empty dependency array ensures it runs only on mount and unmount

     // Function for the Input Confirmation Page Display
     //  const sendData = () => {
     //      const data = "input-success";
     //      console.log("Sending data to parent:", data);
     //      sendDataToParent(data);
     //  };

     
     const closePopup = (boolean) => {
          setIsPopupVisible(boolean);
     };

     return (
          <div className="input-page fade-in-1">
               <div className="greetings-text">
                    <h3 className="font-bold">
                         Please tell me what did you do today
                    </h3>
               </div>

               <div className="button-container">
                    <button className="speech-input-btn">
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

               {/* {isPopupVisible && <InputPopup sendCloseButton={closePopup} />} */}
          </div>
     );
}

export default InputPage;
