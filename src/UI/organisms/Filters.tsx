import { Button } from "@mui/material";
import {
  setFilteredOffers,
  showOffers,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import TestFilter from "../atoms/TestFilter";
import "./Filters.scss";

function Filters() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();
  const applyFilters = () => {
    const filteredOffers = data.offers.filter(
      (offer: any) =>
        offer.company.name.toLowerCase().includes(data.company) &&
        offer.name.toLowerCase().includes(data.name)
    );
    dispatch(setFilteredOffers(filteredOffers));
  };
  return (
    <div className="Filters">
      <TestFilter type="name" />
      <TestFilter type="company" />
      <Button onClick={applyFilters} variant="contained">
        Search
      </Button>
    </div>
  );
}

export default Filters;
