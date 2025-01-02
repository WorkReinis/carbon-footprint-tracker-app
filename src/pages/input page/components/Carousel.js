import React, { useState, useRef } from "react";
import "./Carousel.css";
import CarouselCard01 from "./carousel-card-01";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const slides = [
        <CarouselCard01
            heading=""
            value="1-2"
            units=""
            context="Trees absorb this in a year"
            img="https://images.unsplash.com/photo-1514116799412-5876d319c242"
            icon=""
        />,
        <CarouselCard01
            heading=""
            value="700"
            units=""
            context="Kilometers of driving with a vehicle"
            img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d"
            icon=""
        />,
        <CarouselCard01
            heading=""
            value="2.800"
            units=""
            context="Kilometers traveled with a train"
            img="https://images.unsplash.com/photo-1518735391375-e4745c43c4b9"
            icon=""
        />,
        <CarouselCard01
            heading=""
            value="20"
            units=""
            context="Steak meals at a restaurant"
            img="https://images.unsplash.com/photo-1592768116796-f2c356806033"
            icon=""
        />,
        <CarouselCard01
            heading=""
            value="70"
            units=""
            context="Hot showers taken at home"
            img="https://images.unsplash.com/photo-1652662700928-5a4685e87d64"
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
