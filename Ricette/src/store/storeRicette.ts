import { configureStore } from '@reduxjs/toolkit'
import ricette from './sliceRicette'

const store = configureStore({
  reducer: {
    ricette
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
