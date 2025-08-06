import "../../styles/input-carousel-card-01.css";

function InputCarouselCard01({
    icon,
    img,
    category,
    title,
    time,
    difficulty,
    emoticon,
    context,
}) {
    return (
        <div className="input-carousel-card-container-01 flex flex-col justify-between hover-scale ">
            {/* <div className="home-visuals-container-01">
                <img
                    className="home-carousel-card-img-01"
                    src={img}
                    fetchPriority="high"
                ></img>
            </div> */}

            <div className="input-carousel-card-text-01 flex flex-col justify-center align-center">
                <div className="flex flex-col justify-center ">
                    <div className="flex flex-row gap-1 justify-start items-center">
                        <div>{icon}</div>
                        <span className="text-sm font-bold">{category}</span>
                    </div>
                    <span className="text-3xl leading-tight font-bold ">
                        {title}
                    </span>
                    <span className=" text-xs">{context}</span>
                </div>
            </div>
        </div>
    );
}

export default InputCarouselCard01;
