import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
