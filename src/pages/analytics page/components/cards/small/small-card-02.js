import "./small-card-02.css";
import "../../../styles/element-styles.css";

function SmallCard02({ title, value, units, context, icon, graph, fade }) {
    return (
        <div className="card-small-02 flex-1 flex flex-col items-center hover-scale active-scale">
            <div className="flex justify-between items-center ">
                <h1 className="font-bold text-xs">{title}</h1>
            </div>

            <div className="flex flex-col justify-start items-center">
                <span className="flex font-bold text-2xl align-baseline">
                    {value}
                </span>
                <span
                    className="flex align-baseline text-xs"
                    
                >
                    {units}
                </span>
            </div>
        </div>
    );
}

export default SmallCard02;
