import {
  setCompany,
  setCompanyContainer,
  setName,
  setNameContainer,
  showOffers,
} from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import Label from "./Label";

function DropdownFilter(props: any) {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();

  const onFilter = (e: any) => {
    switch (props.type) {
      case "name":
        dispatch(setName(e.target.value));
        dispatch(setNameContainer(e.target.value));
        break;
      case "company":
        dispatch(setCompany(e.target.value));
        dispatch(setCompanyContainer(e.target.value));
        break;
      default:
        break;
    }
  };

  const getLabel = (offer: any) => {
    switch (props.type) {
      case "name":
        return offer.name;
      case "company":
        return offer.company.name;
      default:
        break;
    }
  };

  useEffect(() => {});

  return (
    <div>
      <FormControl fullWidth>
        <Label text={props.type} />
        <Select
          labelId="select-label"
          id="name-select"
          defaultValue=""
          value={
            props.type === "name" ? data.nameContainer : data.companyContainer
          }
          label="Search"
          onChange={(e) => onFilter(e)}
        >
          {data.filteredOffers.map((offer: any) => {
            return (
              <MenuItem key={offer.id} value={getLabel(offer)}>
                {getLabel(offer)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropdownFilter;
