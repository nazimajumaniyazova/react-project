import { createSlice } from '@reduxjs/toolkit';
import { Idata } from '../../pages/FormPage/FormPage';
interface formState {
  name: string;
  date: string;
  country: string;
  status: string;
  genres: Array<string>;
  image: string;
}
const formInitialState: formState = {
  name: '',
  date: '',
  country: '',
  status: '',
  genres: [''],
  image: '',
};
export const formSlice = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    increment: (state: Idata) => {
      console.log(state.name);
      return state;
    },
  },
});

export const { increment } = formSlice.actions;
export default formSlice.reducer;
