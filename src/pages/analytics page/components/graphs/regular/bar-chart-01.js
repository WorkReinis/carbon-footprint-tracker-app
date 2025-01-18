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
        { name: "Jan", value: 12, highlightValue: 0 },
        { name: "Feb", value: 15, highlightValue: 0 },
        { name: "Mar", value: 30, highlightValue: 0 },
        { name: "Apr", value: 35, highlightValue: 0 },
        { name: "May", value: 40, highlightValue: 40 },
        { name: "Jun", value: 25, highlightValue: 0 },
        { name: "Jul", value: 15, highlightValue: 0 },
    ];

    return (
        <div style={{ height: "10em" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 15,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    barGap={-16}
                >
                    <defs>
                        <linearGradient
                            id="gradientBar"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "var(--primary-color)",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "var(--secondary-color)",
                                    stopOpacity: 1,
                                }}
                            />
                        </linearGradient>
                        <linearGradient
                            id="gradientBar2"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "var(--analytics-accent)",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "var(--light-analytics-accent)",
                                    stopOpacity: 1,
                                }}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={({ index, x, y, payload }) => {
                            // Only show every second label
                            if (index % 2 === 0) {
                                return (
                                    <text
                                        x={x}
                                        y={y + 10}
                                        textAnchor="middle"
                                        fill="var(--dark-gray)"
                                        fontSize="0.80em"
                                    >
                                        {payload.value}
                                    </text>
                                );
                            }
                            return null;
                        }}
                    />

                    <Bar
                        dataKey="value"
                        fill="url(#gradientBar)"
                        barSize={15}
                        radius={[15, 15, 15, 15]}
                    >
                        <LabelList
                            dataKey="value"
                            position="top"
                            style={{ fontSize: "0.80em" }}
                        />
                    </Bar>

                    <Bar
                        dataKey="highlightValue"
                        fill="url(#gradientBar2)"
                        barSize={17}
                        radius={[15, 15, 15, 15]}
                    ></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart01;
