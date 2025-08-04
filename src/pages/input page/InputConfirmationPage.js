import { useContext, useEffect } from "react";
import { MyContext } from "../../context/pages";

import "./styles/InputConfirmationPage.css";

import Carousel from "./components/carousel-01";
import InputCarousel01 from "./components/input-carousel-01";

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
        "That's an amazing effort!",
        "That's a great effort!",
        "That's a worrying effort!",
        "That's a poor effort!",
        "That's a terrible effort",
        "That's a horrible effort!",
    ];

    const avatarValue = ["0.67", "4.7", "23", "56", "115", "1.347"];

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
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Data uploaded!</h1>
                </div>

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
                        <div className="flex flex-col justify-center items-center gap-6 pb-4">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-lg ">Your Emissions</h1>
                                <div className="flex flex-row justify-center items-end gap">
                                    <h1 className="text-7xl font-bold">
                                        {avatarValue[avatarNumber - 1]}
                                    </h1>
                                    <h1 className="text-3xl font-bold"></h1>
                                </div>
                                <h1 className="text-xl ">kg CO<sub>2</sub>e</h1>
                            </div>
                            <h1 className="text-2xl ">{avatarText[avatarNumber - 1]}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-container flex flex-col justify-between fade-in-2 gap-6">
                <div className="flex flex-col gap-2">
                    <h2
                        className="font-bold text-md "
                        style={{ color: "var(--dark-gray)" }}
                    >
                        That equates to:
                    </h2>

                    <InputCarousel01 />
                </div>
                <div className="lower-container-button-container w-100">
                    <button
                        onClick={handleAnalytics}
                        className="text-md button-primary ripple-btn "
                    >
                        Reduce
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InputConfirmationPage;
