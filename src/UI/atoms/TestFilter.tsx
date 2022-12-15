import { useRef } from "react";
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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const companyInputRef = useRef<HTMLInputElement>(null);

  const applyFilters = () => {
    const filteredOffers = data.offers.filter(
      (offer: any) =>
        offer.company.name.toLowerCase().includes(data.company) &&
        offer.name.toLowerCase().includes(data.name)
    );
    dispatch(setFilteredOffers(filteredOffers));
  };

  const filterNames = () => {
    dispatch(setName(nameInputRef.current?.value));
    applyFilters();
  };

  const filterCompanies = () => {
    dispatch(setCompany(companyInputRef.current?.value));
    applyFilters();
  };

  return (
    <div className="TestFilter">
      <input
        type="text"
        placeholder="Search by name"
        ref={nameInputRef}
        onChange={filterNames}
      />
      <input
        type="text"
        placeholder="Search by company"
        ref={companyInputRef}
        onChange={filterCompanies}
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
    </div>
  );
}

export default TestFilter;
