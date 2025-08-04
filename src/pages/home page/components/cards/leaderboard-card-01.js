import "../../styles/leaderboard-card-01.css";
import "../../../../styles/animation/scale-on-interaction.css";

function LeaderboardCard01({
    title,
    description,
    value,
    units,
    context,
    icon,
    img
}) {
    return (
        <div className="leaderboard-card-container flex flex-row gap-3 items-center ">
            <div className="leaderboard-image-placeholder flex justify-center items-center">
                <img src={img} className="leaderboard-image"></img>
            </div>
            
            <div className="leaderboard-card-text flex flex-row justify-between items-center w-full">
                <div className="flex flex-col ">
                    <span className="text-sm ">{title}</span>
                    <span className="text-sm" style={{ color: "var(--darkish-gray)" }}>{description}</span>
                </div>

                <div className="flex flex-col items-end leaderboard-value align-center pr-1 pb-0.5 pt-0.5">
                    <div className="flex flex-row items-end gap-1">
                        <span className=" text-sm">{value}</span>
                        <span className="font-bold text-sm ">{units}</span>
                    </div>
                    <span className=" text-sm whitespace-nowrap" style={{ color: "var(--darkish-gray)" }}>
                        {context}
                    </span>
                </div>
            </div>
        </div>

    );
}

export default LeaderboardCard01;
