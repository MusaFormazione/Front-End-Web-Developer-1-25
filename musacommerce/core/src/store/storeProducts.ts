import { configureStore } from '@reduxjs/toolkit'
import reducerProducts from './sliceProducts'

const store = configureStore({
  reducer: {
    reducerProducts
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
