import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IItem } from '../../interfaces/item'
import { sliceNames } from '../../constants/file'
import { itemService } from '../../services'

const initialState: IItem = {
    itemId: 0,
    categoryId: 0,
    title: '',
    isLoading: false,
    isDisable: false,
    isSuccessful: false,
    succeessfulMessage: '',
    isError: false,
    errorMessage: ''
}

export const addItemAsync = createAsyncThunk('item/add', async (data: IItem, { rejectWithValue }) => {
    try {
        var response = itemService.add(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }

})

export const editItemAsync = createAsyncThunk('item/edit', async (data: IItem, { rejectWithValue }) => {
    try {
        var response = itemService.edit(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const deleteItemAsync = createAsyncThunk('item/remove', async (itemId: number, { rejectWithValue }) => {
    try {
        var response = itemService.remove(itemId);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const itemSlice = createSlice({
    name: sliceNames.item,
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<any>) => {
            state.itemId = action.payload.itemId,
                state.title = action.payload.title
        },
        editItem: (state, action: PayloadAction<any>) => {
            state.itemId = action.payload.itemId,
                state.title = action.payload.title
        },
        deleteItem: (state, action: PayloadAction<any>) => {
            state.itemId = action.payload.itemId,
                state.title = action.payload.title
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addItemAsync.pending, (state: IItem, { payload }) => {

        });
        builder.addCase(addItemAsync.fulfilled, (state: IItem, { payload }) => {

        });
        builder.addCase(addItemAsync.rejected, (state: any, { payload }) => {

        });
        builder.addCase(editItemAsync.pending, (state: IItem, { payload }) => {

        });
        builder.addCase(editItemAsync.fulfilled, (state: IItem, { payload }) => {

        });
        builder.addCase(editItemAsync.rejected, (state: any, { payload }) => {

        });
        builder.addCase(deleteItemAsync.pending, (state: IItem, { payload }) => {

        });
        builder.addCase(deleteItemAsync.fulfilled, (state: IItem, { payload }) => {

        });
        builder.addCase(deleteItemAsync.rejected, (state: any, { payload }) => {

        });
    }
})

export const { addItem, editItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer