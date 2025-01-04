import { useContext, useEffect } from "react";
import { MyContext } from "../../context/pages";

import "./styles/InputConfirmationPage.css";

import Carousel from "./components/carousel-01";

function InputConfirmationPage({ avatarNumber }) {
    const { page, setPage } = useContext(MyContext);
    const { navBar, setNavBar } = useContext(MyContext);
    const { activeButton, setActiveButton } = useContext(MyContext);

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

    useEffect(() => {
        avatarMap.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    const handleInput = () => {
        setPage("input");
        setNavBar(true);
        setActiveButton("input");
    };

    const handleAnalytics = () => {
        setPage("reduce");
        setNavBar(true);
        setActiveButton("reduce");
    };

    return (
        <div className="confirmation-container flex flex-col justify-between ">
            <div className="upper-container flex justify-between items-center flex-col fade-in-1">
                {/* <div className="flex justify-center items-center">
                    <h1 className="text-lg">Data uploaded!</h1>
                </div> */}

                <div className="input-avatar-container flex justify-center items-center ">
                    <img
                        className="avatar-img"
                        alt="avatar"
                        src={avatarMap[avatarNumber - 1]}
                    />
                </div>

                <div className="flex justify-center items-center">
                    <div className="carbon-result flex flex-row justify-center items-center gap-3">
                        {/* <div className="input-circle-icon flex justify-center items-center">
                            <LuTrees size={22} color={"var(--dark-gray)"} />
                        </div> */}
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-2xl ">CO₂</h1>
                            <div className="flex flex-row justify-center items-end gap-2">
                                <h1 className="text-6xl font-bold">140</h1>
                                <h1 className="text-3xl font-bold">kg</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <h1 className="text-lg ">
                                    Emissions from your actions
                                    {/* Your carbon footprint is{" "} */}
                                    {/* {avatarText[avatarNumber - 1]} */}
                                </h1>
                                <h1 className="text-lg">
                                    That's a{" "}
                                    <span className="font-bold">
                                        {avatarText[avatarNumber - 1]}
                                    </span>{" "}
                                    effort!
                                    {/* Your carbon footprint is{" "} */}
                                    {/* {avatarText[avatarNumber - 1]} */}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/*<div className="input-avatar-text-box">
                        <h3 className="font-bold text-sm">
                            Your actions look {avatarText[avatarNumber - 1]}.
                            This impact can be better understood through
                            relatable everyday examples.
                        </h3>
                         <span className="text-lg">
                            Your chicken salad lunch generated 1.2kg CO₂e,
                            primarily due to the production and transportation
                            of chicken.
                        </span> 
                    </div>*/}

                    {/* <div className="greeting-text-box-triangle"></div> */}
                </div>

                {/* <div className="flex justify-start items-center flex-col confirm-footprint-value">
                <span className="text-xl font-bold">That equates to:</span>
            </div> */}
            </div>
            <div className="lower-container flex flex-col justify-between gap-1 fade-in-2">
                <h2 className="font-bold text-md pb-2">That equates to:</h2>
                <Carousel />
                <div className="lower-container-button-container w-100">
                    <button
                        onClick={handleAnalytics}
                        className="text-md button-primary"
                    >
                        Suggestions
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InputConfirmationPage;
