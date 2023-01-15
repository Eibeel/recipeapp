import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { saveRecipes } from "./recipeSlice"
import { RootState } from "./store"

export const setRecipes = (data = []): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispacth) => {

        dispacth(saveRecipes({
            data
        }))

    }

}