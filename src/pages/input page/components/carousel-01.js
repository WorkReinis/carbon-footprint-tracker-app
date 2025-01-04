import React, { useState, useRef } from "react";
import "../styles/carousel-01.css";
import CarouselCard01 from "./carousel-card-01";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const slides = [
        <CarouselCard01
            heading=""
            value="1-2 trees"
            units=""
            context="absorb this amount in a year"
            img="https://cdn.dribbble.com/users/1338391/screenshots/15339530/forest_landscape_wallpaper_background_flat_design_art_4x.jpg"
            // img="https://images.unsplash.com/photo-1514116799412-5876d319c242"
            icon=""
        />,
        <CarouselCard01
            heading=""
            value="700 km"
            units=""
            context="of urban driving with a vehicle"
            img="https://st4.depositphotos.com/1832477/29984/v/450/depositphotos_299842512-stock-illustration-car-interior-drivers-place-view.jpg"
            //img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d"
            icon=""
        />,

        <CarouselCard01
            heading=""
            value="20 steaks"
            units=""
            context="enjoyed at a fine restaurant"
            img="https://cbx-prod.b-cdn.net/COLOURBOX36658680.jpg?width=800&height=800&quality=70"
            //img="https://images.unsplash.com/photo-1592768116796-f2c356806033"
            icon=""
        />,
        
        <CarouselCard01
            heading=""
            value="2.800 km"
            units=""
            context="traveled with NS trains"
            img="https://thumbs.dreamstime.com/b/woman-going-out-train-walking-platform-background-modern-arriving-station-vector-flat-design-67447700.jpg"
            //img="https://images.unsplash.com/photo-1518735391375-e4745c43c4b9"
            icon=""
        />,

        <CarouselCard01
            heading=""
            value="70 showers"
            units=""
            context="taking a hot shower at home"
            img="https://static.vecteezy.com/system/resources/previews/006/403/160/non_2x/happy-man-taking-shower-in-bathroom-wash-head-and-hair-with-shampoo-soap-flat-cartoon-design-vector.jpg"
            //img="https://images.unsplash.com/photo-1652662700928-5a4685e87d64"
            icon=""
        />,
    ];
    const carouselRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const difference = startX - e.clientX;
        if (difference > 50) {
            goToNext();
            setStartX(e.clientX);
        } else if (difference < -50) {
            goToPrevious();
            setStartX(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = "auto";
    };

    const goToNext = () => {
        if (currentIndex < slides.length - 2.5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div
            ref={carouselRef}
            className="carousel-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className="carousel-wrapper"
                style={{
                    transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
