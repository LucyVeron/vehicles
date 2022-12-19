import Details from "../atoms/Details";
import Image from "../atoms/Image";
import "../../App.scss";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Tile(props: any) {
  const style = {
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    padding: "15px",
    margin: "15px",
    width: "300px",
  };

  return (
    <Link className="Tile" style={style} to={`products/${props.id}`}>
      <Paper elevation={8} style={style}>
        <Image />
        <Details {...props} />
      </Paper>
    </Link>
  );
}

export default Tile;
