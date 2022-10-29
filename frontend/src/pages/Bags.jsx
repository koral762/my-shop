import React, { useEffect } from 'react'
import { BagFilter } from '../cmps/BagFilter';
import { BagList } from '../cmps/BagList';
import { useDispatch, useSelector } from 'react-redux';
import { getBags } from "../store/itemsReducer";


export const Bags = () => {

    const dispatch = useDispatch();
    const bagsFilter = useSelector(state => state.items.itemsFilter);
    const bags = useSelector(state => state.items.itemsToDisplay);



    useEffect(() => {
        dispatch(getBags());
    }, [bagsFilter])


    return (
        <div className="App">
            <h1 className="products">PRODUCTS</h1>
            <BagFilter />
            <BagList bags={bags} />
        </div>
    );
}