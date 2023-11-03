import "./Thumbnail.css";
import img from "./assets/thumbnail.jpg";

function Thumbnail() {
  return (
    <div className="Thumbnail">
      <img src={img} alt="Thumbnail image" />
    </div>
  );
}

export default Thumbnail;
