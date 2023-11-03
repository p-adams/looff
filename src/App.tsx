import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./Carousel";
import Card from "./Card";
import Thumbnail from "./Thumbnail";
import { useState } from "react";

function App() {
  const [demoMode, setDemoMode] = useState("thumbnail");
  return (
    <>
      <div></div>
      <h1>Looff Carousel Component</h1>
      <div className="card">
        <label htmlFor="demoMode">
          Demo Modes:
          <select id="demoMode" onChange={(e) => setDemoMode(e.target.value)}>
            <option value={"thumbnail"}>Thumbnail</option>
            <option value={"thumbnail_responsive"}>Responsive Thumbnail</option>
            <option value={"card"}>Card</option>
            <option value={"card_responsive"}>Responsive Card</option>
          </select>
        </label>
        {demoMode === "thumbnail" && (
          <section>
            <h2>Thumbnails</h2>
            <Carousel renderSlideContent={() => <Thumbnail />} />
          </section>
        )}
        {demoMode === "thumbnail_responsive" && (
          <section>
            <h2>Responsive Thumbnails</h2>
            <Carousel renderSlideContent={() => <Thumbnail />} />
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
    </>
  );
}

export default App;
