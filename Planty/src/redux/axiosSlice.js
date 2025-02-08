import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipes: []
    },  
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload
        })
    },
})

export const fetchRecipes = createAsyncThunk('fetchRecipes',async () => {
    const response = await 
    axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=408814722ef44110b32ac948f30d3c14&diet=vegetarian&number=100')
    return response.data.results
    }
)




export default recipeSlice.reducer