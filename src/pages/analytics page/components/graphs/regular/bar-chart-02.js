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
} from "recharts";

const data = [
    { name: "Meat", value: 90, maxValue: 100 },
    { name: "Processed Foods", value: 70, maxValue: 100 },
    { name: "Diary", value: 50, maxValue: 100 },
    { name: "Beverages", value: 40, maxValue: 100 },
    { name: "Vegetables", value: 10, maxValue: 100 },
];

function BarChart02() {
    return (
        <div style={{ height: "9em" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
                    barGap={-10}
                >
                    <XAxis type="number" hide />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={80}
                        tick={{ fontSize: "0.9em" }}
                        tickMargin={10}
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: "0.8em" }}
                    />

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
                        radius={[5, 5, 5, 5]}
                    >
                        <LabelList
                            dataKey="value"
                            position="right"
                            fill="#000"
                            offset={5}
                            style={{ fontSize: "0.8em" }}
                        />
                        
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart02;
