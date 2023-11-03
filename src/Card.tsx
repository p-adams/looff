import "./Card.css";
import img from "./assets/thumbnail.jpg";

function Card() {
  return (
    <div className="Card">
      <img src={img} alt="Card image" />
    </div>
  );
}

export default Card;
