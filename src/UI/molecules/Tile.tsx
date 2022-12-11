import Details from "../atoms/Details";
import Image from "../atoms/Image";
import "../../App.scss";

function Tile() {
  return (
    <div className="Tile">
      <Image />
      <Details />
    </div>
  );
}

export default Tile;
