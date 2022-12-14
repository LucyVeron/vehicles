import { Paper } from "@mui/material";

function ColorBox(props: any) {
  const style = {
    width: "20px",
    height: "20px",
    margin: "2px",
    cursor: "pointer",
    background: props.color,
  };

  return (
    <Paper className="ColorBox" elevation={3} style={style}>
    </Paper>
  )
}

export default ColorBox;
