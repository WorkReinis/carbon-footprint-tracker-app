import ChallengesCard01 from "../cards/challenges-card-01";

import Slider01 from "./slider-01";

import "../../styles/challenges-01.css";

function Challenges01() {
    const imgMap = [
        "/images/bike-08.png",
        "/images/breakfast-03.png",
        "/images/eco-challenge-01.png",

    ];
    return (
        <div className="challenges-container flex flex-col gap-4">
            <div className="flex flex-row justify-between items-baseline">
                <span className="font-bold text-xl">Challenges</span>
                {/* <button className="offsets-button font-bold text-sm">
                    See More
                </button> */}
            </div>
            <div>
                <Slider01 />
            </div>
            <div className="challenges-cards-container flex flex-col gap-4">
                {" "}
                <ChallengesCard01
                    barValue={30}
                    heading="Go Car-Free Using Sustainable Transport"
                    duration="One week"
                    progress=" 2 / 7"
                    description=""
                    img={imgMap[0]}
                    icon=""
                />
                <ChallengesCard01
                    barValue={70}
                    heading="Enjoy Plant-Based Meals for Breakfast"
                    duration="2 weeks"
                    progress=" 9 / 14"
                    description=""
                    img={imgMap[1]}
                    icon=""
                />
                <ChallengesCard01
                    barValue={22}
                    heading="Embrace a Sustainable Low Carbon Lifestyle "
                    duration="90 Days"
                    progress=" 23 / 90"
                    description=""
                    img={imgMap[2]}
                    icon=""
                />
            </div>
        </div>
    );
}

export default Challenges01;
