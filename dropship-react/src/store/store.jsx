import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/productsSlice'

const store = configureStore({
    reducer: {
        product:productsReducer
    }
})

export default store
