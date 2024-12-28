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
        { name: "Long-haul flights", value: 60, fill: "var(--primary-color)" },
        { name: "Car Travel", value: 80, fill: "#6969C4" },
        { name: "Meat-based products", value: 20, fill: "#7878C8" },
        { name: "Dairy products", value: 70, fill: "#8787CB" },
        { name: "Public transport", value: 40, fill: "#9696CF" },
    ];

    const maxValue = 80;

    return (
        <div style={{ height: "16em" }}>
            <ResponsiveContainer >
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
