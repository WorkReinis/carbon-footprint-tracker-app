import "../../element-styles.css";

function SmallCard01({ title, value, units, context, icon, graph, fade }) {
    const data = [
        { name: "M", value: 12, maxValue: 100 },
        { name: "T", value: 65, maxValue: 100 },
        { name: "W", value: 30, maxValue: 100 },
        { name: "T", value: 35, maxValue: 100 },
        { name: "F", value: 20, maxValue: 100 },
    ];

    return (
        <div className={`card-small ${fade}`}>
            <div className="flex justify-between items-center pb-5">
                <h1 className="text-md">{title}</h1>
                <div className="circle-icon flex justify-center items-center">
                    {icon}
                </div>
            </div>

            <div className="flex justify-start items-end gap-1">
                <span className="flex font-bold text-2xl align-baseline">
                    {value}
                </span>
                <span
                    className="flex align-baseline"
                    style={{ fontSize: "0.85em" }}
                >
                    {units}
                </span>
            </div>

            <span
                lassName="text-xs"
                style={{ color: "var(--normal-gray)", fontSize: "0.85em" }}
            >
                {context}
            </span>
            {graph}
        </div>
    );
}

export default SmallCard01;
