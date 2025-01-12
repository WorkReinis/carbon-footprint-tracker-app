import "../../styles/offsets-card-01.css";
import "../../../../styles/animation/scale-on-interaction.css";

function OffsetsCard01({
    title,
    value,
    units,
    context,
    icon,
    graph,
    fade,
    img,
}) {
    const imgStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
    };

    return (
        <div className="offsets-card flex flex-col justify-between hover-scale active-scale">
            <div className="offsets-card-img" style={imgStyle}></div>
            <div className="offsets-card-text flex flex-col justify-center items-start gap-1">
                <span className="text-left font-bold text-md leading-tight ">{value}</span>
                <span className="text-xs" style={{ color: 'var(--darkish-gray)' }}>{context}</span>
            </div>
        </div>
    );
}

export default OffsetsCard01;
