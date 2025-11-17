import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Products }  from '../domain/Product.type.ts'

export const fetchProducts = createAsyncThunk(
  'products/retrive', // azione base
  async () => {
    const response = await fetch('https://dummyjson.com/products?limit=8&skip=0')
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'sliceProducts',
  initialState: {
    stateProducts: {} as Products,
    loading: false,
    done: false,
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
        state.done = false
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.stateProducts = action.payload
        state.done = true
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.done = false
        state.error = action.error.message || 'Errore sconosciuto'
      })
  }
})

export default slice.reducer
