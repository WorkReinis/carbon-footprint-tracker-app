import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
    LabelList,
    ComposedChart,
    Scatter,
} from "recharts";

function ReduceBarChart01({ value }) {
    const data = [{ name: "progress", value: value, maxValue: 100 }];

    return (
        <div style={{ height: "1em", width: "100%" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    barGap={-8}
                >
                    <XAxis type="number" hide />
                    <YAxis
                        dataKey="name"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        hide
                    />

                    <Bar
                        dataKey="maxValue"
                        fill="var(--light-gray)"
                        barSize={8}
                        radius={[5, 5, 5, 5]}
                    />

                    <Bar
                        dataKey="value"
                        fill="var(--primary-color)"
                        barSize={8}
                        radius={[5, 5, 5, 5]}
                    ></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ReduceBarChart01;
