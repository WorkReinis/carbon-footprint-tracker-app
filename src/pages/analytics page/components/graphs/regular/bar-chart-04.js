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

function BarChart04() {
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
        <div style={{ height: "14em" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    barGap={-16}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "white",
                        }}
                    />

                    <Bar
                        dataKey="maxValue"
                        fill="rgba(255, 255, 255, 0.2)"
                        barSize={16}
                        radius={[15, 15, 15, 15]}
                    />

                    <Bar
                        dataKey="value"
                        fill="white"
                        barSize={16}
                        radius={[15, 15, 15, 15]}
                    >
                        <LabelList
                            dataKey="value"
                            position="top"
                            style={{ fontSize: "0.9em", fill: "white" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart04;
