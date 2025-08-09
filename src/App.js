import React, { useState, useContext, useEffect, useRef } from "react";
import { MyProvider, MyContext } from "./context/pages";
// import { Signal, Wifi, Battery } from "lucide-react" 

import "./App.css";
import "./styles/phone-frame.css";
import "./styles/variables/color-variables.css";
import "./styles/variables/box-shadow.css";

import NavBar from "./components/NavBar";
import HomePage from "./pages/home page/HomePage";
import AnalyticsPage from "./pages/analytics page/AnalyticsPage";
import InputPage from "./pages/input page/InputPage";
import InputConfirmationPage from "./pages/input page/InputConfirmationPage";
import InputEditPage from "./pages/input page/InputEditPage";
import ReducePage from "./pages/reduce page/ReducePage";
import SettingsPage from "./pages/settings page/SettingsPage";

import { IoBatteryHalfOutline } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { BiSignal4 } from "react-icons/bi";
import { PiCellSignalHighBold } from "react-icons/pi";


// --- PhoneFrame Component ---
function PhoneFrame({ children }) {
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  return (
    <div className="phone-frame">
      {/* Side Buttons */}
      <div className="side-button volume-up" />
      <div className="side-button volume-down" />
      <div className="side-button silent-switch" />
      <div className="side-button power-button" />

      <div className="phone-bezel">
        {/* Status Bar */}
        <div className="status-bar">
          <div className="status-bar-left">
            <span className="status-bar-time">{currentTime}</span>
          </div>
          <div className="status-bar-right">
            <PiCellSignalHighBold className="status-bar-icon"  size={20} />
            <IoIosWifi className="status-bar-icon" size={19}/>
            <IoBatteryHalfOutline className="status-bar-icon" size={23} />
          </div>
        </div>
        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="camera-lens" />
          <div className="sensor-dot" />
        </div>
        {children}
      </div>
    </div>
  )
}


function App() {
    const { page } = useContext(MyContext);
    const { navBar } = useContext(MyContext);
    const scrollContainerRef = useRef(null);

    // Scrolls to the top of the page when the page changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo(0, 0); // or use { top: 0, behavior: "smooth" }
        }
    }, [page]);

    //Renders the current page
    const renderPage = () => {
        switch (page) {
            case "home":
                const randomNumber = Math.floor(Math.random() * 6) + 1; // For random avatar generation
                return <HomePage avatarNumber={randomNumber} />;
            case "analytics":
                return <AnalyticsPage />;
            case "input":
                return <InputPage />;
            case "reduce":
                return <ReducePage />;
            case "settings":
                return <SettingsPage />;
            case "input-confirm":
                const randomNumber2 = Math.floor(Math.random() * 6) + 1; // For random avatar generation
                return <InputConfirmationPage avatarNumber={randomNumber2} />;
            case "input-edit":
                return <InputEditPage />;
            default:
                return <HomePage />;
        }
    };

    //Renders the NavBar based on the navBar state
    const renderNavBar = () => {
        switch (navBar) {
            case true:
                return <NavBar />;
            case false:
                return null;
            default:
                return <NavBar />;
        }
    };

    return (
        <>
            <div className="app-wrapper">
                <PhoneFrame>
                        <div className="app-content" ref={scrollContainerRef}> {/* Scrollable content is within this div */}
                            <div className="page-div">{renderPage()}</div>
                        </div>
                        {renderNavBar()}
                </PhoneFrame>
            </div>
        </>
    );
}

function AppWrapper() {
    // Wrap the entire app in the PageProvider to make context available
    return (
        <MyProvider>
            <App />
        </MyProvider>
    );
}

export default AppWrapper;
