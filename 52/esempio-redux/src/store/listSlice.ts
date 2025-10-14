import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ListState {
  items: string[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',  // Il nome del dominio (usato nel tipo dell'azione: 'list/addItem')
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) { // PayloadAction specifica il tipo del payload
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) { //PayloadAction specifica il tipo del payload
      state.items.splice(action.payload, 1);
    },
    clearList(state) {
      state.items = [];
    },
  },
});

export const {addItem, removeItem, clearList} = listSlice.actions;

export default listSlice.reducer;
