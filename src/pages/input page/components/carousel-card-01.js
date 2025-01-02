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
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.0)), url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
    };

    return (
        <div
            className={`carousel-card flex flex-col justify-end  ${fade}`}
            style={divStyle}
        >
            <div className="flex justify-between items-center pb-1">
                <h1 className="font-bold text-sm">{title}</h1>
                {/* <div className="circle-icon flex justify-center items-center">
                    {icon}
                </div> */}
            </div>

            <div className="flex justify-start items-end gap-1">
                <span
                    className="flex font-bold text-3xl align-baseline"
                    style={{ color: "white" }}
                >
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
                style={{ color: "white", fontSize: "0.8em" }}
            >
                {context}
            </span>
            {graph}
        </div>
    );
}

export default CarouselCard01;
