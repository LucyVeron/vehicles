import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function BackButton() {
  return (
    <Link to={`/`}>
      <Button variant="contained" sx={{ margin: "1rem" }}>
        <ArrowBack sx={{ mr: "0.5rem" }} /> BACK TO OFFERS
      </Button>
    </Link>
  );
}

export default BackButton;
