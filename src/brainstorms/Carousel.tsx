import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - slidesPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + slidesPerPage, slides.length - slidesPerPage)
    );
  };

  return (
    <div className="Carousel">
      <div className="Carousel-inner">
        {slides
          .slice(currentIndex, currentIndex + slidesPerPage)
          .map((slide: any, index: any) => (
            <div key={index} className="Carousel-slide">
              {slide}
            </div>
          ))}
      </div>
      <div className="Carousel-navigation">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
