import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    CartesianGrid,
    AreaChart,
    Area,
} from "recharts";

function SmallAreaChart01() {
    const data = [
        { name: "Jan", value: 18 },
        { name: "Feb", value: 22 },
        { name: "Mar", value: 30 },
        { name: "Apr", value: 25 },
        { name: "May", value: 22 },
        { name: "Jun", value: 18 },
        { name: "Jul", value: 35 },


    ];

    return (
       
            <div style={{ width: "100%", height: "8em" }}>
                <ResponsiveContainer>
                    <AreaChart
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
                                id="colorArea"
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
                                        stopOpacity: 0,
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
                                    >
                                        {payload.value}
                                    </text>
                                );
                            }
                            return null; // Skip every second label
                        }}
                        hide
                    />
                        <YAxis
                            axisLine={false} // Removes the Y-axis line
                            tickLine={false}
                            width={36}
                            tickFormatter={(value, index) => (index === 0 ? '' : value)}
                            hide
                        />

                        
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="var(--primary-color)"
                            fill="url(#colorArea)"
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        
    );
}

export default SmallAreaChart01;
