import React, { useState, useEffect, useContext, useRef, useCallback } from "react";

import { MyContext } from "../../context/pages";
import { IoMicOutline } from "react-icons/io5";
import { FaRegStopCircle } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import { FaStop } from "react-icons/fa";

import "../../styles/animation/pulse-01.css";
import "../../styles/animation/pulse-02.css";
import "./styles/InputPage.css";

import InputPopup from "./InputPopup";

function InputPage({ sendDataToParent }) {
    const { text, setText } = useContext(MyContext);
    const [isListening, setIsListening] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { navBar, setNavBar } = useContext(MyContext);
    const { page, setPage } = useContext(MyContext);
    const recognitionRef = useRef(null);
    const [transcript, setTranscript] = useState("");
    const [liveTranscript, setLiveTranscript] = useState("");

    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn(
                "Speech recognition is NOT supported in this browser."
            );
            return;
        }

        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = "en-US"; // Set language

        recognitionRef.current.onresult = (event) => {
            let finalTranscript = "";
            let interimTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                const alternative = result[0];

                if (alternative && alternative.transcript) {
                    if (result.isFinal) {
                        finalTranscript += alternative.transcript + " ";
                    } else {
                        interimTranscript += alternative.transcript;
                    }
                }
            }

            // Remove console.logs for production
            setLiveTranscript(interimTranscript);
            setTranscript((prev) => prev + finalTranscript);
        };

        recognitionRef.current.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };

        recognitionRef.current.onend = () => {
            console.warn("Speech recognition stopped.");
            if (isListening) {
                recognitionRef.current.start(); // Restart if still listening
            }
        };

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                recognitionRef.current.onresult = null;
                recognitionRef.current.onerror = null;
                recognitionRef.current.onend = null;
            }
        };
    }, [isListening]); // ✅ Added isListening to dependency array

    const startListening = useCallback(() => {
        if (!recognitionRef.current) {
            console.warn("Speech recognition is not initialized.");
            return;
        }
        recognitionRef.current.start();
        setIsListening(true);
        setIsRecording(true); // RP addition
    }, []); // ✅ Memoized callback

    const stopListening = useCallback(() => {
        if (!recognitionRef.current) {
            console.warn("Speech recognition is not initialized.");
            return;
        }
        recognitionRef.current.stop();
        setIsListening(false);
        setText(transcript);
        setNavBar(false);
        setIsRecording(false); //RP addiion
        setPage("input-edit");
    }, [transcript, setText, setNavBar, setPage]); // ✅ Memoized callback with dependencies

    return (
        <div className="input-container flex flex-col justify-between align-center fade-in-1">
            <div className="greetings-text flex flex-col justify-center items-center">
                <h3 className="font-bold text-2xl">Hi there!</h3>
                <h3 className="text-lg" >What have you been up to today?</h3>
            </div>

            <div className="button-container flex justify-center items-center">
                {isRecording ? (
                    <button
                        className={`toggle-button speech-stop-record-btn active-scale background-pulse ${
                            isRecording ? "visible" : "hidden"
                        }`}
                        onClick={stopListening}
                    >
                        <FaStop size={90} style={{ color: "white" }} />
                    </button>
                ) : (
                    <button
                        className={`toggle-button speech-record-btn  active-scale ${
                            isRecording ? "hidden" : "visible"
                        }`}
                        onClick={startListening}
                    >
                        <IoMicOutline size={140} style={{ color: "white" }} />
                    </button>
                )}
            </div>

<div className='flex flex-col gap-4'> <div className="loading-response">
                {isListening ? (
                    <>
                        <h3 className="font-bold text-lg" >Listening...</h3>
                        {/* <span>Make sure your device can hear you</span> */}
                    </>
                ) : (
                    <h3 className="font-bold text-lg" >Tap to Record About:</h3>
                )}
            </div>

            <div className="input-page-tags-container flex flex-wrap gap-0.5 justify-center">
                <span className="input-page-tag text-sm whitespace-nowrap">Food Preferences</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Grocery Shopping</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Cooking Habits</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Eating Out</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Snack Choices</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Splurging</span>
      
                <span className="input-page-tag text-sm whitespace-nowrap">Public Transit</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Bike Commute</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Road Trips</span>
                <span className="input-page-tag text-sm whitespace-nowrap">Flights</span>

                <span className="input-page-tag text-sm whitespace-nowrap">Daily Commute</span>
            </div></div>
           

            {/* {isPopupVisible && <InputPopup sendCloseButton={closePopup} />} */}
        </div>
    );
}

export default InputPage;
