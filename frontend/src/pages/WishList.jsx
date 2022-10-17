import React from 'react'
import { useSelector } from 'react-redux';
import { BagList } from '../cmps/BagList';

export const WishList = () => {

    const bags = useSelector(state => state.items.items);

    return (
        <div className="App">
            <h1>Your wishList</h1>
            {bags && <BagList bags={bags.filter(bag => bag.wishList)} />}
        </div>
    );
}