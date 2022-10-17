import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';
import { storageService } from "../services/storageService";


export const itemsReducer = createSlice({

    name: 'items',
    initialState: {
        items: [],
        itemsToDisplay: [],
        itemsFilter: 'All',
        shoppingCart: [],
    },
    reducers: {

        getBags: (state) => {

            var items = storageService.loadFromStorage('BAGS');

            if (!items) {

                items = require('../data/bags.json');
                storageService.saveToStorage('BAGS', state.items);
            }

            state.items = items;
            state.itemsToDisplay = (state.itemsFilter !== 'All') ? items.filter(item => item.bagName === state.itemsFilter) : items;
        },

        getFilteredBags: (state, action) => {

            state.itemsFilter = action.payload;
        },

        saveToFavorites: (state, action) => {
            console.log('yayyy')
            const index = state.items.findIndex(item => item._id === action.payload);
            console.log(current(state))
            const isWish = state.items[index].wishList;

            state.items[index].wishList = !isWish;
            state.itemsToDisplay = (state.itemsFilter !== 'All') ? state.items.filter(item => item.bagName === state.itemsFilter) : state.items;

            storageService.saveToStorage('BAGS', state.items);
        },

        saveToShoppingCart: (state, action) => { },
    },
})

export const { getBags, saveToFavorites, saveToShoppingCart, getWishlist, getFilteredBags } = itemsReducer.actions;

export default itemsReducer.reducer;
