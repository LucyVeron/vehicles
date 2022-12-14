import AutocompleteFilter from "../atoms/AutocompleteFilter";
import Chips from "../molecules/Chips";
import Colors from "../molecules/Colors";
import Range from "../molecules/Range";
import "./Filters.scss";

function Filters() {
  return (
    <div className="Filters">
      <AutocompleteFilter />
      <Chips />
      <Colors />
      <Range />
    </div>
  );
}

export default Filters;
