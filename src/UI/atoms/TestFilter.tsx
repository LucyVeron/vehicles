import { Button } from "@mui/material";
import {
  showOffers,
  setName,
  setCompany,
  setFilteredOffers,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function TestFilter() {
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

  const filterNames = (e: any) => {
    dispatch(setName(e.target.value));
  };

  const filterCompanies = (e: any) => {
    dispatch(setCompany(e.target.value));
  };

  return (
    <div className="TestFilter">
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => filterNames(e)}
      />
      <input
        type="text"
        placeholder="Search by company"
        onChange={(e) => filterCompanies(e)}
      />
      <div>
        {data.filteredOffers.map((offer: any) => {
          return (
            <div key={offer.id}>
              <strong>{offer.name}</strong>
              <div>{offer.company.name}</div>
            </div>
          );
        })}
      </div>
      <br />
      <Button onClick={applyFilters} variant="contained">
        Search
      </Button>
    </div>
  );
}

export default TestFilter;
