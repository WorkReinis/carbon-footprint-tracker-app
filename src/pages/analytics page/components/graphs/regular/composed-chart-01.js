import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Cell
} from "recharts";

import CustomTooltip01 from "../custom-tooltip-01";

const data = [
    { name: "Jan", value: 60, max: 100, highlightValue: 0 },
    { name: "Feb", value: 90, max: 100, highlightValue: 100 },
    { name: "Mar", value: 50, max: 100, highlightValue: 0 },
    { name: "Apr", value: 70, max: 100, highlightValue: 0 },
    { name: "May", value: 60, max: 100, highlightValue: 0 },
    { name: "Jun", value: 65, max: 100, highlightValue: 0 },
    { name: "Jul", value: 20, max: 100, highlightValue: 0 },
];

function ComposedChart01() {
    return (
        <div style={{ width: "100%", height: "10em" }}>
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
                    
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
                                        fontSize="0.80em"
                                    >
                                        {payload.value}
                                    </text>
                                );
                            }
                            return null;
                        }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: "0.80em" }}
                        width={36}
                        tickFormatter={(value, index) =>
                            index === 0 ? "" : value
                        }
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

                        <linearGradient
                            id="gradient2"
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
                                stopColor="var(--light-analytics-accent)"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <Bar
                        dataKey="max"
                        data={data}
                        fill="url(#gradient1)"
                        radius={[10, 10, 10, 10]}
                        barSize={32}
                    >
                          {data.map((entry, index) => (
        <Cell 
            key={`cell-${index}`} 
            fill={entry.highlightValue > 70 ? 'url(#gradient2)' : 'url(#gradient1)'} 
        />
    ))}
                    </Bar>

                    <Tooltip content={<CustomTooltip01 />} />

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

export default ComposedChart01;
