import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
    { name: "Category A", value: 500 },
    { name: "Category B", value: 300 },
];

const COLORS = [
    "#5A5AC1" /* --primary-color */,
    "#E2E9FF" /* --secondary-color */,
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

function SmallPieChart01() {
    return (
        <div style={{ height: "8em" }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%" // Center the pie chart horizontally
                        cy="50%" // Center the pie chart vertically
                        outerRadius="90%" // Outer radius of the pie
                        innerRadius="65%" // Inner radius for the hollow effect
                        paddingAngle={5}
                        dataKey="value"

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SmallPieChart01;
