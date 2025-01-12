import "../../../styles/element-styles.css";
import "./small-card-01.css";

function SmallCard01({ title, value, units, context, icon, graph, fade }) {
    return (
        <div className='card-small hover-scale active-scale' >
            <div className="small-card-01-text flex flex-col">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-md">{title}</h1>
                    <div className="circle-icon flex justify-center items-center">
                        {icon}
                    </div>
                </div>

                <div className="flex justify-start items-end gap-1">
                    <span className="flex font-bold text-2xl align-baseline">
                        {value}
                    </span>
                    <span className="text-sm flex align-baseline">{units}</span>
                </div>

                <span
                    className="text-sm"
                    style={{ color: "var(--normal-gray)" }}
                >
                    {context}
                </span>
            </div>
            {graph}
        </div>
    );
}

export default SmallCard01;
