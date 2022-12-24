import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../../interfaces/category'
import { sliceNames } from '../../constants/file'
import { categoryService } from '../../services'

const initialState: ICategory = {
    categoryId: 0,
    title: 'category',
    isLoading: false,
    isDisable: false,
    isSuccessful: false,
    succeessfulMessage: '',
    isError: false,
    errorMessage: ''
}

export const addCategoryAsync = createAsyncThunk('category/add',async (data: ICategory, { rejectWithValue }) => {
    try {
        var response = categoryService.add(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
    
})

export const editCategoryAsync = createAsyncThunk('category/edit',async (data: ICategory, { rejectWithValue }) => {
    try {
        var response = categoryService.edit(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const deleteCategoryAsync = createAsyncThunk('category/remove', async (categoryId: number, { rejectWithValue }) => {
    try {
        var response = categoryService.remove(categoryId);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const categorySlice = createSlice({
    name: sliceNames.category,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCategoryAsync.pending, (state: ICategory, { payload }) => {
            
        });
        builder.addCase(addCategoryAsync.fulfilled, (state: ICategory, { payload }) => {

        });
        builder.addCase(addCategoryAsync.rejected, (state: any, { payload }) => {

        }); 
        builder.addCase(editCategoryAsync.pending, (state: ICategory, { payload }) => {

        });
        builder.addCase(editCategoryAsync.fulfilled, (state: ICategory, { payload }) => {

        });
        builder.addCase(editCategoryAsync.rejected, (state: any, { payload }) => {

        }); 
        builder.addCase(deleteCategoryAsync.pending, (state: ICategory, { payload }) => {

        });
        builder.addCase(deleteCategoryAsync.fulfilled, (state: ICategory, { payload }) => {

        });
        builder.addCase(deleteCategoryAsync.rejected, (state: any, { payload }) => {

        });
    }
}) 

export default categorySlice.reducer