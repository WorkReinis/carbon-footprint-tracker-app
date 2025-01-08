import React, { useState, useEffect, useContext, useRef } from "react";
import { MyContext } from "../../context/pages";
import { IoMicOutline } from "react-icons/io5";
import "../../styles/animation/pulse.css";
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

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech recognition is NOT supported in this browser.");
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

      console.log("Interim:", interimTranscript);
      console.log("Final:", finalTranscript);

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
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) {
      console.warn("Speech recognition is not initialized.");
      return;
    }
    recognitionRef.current.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (!recognitionRef.current) {
      console.warn("Speech recognition is not initialized.");
      return;
    }
    recognitionRef.current.stop();
    setIsListening(false);
    setText(transcript);
    setNavBar(false);
    setPage("input-edit");
  };


  return (
    <div className="input-container flex flex-col justify-center align-center gap-10 fade-in-1">
      <div className="greetings-text flex justify-center items-center">
        <h3 className="font-bold text-lg">Please tell me what you did today</h3>
      </div>

      <div className="button-container flex justify-center items-center">
        <button className="speech-input-btn" onClick={startListening}>
          <IoMicOutline className="mic-icon" />
        </button>
      </div>

      <div className="loading-response">
        {isListening ? (
          <>
            <h3 className="font-bold">Listening...</h3>
            <span>Make sure your device can hear you</span>
          </>
        ) : (
          <h3 className="font-bold">Tap to Record</h3>
        )}
      </div>

      <button
        className="bg-red-500 m-3 rounded-full px-4 py-2 font-bold text-white"
        onClick={stopListening}
      >
        Stop recording
      </button>


      {/* {isPopupVisible && <InputPopup sendCloseButton={closePopup} />} */}
    </div>
  );
}

export default InputPage;
