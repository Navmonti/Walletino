import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from '../reducer/ItemReducer'

const store = configureStore({ reducer: ItemReducer })
console.log(store.getState())

export default store;