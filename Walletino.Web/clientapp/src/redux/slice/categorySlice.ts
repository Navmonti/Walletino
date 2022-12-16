import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../../interfaces/category'
import { sliceNames } from '../../constants/file'

const initialState: ICategory = {
    categoryId: 0,
    title: 'category'
}

export const categorySlice = createSlice({
    name: sliceNames.category,
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<any>) => {
            state.categoryId = action.payload.categoryId,
            state.title = action.payload.title
        },
        editCategory: (state, action: PayloadAction<any>) => {
            state.categoryId = action.payload.categoryId,
            state.title = action.payload.title
        },
        deleteCategory: (state, action: PayloadAction<any>) => {
            state.categoryId = action.payload.categoryId,
            state.title = action.payload.title
        }
    },
    extraReducers: {

    }
}) 

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer