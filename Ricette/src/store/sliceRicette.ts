import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Recipe {
  id: string,
  name: string,
  ingredients: string[],
  instructions: string[],
  prepTimeMinutes: number,
  cookTimeMinutes: number,
  servings: number,
  difficulty: string,
  cuisine: string,
  caloriesPerServing: number,
  tags: string[],
  userId: number,
  image: string,
  rating: number,
  reviewCount: number,
  mealType: string[]
}

export const fetchRecipe = createAsyncThunk(
  'recipe/retrive', // azione base
  async () => {
    const response = await fetch('https://dummyjson.com/recipe')
    if (!response.ok) {
      return "Errore"
    }
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'recipe',
  initialState: {
    recipe: [] as Recipe[],
    loading: false,
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false
        state.quote = action.payload
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Errore sconosciuto'
      })
  }
})
