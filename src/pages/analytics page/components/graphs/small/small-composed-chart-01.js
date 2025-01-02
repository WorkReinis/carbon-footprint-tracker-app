import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", value: 60 },
    { name: "Feb", value: 90 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 70 },
    { name: "May", value: 60 },
    { name: "Jun", value: 65 },
    { name: "Jul", value: 20 },
];

const backgroundData = data.map((item) => ({ ...item, value: 100 }));

function SmallComposedChart01() {
    return (
        <div style={{ width: "100%", height: "4em" }}>
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
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
                                    >
                                        {payload.value}
                                    </text>
                                );
                            }
                            return null;
                        }}
                        hide
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        width={36}
                        tickFormatter={(value, index) =>
                            index === 0 ? "" : value
                        }
                        hide
                    />

                    <defs>
                        <linearGradient
                            id="gradient1"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="white"
                                stopOpacity={0.6}
                            />
                            <stop
                                offset="100%"
                                stopColor="var(--secondary-color)"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <Bar
                        dataKey="value"
                        data={backgroundData}
                        fill="url(#gradient1)"
                        radius={[10, 10, 10, 10]}
                        barSize={14}
                    />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--primary-color)"
                        strokeWidth={3}
                        dot={false}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SmallComposedChart01;
