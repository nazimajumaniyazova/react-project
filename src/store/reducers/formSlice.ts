import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../../ts/interfaces/form.interface';
import { IFormState } from '../../ts/interfaces/form.interface';

const formInitialState: IFormState = {
  cards: [],
};
export const formSlice = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    addCard(state, action: PayloadAction<{ card: IFormData }>) {
      state.cards.push(action.payload.card);
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
