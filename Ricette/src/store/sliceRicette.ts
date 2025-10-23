import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RecipeList } from '../domain/recipe.type'

export const fetchRecipe = createAsyncThunk(
  'recipe/retrive', // azione base
  async () => {
    const response = await fetch('https://dummyjson.com/recipe?limit=8&skip=0')
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'recipe',
  initialState: {
    recipe: {} as RecipeList,
    loading: false,
    done: false,
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true
        state.error = null
        state.done = false
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false
        state.recipe = action.payload
        state.done = true
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false
        state.done = false
        state.error = action.error.message || 'Errore sconosciuto'
      })
  }
})

export default slice.reducer
