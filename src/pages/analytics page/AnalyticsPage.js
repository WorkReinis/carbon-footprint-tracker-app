import BarChart01 from "./components/graphs/regular/bar-chart-01";
import BarChart02 from "./components/graphs/regular/bar-chart-02";
import BarChart03 from "./components/graphs/regular/bar-chart-03";
import SmallCard01 from "./components/cards/small/small-card-01";
import RegularCard01 from "./components/cards/regular/regular-card-01";
import AreaChart01 from "./components/graphs/regular/area-chart-01";
import ComposedChart01 from "./components/graphs/regular/composed-chart-01";
import PieChart01 from "./components/graphs/regular/pie-chart-01";
import ComparisonChart01 from "./components/graphs/regular/comparison-chart-01";
import SmallComparisonChart01 from "./components/graphs/small/small-comparison-chart-01";
import RadialBarChart01 from "./components/graphs/regular/radial-bar-chart-01";
import BarChart04 from "./components/graphs/regular/bar-chart-04";
import SmallBarChart01 from "./components/graphs/small/small-bar-chart-01";
import SmallComposedChart01 from "./components/graphs/small/small-composed-chart-01";
import SmallRadialBarChart01 from "./components/graphs/small/small-radial-bar-chart-01";
import SmallAreaChart01 from "./components/graphs/small/small-area-chart-01";
import SmallPieChart01 from "./components/graphs/small/small-pie-chart-01";

import Footer01 from "./components/cards/regular/footer-01";
import Header01 from "./components/cards/regular/header-01";

import "./styles/AnalyticsPage.css";
import "../../styles/animation/fade-in.css";

import { MdCardTravel } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { TbCalendarWeek } from "react-icons/tb";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { LuTrees } from "react-icons/lu";
import { FaArrowTrendDown } from "react-icons/fa6";
import { BsExclamationTriangle } from "react-icons/bs";
import { GiFootprint } from "react-icons/gi";
import { PiRanking } from "react-icons/pi";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { PiCar } from "react-icons/pi";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { LuHeartHandshake } from "react-icons/lu";

function AnalyticsPage() {
    return (
        <>
            <div className="analytics-page fade-in-1">
                <Header01
                    user="Hailey"
                    fade=""
                    title="Your Carbon Footprint"
                    units=""
                    context=""
                />

                <div className="cards-container fade-in-2">
                    <div className="small-cards-container">
                        <SmallCard01
                            title="Diet"
                            value="135"
                            units="kg CO₂"
                            context="this week"
                            graph={<SmallAreaChart01 />}
                            icon={
                                <IoRestaurantOutline
                                    size={24}
                                    style={{ color: "var(--normal-gray)" }}
                                />
                            }
                        />
                        <SmallCard01
                            fade=""
                            title="Travel"
                            value="180"
                            units="kg CO₂"
                            context="this week"
                            graph={<SmallBarChart01 />}
                            icon={
                                <PiCar
                                    size={36}
                                    style={{ color: "var(--normal-gray)" }}
                                />
                            }
                        />
                    </div>

                    <RegularCard01
                        fade=""
                        title="Footprint Impact Trend"
                        units=""
                        context="kg CO₂"
                        graph={<ComposedChart01 />}
                        icon={
                            <FaArrowTrendDown
                                size={28}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    />

                    <RegularCard01
                        title="Diet Footprint Breakdown"
                        units=""
                        context="kg CO₂"
                        graph={<BarChart02 />}
                        icon={
                            <IoFastFoodOutline
                                size={28}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    />

                    <RegularCard01
                        title="Travel Footprint Breakdown"
                        context="kg CO₂"
                        graph={<RadialBarChart01 />}
                        icon={
                            <TbCalendarWeek
                                size={28}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    />

                    <div className="small-cards-container">
                        <SmallCard01
                            title="Compare"
                            value="18%"
                            units=""
                            context="above average"
                            graph={<SmallPieChart01 />}
                            icon={
                                <FaScaleUnbalanced
                                    size={22}
                                    style={{ color: "var(--normal-gray)" }}
                                />
                            }
                        />

                        <SmallCard01
                            fade=""
                            title="Projection"
                            value="34%"
                            units=""
                            context="future reduction"
                            graph={<SmallComposedChart01 />}
                            icon={
                                <SiFuturelearn
                                    size={20}
                                    style={{ color: "var(--normal-gray)" }}
                                />
                            }
                        />
                    </div>

                    {/* <RegularCard01
                        fade="fade-in-1"
                        title="Your Carbon Footprint"
                        units=""
                        context="kg CO₂"
                        graph={<AreaChart01 />}
                        icon={
                            <GiFootprint
                                size={30}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    /> */}

                    <RegularCard01
                        title="Carbon Offset Effort"
                        units=""
                        context="kg CO₂"
                        graph={<BarChart01 />}
                        icon={
                            <LuTrees
                                size={28}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    />

                    <RegularCard01
                        title="Most Impactful Offsets"
                        units=""
                        context="kg CO₂"
                        graph={<PieChart01 />}
                        icon={
                            <LuHeartHandshake
                                size={30}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    />

                    {/* 
                    <RegularCard01
                        title="Comparing Your Carbon Footprint"
                        units=""
                        context=""
                        graph={<ComparisonChart01 />}
                        icon={
                            <MdCompareArrows
                                size={30}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    /> */}
                    {/* 
                    <RegularCard01
                        title="Week Breakdown"
                        context="kg CO₂"
                        graph={<BarChart03 />}
                        icon={
                            <TbCalendarWeek
                                size={30}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        }
                    /> */}

                    <Footer01 />
                </div>
            </div>
        </>
    );
}

export default AnalyticsPage;
