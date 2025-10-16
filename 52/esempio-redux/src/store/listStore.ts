import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";

const store = configureStore({
  reducer: {
    lista: listReducer,
  },
});

// Tipizzazione dello Store per l'uso in useSelector e useDispatch (TS)
// RootState: il tipo dell'intero stato (es. { list: ListState })
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch: il tipo della funzione dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
