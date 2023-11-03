import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  renderSlideContent: () => JSX.Element;
}

export default (props: CarouselProps & SwiperProps) => {
  const [slides, setSlides] = useState<{ label: string }[]>(
    Array(7)
      .fill(0)
      .map((_: any, index: number) => ({
        label: `Slide ${index + 1}`,
      }))
  );

  return (
    <Swiper
      breakpoints={props.breakpoints}
      className="Swiper-element"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={true}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide: { label: string }, index: number) => (
        <SwiperSlide key={index}>
          <h1>{slide.label}</h1>
          {props.renderSlideContent()}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
