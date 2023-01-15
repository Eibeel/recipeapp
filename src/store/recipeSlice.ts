import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipe : []
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: initialState,
    reducers: {
        saveRecipes: (state, action) => {
            state.recipe = (action.payload.data)
        }
    }
})

export const { saveRecipes } = recipeSlice.actions;