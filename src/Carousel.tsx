import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMemo, useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  showSlidesInDialog?: boolean;
  renderSlideContent: () => JSX.Element;
}

interface CarouselSlide {
  label: string;
}

export default (props: CarouselProps & SwiperProps) => {
  const {
    breakpoints,
    renderSlideContent,
    showSlidesInDialog = false,
    slidesPerView,
  } = props;
  const [activeSlide, setActiveSlide] = useState<CarouselSlide | null>(null);
  const slides = useMemo<CarouselSlide[]>(
    () =>
      Array(7)
        .fill(0)
        .map((_: any, index: number) => ({
          label: `Slide ${index + 1}`,
        })),
    []
  );

  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        className="Swiper-element"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
        spaceBetween={10}
        slidesPerView={slidesPerView ?? 4}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {slides.map((slide: { label: string }, index: number) => (
          <SwiperSlide
            key={index}
            onClick={() => showSlidesInDialog && setActiveSlide(slide)}
          >
            <h1>{slide.label}</h1>
            {renderSlideContent()}
          </SwiperSlide>
        ))}
      </Swiper>
      <dialog open={showSlidesInDialog && !!activeSlide}>
        <button onClick={() => setActiveSlide(null)}>close</button>
      </dialog>
    </>
  );
};
