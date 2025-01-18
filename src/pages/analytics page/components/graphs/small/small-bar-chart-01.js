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

function SmallBarChart01() {
    const data = [
        { name: "M", value: 45, maxValue: 100, highlightValue: 0, },
        { name: "T", value: 65, maxValue: 100, highlightValue: 65,  },
        { name: "W", value: 30, maxValue: 100, highlightValue: 0,  },
        { name: "T", value: 35, maxValue: 100, highlightValue: 0,  },
        { name: "F", value: 20, maxValue: 100, highlightValue: 0,  },
    ];

    return (
        <div style={{ height: "4em" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    barGap={-9}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        hide
                    />

                    <Bar
                        dataKey="maxValue"
                        fill="var(--light-gray)"
                        barSize={9}
                        radius={[5, 5, 5, 5]}
                    />

                    <Bar
                        dataKey="value"
                        fill="var(--primary-color)"
                        barSize={9}
                        radius={[15, 15, 15, 15]}
                    ></Bar>

<Bar
                        dataKey="highlightValue"
                        fill="var(--analytics-accent)"
                        barSize={10}
                        radius={[15, 15, 15, 15]}
                    ></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SmallBarChart01;
