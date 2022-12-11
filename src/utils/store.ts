import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'name',
  initialState: {},
  reducers: {}
});

export const store = configureStore({
  reducer: {
    reducer: slice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
