import "../../styles/challenges-card-01.css";
import ReduceBarChart01 from "../graphs/reduce-bar-chart-01";

function ChallengesCard01({
    barValue,
    img,
    heading,
    value,
    units,
    description,
    icon,
    progress,
    duration,
}) {
    const containerStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "auto 80%",
        backgroundPosition: "right -2em top 1em",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div
            className="challenges-card-container flex flex-col gap-4 items-start justify-start "
            style={containerStyle}
        >
            <div className="w-[65%] flex flex-col gap-1 pt-1">
                <div className="flex flex-row justify-between ">
                    <div className="challenges-card-text flex flex-col ">
                    <div className="">
                            <span className="text-xs">{duration}</span>
                        </div>
                        <h1 className="font-bold text-md leading-tight pt-2">
                            {heading}
                        </h1>
                        <span className="text-sm">{description}</span>
                    </div>

                    {/* <div className="challenges-image-placeholder">
                    <img src={img} />
                </div> */}
                </div>

                <div className="flex flex-col w-full ">
                    {" "}
                    <ReduceBarChart01 value={barValue} />
                    <div className="flex justify-between">
                        <span
                            className="text-xs"
                            style={{ color: "var(--darkish-gray)" }}
                        >
                            Progress
                        </span>
                        <span
                            className="text-xs"
                            style={{ color: "var(--darkish-gray)" }}
                        >
                            {progress}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengesCard01;
