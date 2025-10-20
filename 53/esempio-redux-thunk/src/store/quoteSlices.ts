import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Quote {
  id: string,
  quote: string,
  author: string
}

export const fetchQuotes = createAsyncThunk(
  'quotes/recuperaCitazioni', // azione base
  async () => {
    const response = await fetch('https://dummyjson.com/quotes/random')
    if (!response.ok) {
      throw new Error("Errore nel recupero delle citazioni")
    }
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'quote',
  initialState: {
    quote: {} as Quote,
    loading: false,
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        if (action.payload) {
          state.quote = action.payload
        }
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false
        state.quote = {} as Quote
        state.error = action.error.message || 'Errore sconosciuto'
      })
  }
})

export default slice.reducer
