import OffsetsCard01 from "../cards/offsets-card-01";
import "../../styles/offsets-01.css";

function Offsets01() {
    const imagesMap = [
        "/images/solar-panels-01.png",
        "/images/wind-farm-01.png",
        "/images/tree-planting-01.png",
        "/images/hydro-power-01.png",
    ];

    return (
        <div className="offsets-container flex flex-col gap-4">
            <div className="flex flex-row justify-between items-baseline">
                <span className="font-bold text-xl">Offset Incentives</span>
                <button className="offsets-button font-bold text-sm">
                    See More
                </button>
            </div>

            <div className="offsets-cards-container">
                {" "}
                <OffsetsCard01
                    heading=""
                    value="Solar Energy Project"
                    units=""
                    context="€15 / tonne"
                    img={imagesMap[0]}
                    icon=""
                />
                <OffsetsCard01
                    heading=""
                    value="Wind Farm Project"
                    units=""
                    context="€14 / tonne"
                    img={imagesMap[1]}
                    icon=""
                />
                <OffsetsCard01
                    heading=""
                    value="Agricultural Carbon Storage"
                    units=""
                    context="€20 / tonne"
                    img={imagesMap[2]}
                    icon=""
                />
                <OffsetsCard01
                    heading=""
                    value="Renewable Hydro Energy"
                    units=""
                    context="€10 / tonne"
                    img={imagesMap[3]}
                    icon=""
                />
            </div>
        </div>
    );
}

export default Offsets01;
