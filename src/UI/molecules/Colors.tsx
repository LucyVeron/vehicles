import ColorBox from "../atoms/ColorBox";
import Label from "../atoms/Label";

function Colors() {
  const label = "Colors";
  const colors = ["black", "grey", "white", "blue", "red"];

  return (
    <div className="Colors">
      <Label text={label} />
      <div style={{ display: "flex" }}>
        {colors.map((color: string) => {
          return <ColorBox key={color} color={color} />;
        })}
      </div>
    </div>
  );
}

export default Colors;
