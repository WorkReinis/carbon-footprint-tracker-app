import "../styles/carousel-card-01.css";

function CarouselCard01({
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
        <div className="carousel-card-container flex flex-col justify-between">
            <div className="carousel-card-img" style={imgStyle}></div>
            <div className="carousel-card-text flex flex-col justify-center align-center">
                <span className="font-bold text-xl">{value}</span>
                <span className="text-xs">{context}</span>
            </div>
        </div>
    );
}

export default CarouselCard01;
