import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";
const API_URL = "https://instamotion.free.beeceptor.com/offers";

export interface OffersState {
  offers: any[];
  offersContainer: any[];
  filteredOffers: any[];
  filteredOffersContainer: any[];
  name: string;
  company: string;
}

const initialState: OffersState = {
  offers: [],
  offersContainer: [],
  filteredOffers: [],
  filteredOffersContainer: [],
  name: "",
  company: "",
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
  },
});

export const getOffersAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${USERS_API_URL}`);
    dispatch(getOffers(response.data /* .records */));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const { getOffers, setFilteredOffers, setName, setCompany } =
  offersSlice.actions;
export const showOffers = (state: any) => state.offers;

export default offersSlice.reducer;
