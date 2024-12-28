import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const data = [
    { name: "Meat", value: 90, maxValue: 100 },
    { name: "Processed Foods", value: 70, maxValue: 100 },
    { name: "Diary", value: 50, maxValue: 100 },
    { name: "Beverages", value: 40, maxValue: 100 },
    { name: "Vegetables", value: 10, maxValue: 100 },
];

function BarChart02() {
    return (
        <div style={{ height: "12em" }}>
            <ResponsiveContainer >
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 20, right: 10, left: 30, bottom: 0 }}
                    barGap={-10} // No gap between bars within a category (if relevant)
                >
                    <XAxis type="number" hide />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={80}
                        tick={{ fontSize: "0.9em" }} // Customize font size
                        tickMargin={10} // Add space between ticks and Y-axis labels
                        axisLine={false}
                        tickLine={false}
                    />

                    <Bar
                        dataKey="maxValue"
                        fill="var(--light-gray)" // Background bar color
                        barSize={10} // Same size as foreground bar
                        radius={[5, 5, 5, 5]} // Rounded corners for style
                    />
                    {/* Render foreground bar (actual value) */}
                    <Bar
                        dataKey="value"
                        fill="var(--primary-color)" // Foreground bar color
                        barSize={10} // Matches the size of the background bar
                        radius={[5, 5, 5, 5]}
                    >
                        <LabelList
                            dataKey="value"
                            position="right" // Place value above the bar
                            fill="#000" // Text color for value labels
                            offset={5} // Space above the bar
                            style={{ fontSize: "0.9em" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart02;
