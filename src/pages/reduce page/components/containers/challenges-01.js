import ChallengesCard01 from "../cards/challenges-card-01";

import Slider01 from "../slider-01";

import "../../styles/challenges-01.css";

function Challenges01() {
    return (
        <div className="challenges-container flex flex-col gap-4">
            <div className="flex flex-row justify-between items-baseline">
                <span className="font-bold text-lg">Challenges</span>
                {/* <button className="offsets-button font-bold text-sm">
                    See More
                </button> */}
            </div>
            <div>
                <Slider01 />
            </div>
            <div className='challenges-cards-container flex flex-col gap-4'>
                {" "}
                <ChallengesCard01 />
                <ChallengesCard01 />
                <ChallengesCard01 />
            </div>
        </div>
    );
}

export default Challenges01;
