import "./Card.css";
import Thumbnail from "./Thumbnail";

function Card() {
  return (
    <div className="Card">
      <Thumbnail />

      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Nunc dignissim rhoncus libero, ac dignissim elit placerat commodo.
        Mauris congue dui nec lorem commodo lobortis. Aliquam vestibulum ac arcu
        ut imperdiet.
      </p>
    </div>
  );
}

export default Card;
