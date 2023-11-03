import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./Carousel";
import Card from "./Card";
import Thumbnail from "./Thumbnail";
import { useState } from "react";

function App() {
  const [demoModes, setDemoMode] = useState("thumbnail");
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Looff Carousel Component</h1>
      <div className="card">
        <label htmlFor="demoMode">
          Demo Modes
          <select id="demoMode" onChange={(e) => setDemoMode(e.target.value)}>
            <option value={"thumbnail"}>Thumbnail</option>
            <option value={"thumbnail_responsive"}>Responsive Thumbnail</option>
          </select>
        </label>
        {demoModes === "thumbnail" && (
          <section>
            <h2>Thumbnails</h2>
            <Carousel renderSlideContent={() => <Thumbnail />} />
          </section>
        )}
        {demoModes === "thumbnail_responsive" && (
          <section>
            <h2>Responsive Thumbnails</h2>
            <Carousel renderSlideContent={() => <Thumbnail />} />
          </section>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
