import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";
const API_URL = "https://instamotion.free.beeceptor.com/offers";

export interface OffersState {
  offers: any[];
  offersContainer: any[];
}

const initialState: OffersState = {
  offers: [],
  offersContainer: [],
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    getOffers: (state, action) => {
      state.offers = action.payload;
      state.offersContainer = action.payload;
    },
    filteredOffers: (state, action) => {
      state.offers = state.offersContainer.filter((user) =>
        user.name.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const getOffersAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${USERS_API_URL}`);
    dispatch(getOffers(response.data/* .records */));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const { getOffers, filteredOffers } = offersSlice.actions;
export const showOffers = (state: any) => state.offers;

export default offersSlice.reducer;
