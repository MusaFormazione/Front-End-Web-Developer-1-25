import { configureStore } from '@reduxjs/toolkit'
import quotes from './quoteSlices'

const store = configureStore({
  reducer: {
    quotes
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
