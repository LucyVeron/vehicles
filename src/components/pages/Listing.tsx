import Cars from "../../UI/organisms/Cars";
import "./Listing.scss";
import Filters from "../../UI/organisms/Filters";

function Listing() {
  return (
    <div className="Listing">
      <Filters />
      <Cars />
    </div>
  );
}

export default Listing;
