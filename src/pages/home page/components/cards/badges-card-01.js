import '../../styles/badges-card-01.css'

function BadgesCard01({ img, title, description, date }) {
    const containerStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="badges-card-container fex flex-col justify-center align-center text-center w-1/3">
            <div className='badges-card-img hover-scale active-scale'style={containerStyle}></div>
            <div className="text-sm font-bold leading-0 pt-2">{title}</div>
            <div className="text-xs">{description}</div>
            <div className="text-xs">{date}</div>
        </div>
    );
}

export default BadgesCard01;
