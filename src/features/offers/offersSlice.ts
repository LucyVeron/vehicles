import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

export interface Topic {
  name: string;
  selected: boolean;
}

export interface OffersState {
  offers: any[];
  offersContainer: any[];
  filteredOffers: any[];
  filteredOffersContainer: any[];
  offer: any;
  name: string;
  nameContainer: string;
  company: string;
  companyContainer: string;
  topics: Topic[];
  topicsContainer: Topic[];
  filteredTopics: string[];
  filteredTopicsContainer: string[];
  noResult: boolean;
}

const initialState: OffersState = {
  offers: [],
  offersContainer: [],
  filteredOffers: [],
  filteredOffersContainer: [],
  offer: null,
  name: "",
  nameContainer: "",
  company: "",
  companyContainer: "",
  topics: [],
  topicsContainer: [],
  filteredTopics: [],
  filteredTopicsContainer: [],
  noResult: false
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
    setOffer: (state, action) => {
      state.offer = action.payload;
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
    setTopics: (state, action) => {
      state.topics = action.payload;
    },
    setTopicsContainer: (state, action) => {
      state.topicsContainer = action.payload;
    },
    setFilteredTopics: (state, action) => {
      state.filteredTopics = action.payload;
    },
    setFilteredTopicsContainer: (state, action) => {
      state.filteredTopicsContainer = action.payload;
    },
    setNoResult: (state, action) => {
      state.noResult = action.payload;
    }
  },
});

export const getOffersAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getOffers(response.data));

    let allTopics: any[] = [];
    response.data.map((data: any) => {
      data.company.bs.split(" ").map((topic: any) => {
        allTopics.push(topic);
      });
    });

    let uniqueTopics: any[] = [];
    [...new Set(allTopics)].map((topic: any) => {
      uniqueTopics.push({ name: topic, selected: false });
    });

    dispatch(setTopics(uniqueTopics));
    dispatch(setTopicsContainer(uniqueTopics));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getOfferById = (id: number) => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    const offer = response.data.filter((offer: any) => offer.id === id);
    dispatch(setOffer(offer[0]));
  }
  catch (err: any) {
    throw new Error(err);
  }
};

export const {
  getOffers,
  setFilteredOffers,
  setOffer,
  setName,
  setCompany,
  setNameContainer,
  setCompanyContainer,
  setTopics,
  setFilteredTopics,
  setTopicsContainer,
  setFilteredTopicsContainer,
  setNoResult
} = offersSlice.actions;
export const showOffers = (state: any) => state.offers;

export default offersSlice.reducer;
