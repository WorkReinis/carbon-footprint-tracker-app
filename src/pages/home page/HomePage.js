import "./styles/home-page.css";

import Badges01 from "./components/containers/badges-01";
import Leaderboard01 from "./components/containers/leaderboard-01";
import HomeHeader01 from "./components/containers/home-header-01";
import LastActivities01 from "./components/containers/last-activities-01";

function HomePage({ avatarNumber }) {
    return (
        <>
            <div className="home-page fade-in-1">
                <HomeHeader01 avatarNumber={avatarNumber} />
                <div className="home-page-content flex flex-col gap-6 fade-in-2">
                    <Badges01 />
                    <Leaderboard01 />
                    <LastActivities01 />
                </div>
            </div>
        </>
    );
}

export default HomePage;
