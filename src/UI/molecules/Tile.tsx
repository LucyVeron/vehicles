import Details from "../atoms/Details";
import Image from "../atoms/Image";
import "../../App.scss";
import { Paper } from "@mui/material";

function Tile(props: any) {
  const style = {
    padding: "15px",
    margin: "15px",
    width: "400px",
  };

  return (
    <Paper className="Tile" elevation={8} style={style}>
      <Image />
      <Details {...props} />
    </Paper>
  );
}

export default Tile;
