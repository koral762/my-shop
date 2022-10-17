import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsReducer';


export const store = configureStore({
    reducer: {
        items: itemsReducer,
    }
})