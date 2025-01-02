import "./header-01.css";
import { IoMdAdd } from "react-icons/io";
import SmallCard02 from "../small/small-card-02";
import BarChart04 from "../../graphs/regular/bar-chart-04";

function Header01({ title, value, units, context, icon, fade, user }) {
    return (
        <div className={`header-container ${fade}`}>
            <div className="flex justify-between items-center ">
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-lg">Analytics</h1>
                        {/* <div className="circle-avatar rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Avatar"
                                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
                            />
                        </div> */}
                    </div>

                    <div className="flex justify-start items-end gap-1">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <span
                            className="flex align-baseline"
                            style={{ fontSize: "0.85em" }}
                        >
                            {units}
                        </span>
                    </div>

                    <span
                        lassName="text-xs"
                        style={{
                            color: "white",
                            fontSize: "0.85em",
                        }}
                    >
                        {context}
                    </span>
                </div>
            </div>

            <BarChart04 />

            <div className="flex justify-between space-x-4 pt-8">
                <SmallCard02
                    fade="fade-in-2"
                    title="Emissions"
                    value="340"
                    units="kg CO₂"
                    context="last entry"
                    graph=""
                    icon=""
                />

                <SmallCard02
                    fade="fade-in-2"
                    title="Offset So Far"
                    value="120"
                    units="kg CO₂"
                    context="last entry"
                    graph=""
                    icon=""
                />

                <SmallCard02
                    fade="fade-in-2"
                    title="To Offset"
                    value="220"
                    units="kg CO₂"
                    context="last entry"
                    graph=""
                    icon=""
                />
            </div>
        </div>
    );
}

export default Header01;
