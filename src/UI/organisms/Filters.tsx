import { Button, ButtonGroup } from "@mui/material";
import {
  setCompany,
  setCompanyContainer,
  setFilteredOffers,
  setName,
  setNameContainer,
  setNoResult,
  setTopics,
  showOffers,
} from "../../utils/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import "./Filters.scss";
import DropdownFilter from "../atoms/DropdownFilter";
import { useEffect } from "react";
import Chips from "../molecules/Chips";

function Filters() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  const applyFilters = () => {
    const filteredOffers = data.offers.filter(
      (offer: any) =>
        offer.company.name
          .toLowerCase()
          .includes(data.companyContainer.toLowerCase()) &&
        offer.name.toLowerCase().includes(data.nameContainer.toLowerCase()) &&
        offer.company.bs
          .split(" ")
          .filter((element: any) =>
            data.filteredTopics.length > 0
              ? data.filteredTopics.includes(element)
              : true
          )?.length > 0
    );

    dispatch(setName(""));
    dispatch(setCompany(""));
    dispatch(setFilteredOffers(filteredOffers));

    if (filteredOffers.length === 0) {
      dispatch(setNoResult(true));
    }
  };

  const clearFilters = () => {
    dispatch(setNoResult(false));
    dispatch(setName(""));
    dispatch(setNameContainer(""));
    dispatch(setCompany(""));
    dispatch(setCompanyContainer(""));
    dispatch(setFilteredOffers(data.filteredOffersContainer));
    dispatch(setTopics(data.topicsContainer));
  };

  useEffect(() => {});

  return (
    <div className="Filters">
      <DropdownFilter type="name" />
      <DropdownFilter type="company" />
      <Chips />
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
