import Details from "../atoms/Details";
import Image from "../atoms/Image";
import "../../App.scss";
import { Paper } from "@mui/material";
import "./Tile.scss";

function Tile(props: any) {
  return (
    <Paper className="Tile" elevation={8}>
      <Image />
      <Details {...props} />
    </Paper>
  );
}

export default Tile;
