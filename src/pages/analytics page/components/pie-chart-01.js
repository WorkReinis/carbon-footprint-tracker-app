import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

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

function AreaChart01() {
    const data = [
        { name: "Long-haul flights", value: 400 }, // High emission from air travel
        { name: "Car Travel", value: 300 }, // Significant emission from personal car usage
        { name: "Meat-based products", value: 350 }, // High emission from animal farming (beef, lamb)
        { name: "Dairy products", value: 250 }, // Emission from dairy production
        { name: "Public transport", value: 100 }, // Lower emission than cars or flights
    ];

    
    return (
        <div style={{ width: "100%", height: "24em" }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        fill="black"
                        paddingAngle={5}
                        labelLine={false}
                        label={({ value, cx, cy, midAngle, outerRadius }) => {
                            const RADIAN = Math.PI / 180;
                        
                            // Adjust label position by adding an offset from the outerRadius
                            const labelRadius = outerRadius + 5; // Adjust 20px for spacing between the label and pie slice
                            const x = cx + labelRadius * Math.cos(-RADIAN * midAngle);
                            const y = cy + labelRadius * Math.sin(-RADIAN * midAngle);
                        
                            return (
                                <g>
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r={18} // Circle radius around the label
                                        fill="white"
                                        stroke="var(--dark-gray)" // Circle border color
                                        strokeWidth="1"
                                    />
                                    <text
                                        x={x}
                                        y={y}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="black"
                                        fontSize="14"
                                    >
                                        {value} {/* Value in the label */}
                                    </text>
                                </g>
                            );
                        }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
    
                    <Legend
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"


                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AreaChart01;
