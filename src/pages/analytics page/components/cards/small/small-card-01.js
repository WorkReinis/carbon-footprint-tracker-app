import "../../../styles/element-styles.css";
import "./small-card-01.css";

function SmallCard01({ title, value, units, context, icon, graph, fade }) {
    return (
        <div className={`card-small ${fade}`}>
            <div className='small-card-01-text'>
                <div className="flex justify-between items-center pb-0">
                    <h1 className="font-bold text-md">{title}</h1>
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
                        style={{ fontSize: "0.80em" }}
                    >
                        {units}
                    </span>
                </div>

                <span
                    className="text-xs"
                    style={{ color: "var(--normal-gray)", fontSize: "0.80em" }}
                >
                    {context}
                </span>
            </div>
            {graph}
        </div>
    );
}

export default SmallCard01;
