import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import offersReducer from './offersSlice';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
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
