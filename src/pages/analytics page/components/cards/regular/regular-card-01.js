import "./regular-card-01.css";

function RegularCard01({ title, value, units, context, icon, graph, fade }) {
    return (
        <div className='card-regular hover-scale active-scale'>
            <div className="regular-card-01-text flex justify-between items-center ">
                <div>
                    <div className="flex justify-start items-end gap-1">
                        <h1 className="font-bold text-lg">{title}</h1>
                        <span
                            className="flex align-baseline"
                            style={{ fontSize: "0.80em" }}
                        >
                            {units}
                        </span>
                    </div>

                    <span
                        lassName="text-xs"
                        style={{
                            color: "var(--normal-gray)",
                            fontSize: "0.80em",
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
