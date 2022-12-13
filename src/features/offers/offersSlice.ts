import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://instamotion.free.beeceptor.com/offers";

export interface OffersState {
  offers: any[];
}

const initialState: OffersState = {
  offers: [],
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    getOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});

export const getOffersAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getOffers(response.data));
    console.log(response.data);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const {
  getOffers,
} = offersSlice.actions;

export const showOffers = (state: any) => state.offers;

export default offersSlice.reducer;
