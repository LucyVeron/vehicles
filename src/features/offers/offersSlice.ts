import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

export interface OffersState {
  offers: any[];
  offersContainer: any[];
  filteredOffers: any[];
  filteredOffersContainer: any[];
  name: string;
  nameContainer: string;
  company: string;
  companyContainer: string;
}

const initialState: OffersState = {
  offers: [],
  offersContainer: [],
  filteredOffers: [],
  filteredOffersContainer: [],
  name: "",
  nameContainer: "",
  company: "",
  companyContainer: "",
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    getOffers: (state, action) => {
      state.offers = action.payload;
      state.offersContainer = action.payload;
      state.filteredOffers = action.payload;
      state.filteredOffersContainer = action.payload;
    },
    setFilteredOffers: (state, action) => {
      state.filteredOffers = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setNameContainer: (state, action) => {
      state.nameContainer = action.payload;
    },
    setCompanyContainer: (state, action) => {
      state.companyContainer = action.payload;
    },
  },
});

export const getOffersAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getOffers(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const {
  getOffers,
  setFilteredOffers,
  setName,
  setCompany,
  setNameContainer,
  setCompanyContainer,
} = offersSlice.actions;
export const showOffers = (state: any) => state.offers;

export default offersSlice.reducer;
