import Tile from "../molecules/Tile";

function Cars() {
  const carArray = ["asdf", "qwer", "yuio"];

  return (
    <div className="Cars">
      {carArray.map((car: any) => (
        <Tile key={car} />
      ))}
    </div>
  );
}

export default Cars;
