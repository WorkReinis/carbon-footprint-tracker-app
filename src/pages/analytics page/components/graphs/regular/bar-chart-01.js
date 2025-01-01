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
        { name: "Jan", value: 12 },
        { name: "Feb", value: 15 },
        { name: "Mar", value: 30 },
        { name: "Apr", value: 35 },
        { name: "May", value: 40 },
        { name: "Jun", value: 25 },
        { name: "Jul", value: 15 },
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
                            return null; // Skip every second label
                        }}
                    />

                    <Bar
                        dataKey="value"
                        fill="url(#gradientBar)"
                        barSize={15}
                        radius={[15, 15, 15, 15]} // Rounded top corners
                    >
                        <LabelList
                            dataKey="value"
                            position="top"
                            style={{ fontSize: "0.80em" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart01;
