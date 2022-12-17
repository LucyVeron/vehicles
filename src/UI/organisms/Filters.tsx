import { Button, ButtonGroup } from "@mui/material";
import {
  setCompany,
  setCompanyContainer,
  setFilteredOffers,
  setName,
  setNameContainer,
  setTopics,
  showOffers,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import "./Filters.scss";
import DropdownFilter from "../atoms/DropdownFilter";
import { useEffect } from "react";
import ChipFilter from "../atoms/ChipFilter";

function Filters() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();
  const applyFilters = () => {
    const filteredOffers = data.offers.filter(
      (offer: any) =>
        offer.company.name
          .toLowerCase()
          .includes(data.companyContainer.toLowerCase()) &&
        offer.name
          .toLowerCase()
          .includes(data.nameContainer.toLowerCase()) /*   &&
        offer.company.bs.split(" ").includes(data.filteredTopics.split(" ")) */
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
    dispatch(setTopics(data.topicsContainer));
  };

  useEffect(() => {
    /* console.error(data.filteredTopics);
    console.warn(data.offers[0]?.company.bs.split(" ")); */

    const matches = data.offers[0]?.company.bs
      .split(" ")
      .filter((element: any) => data.filteredTopics.includes(element))?.length;
    console.log(matches);
  });

  return (
    <div className="Filters">
      <DropdownFilter type="name" />
      <DropdownFilter type="company" />
      <ChipFilter />
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
