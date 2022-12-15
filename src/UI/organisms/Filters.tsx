import AutocompleteFilter from "../atoms/AutocompleteFilter";
import TestFilter from "../atoms/TestFilter";
import Chips from "../molecules/Chips";
import Colors from "../molecules/Colors";
import Range from "../molecules/Range";
import "./Filters.scss";

function Filters() {
  return (
    <div className="Filters">
      <TestFilter />
      {/* <AutocompleteFilter />
      <Chips />
      <Colors />
      <Range /> */}
    </div>
  );
}

export default Filters;
