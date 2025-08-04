import "../../styles/small-card-01.css";

function SmallCard01({ title, value, units, context, icon, graph, fade }) {
    return (
        <div className="greetings-badge flex flex-col items-center">
            <h3 className="text-xs">{context}</h3>
            <div className="flex flex-row items-center gap-0.5">
                <div className="text-xl">{icon}</div>
                <span className="text-2xl font-bold">{title}</span>
            </div>
            <span className="text-xs">{value}</span>
        </div>
    );
}

export default SmallCard01;
