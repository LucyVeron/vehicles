import TestFilter from "../../UI/atoms/TestFilter";
import Cars from "../../UI/organisms/Cars";
import Filters from "../../UI/organisms/Filters";
import "./Listing.scss";

function Listing() {
  return (
    <div className="Listing">
      {/* <Filters /> */}
      <TestFilter />
      <Cars />
    </div>
  );
}

export default Listing;