import "../../styles/home-carousel-card-01.css";

function HomeCarouselCard01({ title, context }) {
    return (
        <div className="home-carousel-card-container-01 flex flex-col justify-center items-center">
            <span className="text-3xl leading-tight font-bold ">{title}</span>
            <span className="text-xs  leading-tight text-center">{context}</span>
        </div>
    );
}

export default HomeCarouselCard01;
