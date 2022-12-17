import { Button, ButtonGroup } from "@mui/material";
import {
  setCompany,
  setCompanyContainer,
  setFilteredOffers,
  setName,
  setNameContainer,
  showOffers,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import "./Filters.scss";
import DropdownFilter from "../atoms/DropdownFilter";
import { useEffect } from "react";

function Filters() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();
  const applyFilters = () => {
    const filteredOffers = data.offers.filter(
      (offer: any) =>
        offer.company.name
          .toLowerCase()
          .includes(data.companyContainer.toLowerCase()) &&
        offer.name.toLowerCase().includes(data.nameContainer.toLowerCase())
    );

    dispatch(setName(""));
    dispatch(setCompany(""));
    dispatch(setFilteredOffers(filteredOffers));
  };

  const clearFilters = () => {
    dispatch(setName(""));
    dispatch(setNameContainer(""));
    dispatch(setCompany(""));
    dispatch(setCompanyContainer(""));
    dispatch(setFilteredOffers(data.filteredOffersContainer));
  };

  useEffect(() => {});

  return (
    <div className="Filters">
      <DropdownFilter type="name" />
      <DropdownFilter type="company" />
      <ButtonGroup variant="contained">
        <Button onClick={applyFilters}>Search</Button>
        <Button onClick={clearFilters} color="error">
          Clear Filters
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Filters;
