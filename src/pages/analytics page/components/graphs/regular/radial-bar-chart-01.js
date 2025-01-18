import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    ResponsiveContainer,
    Layer,
} from "recharts";
import CustomTooltip01 from "../custom-tooltip-01";

function RadialBarChart01() {
    const data = [
        { name: "Public Transport", value: 20, fill: "var(--lightest-green)" },
        { name: "Ridesharing", value: 30, fill: "var(--light-green)" },
        { name: "Commuter Flights", value: 40, fill: "var(--normal-green)" },
        { name: "Car Travel", value: 50, fill: "var(--darkish-green)" },
        { name: "Long-haul flights", value: 80, fill: "var(--analytics-accent)" },
        
    ];

    const maxValue = 80;

    return (
        <div style={{ height: "16em" }}>
            <ResponsiveContainer>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="120%"
                    data={data}
                    startAngle={215}
                    endAngle={-35}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <RadialBar
                        minAngle={15}
                        clockWise={true}
                        dataKey="value"
                        cornerRadius={15}
                        background
                    />
                    <Tooltip content={<CustomTooltip01 />} />
                    <Legend
                        iconSize={10}
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        wrapperStyle={{
                            fontSize: "0.9em",
                        }}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadialBarChart01;
