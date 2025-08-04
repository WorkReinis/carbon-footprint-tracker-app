import BadgesCard01 from "../cards/badges-card-01";
import "../../styles/badges-01.css";
function Badges01() {
    const imageMap = [
        "/images/badge-01.png",
        "/images/badge-02.png",
        "/images/badge-03.png",
    ];
    return (
        <div className="home-badges-container ">
            <div className="flex flex-row justify-between items-baseline pb-4">
                <span className="font-bold text-xl">Achievements</span>
                <button className="home-see-more-button font-bold text-sm">
                    See All (5)
                </button>
            </div>

            <div className="home-badges-card-container flex flex-row space-between align-center gap-1">
                <BadgesCard01
                    img={imageMap[1]}
                    title="12 months net positive"
                    description=""
                    date="12/01/2025"
                />
                <BadgesCard01
                    img={imageMap[0]}
                    title="1,000 trees planted"
                    description=""
                    date="28/12/2024"
                />

                <BadgesCard01
                    img={imageMap[2]}
                    title="Offset 50 Tonnes CO₂"
                    description=""
                    date="15/10/2024"
                />
            </div>
        </div>
    );
}

export default Badges01;
