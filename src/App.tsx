import Carousel from "./Carousel";
import Card from "./Card";
import Thumbnail from "./Thumbnail";
import { useState } from "react";
import "./App.css";

function App() {
  const [demoMode, setDemoMode] = useState<
    "thumbnail" | "thumbnail_responsive" | "card" | "card_responsive"
  >("thumbnail");
  return (
    <section>
      <h1>Looff Carousel Component</h1>
      <div className="container">
        <div className="main-content">
          {demoMode === "thumbnail" && (
            <section>
              <h2>Thumbnails</h2>
              <Carousel
                showSlidesInDialog={true}
                renderSlideContent={() => <Thumbnail />}
              />
            </section>
          )}
          {demoMode === "thumbnail_responsive" && (
            <section>
              <h2>Responsive Thumbnails</h2>
              <Carousel
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                renderSlideContent={() => <Thumbnail />}
              />
            </section>
          )}
          {demoMode === "card" && (
            <section>
              <h2>Card</h2>
              <Carousel renderSlideContent={() => <Card />} />
            </section>
          )}
          {demoMode === "card_responsive" && (
            <section>
              <h2>Responsive Card</h2>
              <Carousel renderSlideContent={() => <Card />} />
            </section>
          )}
        </div>
        <aside>
          <h3>Demo Modes</h3>
          <ul>
            <li onClick={() => setDemoMode("thumbnail")}>Thumbnail</li>
            <li onClick={() => setDemoMode("thumbnail_responsive")}>
              Responsive Thumbnail
            </li>
            <li onClick={() => setDemoMode("card")}>Card</li>
            <li onClick={() => setDemoMode("card_responsive")}>
              Responsive Card
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default App;
