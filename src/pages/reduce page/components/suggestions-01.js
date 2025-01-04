import SuggestionsCard01 from "./cards/suggestions-card-01";
import { FaPersonWalking } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";
import { IoTrainOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoBicycleOutline } from "react-icons/io5";

import "../styles/suggestions-01.css";

function Suggestions01() {
    
    return (
        <div className="suggestions-container flex flex-col gap-4">
            <div className='flex flex-row justify-between items-baseline'>
                <span className="font-bold text-lg">Personal Suggestions</span>
                <button className="suggestions-button font-bold text-sm">See More</button>
            </div>
            <div className="flex flex-col gap-2">
                <SuggestionsCard01
                    title="Travel by train instead of flying with a plane"
                    description=""
                    value="50"
                    units="kg"
                    context="per 100km"
                    icon={
                        <IoTrainOutline
                            size={26}
                            style={{ color: "var(--primary-color)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Switch out meat and cut emissions by up to 73%"
                    description=""
                    value="3"
                    units="kg"
                    context="a day"
                    icon={
                        <LuVegan
                            size={24}
                            style={{ color: "var(--primary-color)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Plan your meals carefully to avoid wasting food"
                    description=""
                    value="2"
                    units="kg"
                    context="per meal"
                    icon={
                        <IoFastFoodOutline
                            size={24}
                            style={{ color: "var(--primary-color)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Use bike for trips under 5km to boost your fitness"
                    description=""
                    value="1"
                    units="kg"
                    context="per trip"
                    icon={
                        <IoBicycleOutline
                            size={28}
                            style={{ color: "var(--primary-color)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Shop local to cut emissions from transport and storage"
                    description=""
                    value="1"
                    units="kg"
                    context="per meal"
                    icon={
                        <MdOutlineLocalGroceryStore
                            size={24}
                            style={{ color: "var(--primary-color)" }}
                        />
                    }
                />

                {/* <SuggestionsCard01
                    title="Try a Plant-Based Day"
                    description="Reduce emissions by up to 73% compared to meat"
                    value="3kg"
                    units="CO₂"
                    icon={
                        <LuVegan
                            size={30}
                            style={{ color: "var(--normal-gray)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Choose the Train"
                    description="NS is one of Europe's most efficient rail networks"
                    value="50kg"
                    units="CO₂"
                    icon={
                        <IoTrainOutline
                            size={34}
                            style={{ color: "var(--normal-gray)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Reduce Food Waste"
                    description="Plan your meals carefully to avoid wasting food"
                    value="2kg"
                    units="CO₂"
                    icon={
                        <IoFastFoodOutline
                            size={32}
                            style={{ color: "var(--normal-gray)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Cycle Short Trips"
                    description="Use bike for trips under 5km to boost your fitness"
                    value="1kg"
                    units="CO₂"
                    icon={
                        <IoBicycleOutline
                            size={34}
                            style={{ color: "var(--normal-gray)" }}
                        />
                    }
                />

                <SuggestionsCard01
                    title="Buy Local Produce"
                    description="Use bike for trips under 5km to boost your fitness"
                    value="1kg"
                    units="CO₂"
                    icon={
                        <MdOutlineLocalGroceryStore
                            size={30}
                            style={{ color: "var(--normal-gray)" }}
                        />
                    }
                /> */}
            </div>
        </div>
    );
}

export default Suggestions01;
