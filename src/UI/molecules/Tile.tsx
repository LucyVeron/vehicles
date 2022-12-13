import Details from "../atoms/Details";
import Image from "../atoms/Image";
import "../../App.scss";

function Tile(props: any) {
  return (
    <div className="Tile">
      <Image />
      <Details {...props} />
    </div>
  );
}

export default Tile;
