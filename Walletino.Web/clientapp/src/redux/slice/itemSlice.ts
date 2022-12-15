import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 
import { IItem } from '../../interfaces/item'
import { sliceNames } from '../../constants/file'

const initialState: IItem = {
    itemId: 0,
    categoryId: 0,
    title: ''
}

export const itemSlice = createSlice({
    name: sliceNames.item,
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<any>) => {
            state.itemId = action.payload.itemId,
                state.categoryId = action.payload.categoryId,
                state.title = action.payload.title

        },
        editItem: (state, action: PayloadAction<any>) => {
            state.itemId = action.payload.itemId,
                state.categoryId = action.payload.categoryId,
                state.title = action.payload.title

        },
        deleteItem: (state, action: PayloadAction<any>) => {
            state.itemId = action.payload.itemId,
                state.categoryId = action.payload.categoryId,
                state.title = action.payload.title

        }
    },
    extraReducers: {

    }
}) 

export const { addItem, editItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer