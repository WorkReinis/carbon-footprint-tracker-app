import BadgesCard01 from "../cards/badges-card-01";
import "../../styles/leaderboard-01.css";
import LeaderboardSlider01 from "./leaderboard-slider-01";
import LeaderboardCard01 from "../cards/leaderboard-card-01";

import { AiOutlineGlobal } from "react-icons/ai";
import { RiShare2Line } from "react-icons/ri";

function Leaderboard01() {
    const imageMap = [
        "/images/badge-01.png",
        "/images/badge-02.png",
        "/images/badge-03.png",
    ];

    const userMap = [
        "/images/user-04.jpg",
        "/images/user-05.jpg",
        "/images/user-01.png",
        "/images/user-06.jpg",
        "/images/user-07.jpg",
    ];
    return (
        <div className="home-leaderboard-container">
            <div className="flex flex-row justify-between pb-4">
                <span className="font-bold text-xl">Leaderboard</span>
            </div>

            <div className="home-leaderboard-card-container flex flex-col gap-5">
                <div className="flex flex-row justify-between items-center">
                    <LeaderboardSlider01 />
                    <button className="leaderboard-share-button flex justify-center items-center hover-scale active-scale">
                        <RiShare2Line size={28} />
                    </button>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col align-start justify-end gap-1">
                        <div className="leaderboard-circle-avatar rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Avatar"
                                src="/images/user-01.png"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-end">
                            <span className="font-bold text-xl">
                                Rank #2,339
                            </span>
                            <span className="text-sm text-gray-400">
                                120 kg CO<sub>2</sub>e
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-end gap-1">
                        <AiOutlineGlobal size={28} />

                        <div className="flex flex-col items-end justify-end">
                          
                            <span className="font-bold text-xl">Top 10%</span>
                            <span className="text-sm text-gray-400">
                                {" "}
                                Out of 154,237
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col divide-y divide-gray-200">
                    <LeaderboardCard01
                        title="Marcus Chen"
                        description=""
                        value="2,337"
                        units=""
                        context=""
                        img={userMap[0]}
                    />
                    <LeaderboardCard01
                        title="Lena Alvarez"
                        description=""
                        value="2,338"
                        units=""
                        context=""
                        img={userMap[1]}
                    />
                    <LeaderboardCard01
                        title="John Doe"
                        description=""
                        value="2,339"
                        units=""
                        context=""
                        img={userMap[2]}
                    />
                    <LeaderboardCard01
                        title="Jasper Müller"
                        description=""
                        value="2,340"
                        units=""
                        context=""
                        img={userMap[3]}
                    />

                    <LeaderboardCard01
                        title="Axel Roy"
                        description=""
                        value="2,341"
                        units=""
                        context=""
                        img={userMap[4]}
                    />
                    <div className="flex flex-row justify-center items-center"><button className="pt-3 text-gray-400 font-bold hover-scale active-scale">Show more</button></div>
                    
                </div>
            </div>
        </div>
    );
}

export default Leaderboard01;
