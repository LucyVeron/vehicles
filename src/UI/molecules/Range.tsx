import Input from "../atoms/Input";

function Range() {
  return (
    <div className="Range" style={{ display: "flex" }}>
      <Input label="Min" />
      <Input label="Max" />
    </div>
  );
}

export default Range;