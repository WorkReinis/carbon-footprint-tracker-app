import OffsetsCard01 from "../cards/offsets-card-01";
import "../../styles/offsets-01.css";


function Offsets01() {
    return (
        <div className="offsets-container flex flex-col gap-4">
            <div className='flex flex-row justify-between items-baseline'>
                <span className="font-bold text-xl">Offset Incentives</span>
                <button className="offsets-button font-bold text-sm">See More</button>
            </div>

            <div className="offsets-cards-container">
                {" "}
                <OffsetsCard01
                    heading=""
                    value="Solar Energy Project"
                    units=""
                    context="€15 / tonne"
                    img="https://img.freepik.com/premium-photo/view-solar-farm-harnessing-sunlight-flat-design-front-view-renewable-energy-theme-animation-tetradic-color-scheme_73899-60278.jpg"
                    icon=""
                />
                <OffsetsCard01
                    heading=""
                    value="Wind Farm Project"
                    units=""
                    context="€14 / tonne"
                    img="https://i.pinimg.com/736x/76/7e/5a/767e5aab178cbb99dc204ebb1be3734b.jpg"
                    icon=""
                />
                <OffsetsCard01
                    heading=""
                    value="Agricultural Carbon Storage"
                    units=""
                    context="€20 / tonne"
                    img="https://img.freepik.com/free-vector/hand-drawn-flat-design-tree-planting-illustration_23-2149210258.jpg"
                    icon=""
                />
                <OffsetsCard01
                    heading=""
                    value="Renewable Hydro Energy"
                    units=""
                    context="€10 / tonne"
                    img="https://img.freepik.com/premium-photo/majestic-hydroelectric-power-plant-flowing-river-nestled-lush-green-valley-landscape_38013-60420.jpg?w=360"
                    icon=""
                />
            </div>
        </div>
    );
}

export default Offsets01;
