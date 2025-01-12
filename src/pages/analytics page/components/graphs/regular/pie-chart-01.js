import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import CustomTooltip01 from "../custom-tooltip-01";

const COLORS = [
    "#5A5AC1" /* --primary-color */,
    "#6969C4" /* light-indigo */,
    "#7878C8" /* soft-blue */,
    "#8787CB" /* pale-lavender */,
    "#9696CF" /* pastel-blue */,
    "#A4A4D2" /* tertiary-color */,
    "#B3B3D6" /* accent-color */,
    "#C2C2D9" /* muted-gray */,
    "#D1D1DD" /* subtle-gray */,
    "#E0E0E0" /* --light-gray */,
];

function PieChart01() {
    const data = [
        { name: "App Challenges", value: 187 },
        { name: "No Air Travel", value: 457 },
        { name: "Incentives", value: 231 },
        { name: "Waste Reduction", value: 87 },
    ];

    return (
        <div style={{ width: "100%", height: "13em" }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        fill="black"
                        paddingAngle={5}
                        labelLine={false}
                        label={true}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                                fontSize="0.75em"
                            />
                        ))}
                    </Pie>

                    <Legend
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        wrapperStyle={{
                            fontSize: "0.9em",
                            paddingTop: "2.5em",
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChart01;
