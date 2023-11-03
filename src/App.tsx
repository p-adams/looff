import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./Carousel";
import Card from "./Card";
import Thumbnail from "./Thumbnail";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Looff Carousel Component</h1>
      <div className="card">
        <section>
          <h2>Thumbnails</h2>
          <Carousel renderSlideContent={() => <Thumbnail />} />
        </section>
        {/* <section>
          <h2> Responsive Thumbnails</h2>
          <Carousel renderSlideContent={() => <Thumbnail />} />
  </section> */}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
