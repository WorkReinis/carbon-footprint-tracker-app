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

function BarChart03() {
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
        <div style={{ height: "12em" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    barGap={-10}
                >
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />

                    <Bar
                        dataKey="maxValue"
                        fill="var(--light-gray)"
                        barSize={10}
                        radius={[5, 5, 5, 5]}
                    />

                    <Bar
                        dataKey="value"
                        fill="var(--primary-color)"
                        barSize={10}
                        radius={[15, 15, 15, 15]}
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

export default BarChart03;
