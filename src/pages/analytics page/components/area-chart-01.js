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

function AreaChart01() {
    const data = [
        { name: "Jan", value: 60 },
        { name: "Feb", value: 62 },
        { name: "Mar", value: 70 },
        { name: "Apr", value: 77 },
        { name: "May", value: 68 },
        { name: "Jun", value: 40 },
        { name: "Jul", value: 22 },


    ];

    return (
       
            <div style={{ width: "100%", height: "14em" }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 0,
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
                    />
                        <YAxis
                            axisLine={false} // Removes the Y-axis line
                            tickLine={false}
                            width={36}
                            tickFormatter={(value, index) => (index === 0 ? '' : value)}
                        />

                        <CartesianGrid
                            horizontal={true}
                            vertical={false}
                            stroke="lightgray"
                            strokeWidth={1}
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

export default AreaChart01;
