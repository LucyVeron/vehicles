import { TextField } from "@mui/material";

function Input(props: any) {
  return <TextField className="Input" label={props.label} variant="outlined" />;
}

export default Input;
