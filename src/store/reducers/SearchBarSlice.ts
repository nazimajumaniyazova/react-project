import { createSlice } from '@reduxjs/toolkit';
interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};
export const SearchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
export const { increment } = SearchBarSlice.actions;
export default SearchBarSlice.reducer;
