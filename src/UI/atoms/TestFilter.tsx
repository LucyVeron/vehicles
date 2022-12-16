import { setName, setCompany } from "../../features/offers/offersSlice";
import { useAppDispatch } from "../../utils/hooks";

function TestFilter(props: any) {
  const dispatch = useAppDispatch();

  const onFilter = (e: any) => {
    switch (props.type) {
      case "name":
        dispatch(setName(e.target.value));
        break;
      case "company":
        dispatch(setCompany(e.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="TestFilter">
      <input
        type="text"
        placeholder={props.type}
        onChange={(e) => onFilter(e)}
      />
    </div>
  );
}

export default TestFilter;
