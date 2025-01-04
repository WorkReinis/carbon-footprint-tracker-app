import Slider01 from './slider-01'
import ChallengesCard01 from './cards/challenges-card-01'

import '../styles/challenges-01.css'

function Challenges01() {
    return (
        <div className="challenges-container">
            <h1 className="font-bold text-lg">Challenges</h1>
            <Slider01 />
            <ChallengesCard01 />
        </div>
    );
}

export default Challenges01;
