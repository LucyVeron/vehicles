import CircularProgress from "@mui/material/CircularProgress";

function Spinner() {
  return (
    <div
      className="Spinner"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <CircularProgress size="6rem" />
    </div>
  );
}

export default Spinner;
