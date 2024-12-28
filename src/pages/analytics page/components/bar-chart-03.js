import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    CartesianGrid,
    Line,
} from "recharts";

function BarChart01() {
    const data = [
        { name: "M", value: 12, maxValue: 100 },
        { name: "T", value: 65, maxValue: 100 },
        { name: "W", value: 30, maxValue: 100 },
        { name: "T", value: 35, maxValue: 100 },
        { name: "F", value: 90, maxValue: 100 },
        { name: "Sa", value: 25, maxValue: 100 },
        { name: "Su", value: 75, maxValue: 100 },

    ];

    return (
        <div style={{ height: "16em" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    barGap={-10}
                >
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />

                    <Bar
                        dataKey="maxValue"
                        fill="var(--light-gray)" // Background bar color
                        barSize={10} // Same size as foreground bar
                        radius={[5, 5, 5, 5]} // Rounded corners for style
                    />

                    <Bar
                        dataKey="value"
                        fill="var(--primary-color)"
                        barSize={10} // Matches the size of the background bar
                        radius={[15, 15, 15, 15]} // Rounded top corners
                    >
                        <LabelList
                            dataKey="value"
                            position="top"
                            style={{ fontSize: "0.9em" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart01;
