import Cars from "../../UI/organisms/Cars";
import Filters from "../../UI/organisms/Filters";
import "./Listing.scss";

function Listing() {
  return (
    <div className="Listing">
      <Filters />
      <Cars />
    </div>
  );
}

export default Listing;