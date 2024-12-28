import BarChart01 from "./components/bar-chart-01";
import BarChart02 from "./components/bar-chart-02";
import BarChart03 from "./components/bar-chart-03";
import AreaChart01 from "./components/area-chart-01";
import ComposedChart01 from "./components/composed-chart-01";
import PieChart01 from "./components/pie-chart-01";
import ComparisonChart01 from "./components/comparison-chart-01";
import "./AnalyticsPage.css";

function AnalyticsPage() {
    return (
        <>
            <div className="analytics-page">
                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Your carbon footprint
                    </h1>
                    <span className="flex text-md mb-5">
                        You have emitted 20 kg CO₂ this month, down 300% from
                        last month.
                    </span>

                    <AreaChart01 />
                </div>

                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Top Emission Sources
                    </h1>

                    <PieChart01 />
                </div>
                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Impact Trend (kg CO₂)
                    </h1>
                    <ComposedChart01 />
                </div>

                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Carbon Offset Effort (kg CO₂)
                    </h1>
                    <BarChart01 />
                </div>

                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Footprint Breakdown (kg CO₂)
                    </h1>
                    <BarChart02 />
                </div>

                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Comparing Your CO₂ Footprint
                    </h1>

                    <ComparisonChart01 />
                </div>

                <div className="chart">
                    <h1 className="flex font-bold text-xl">
                        Week Breakdown (kg CO₂)
                    </h1>
                    <BarChart03 />
                </div>
            </div>
        </>
    );
}

export default AnalyticsPage;
