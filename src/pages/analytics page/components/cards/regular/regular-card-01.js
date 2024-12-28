import "../../element-styles.css";

function RegularCard01({ title, value, units, context, icon, graph, fade }) {
    const data = [
        { name: "M", value: 12, maxValue: 100 },
        { name: "T", value: 65, maxValue: 100 },
        { name: "W", value: 30, maxValue: 100 },
        { name: "T", value: 35, maxValue: 100 },
        { name: "F", value: 20, maxValue: 100 },
    ];

    return (
        <div className={`card-regular ${fade}`}>
            <div className="flex justify-between items-center ">
                <div>
                    

                    <div className="flex justify-start items-end gap-1">
                        <h1 className="font-bold text-xl">{title}</h1>
                        <span
                            className="flex align-baseline"
                            style={{ fontSize: "0.85em" }}
                        >
                            {units}
                        </span>
                    </div>

                    <span
                        lassName="text-xs"
                        style={{
                            color: "var(--normal-gray)",
                            fontSize: "0.85em",
                        }}
                    >
                        {context}
                    </span>
                </div>

                <div className="circle-icon flex justify-center items-center">
                    {icon}
                </div>
            </div>

            {graph}
        </div>
    );
}

export default RegularCard01;
