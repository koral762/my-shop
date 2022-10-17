import { getFilteredBags } from "../store/itemsReducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BagFilter = () => {

    const sortBy = ['All', 'Price Low to High', 'Price High to Low'];
    const filter = ['All', 'Koko', 'Monaco'];

    const [selectedFilter, setSelectedFilter] = useState('All');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilteredBags(selectedFilter))
    }, [selectedFilter])

    return (
        <div className="filter-nav">
            <label for="sortBags">sort:</label>
            <select name="sortBags" id="sortBags">
                {sortBy.map(sortBy => <option value={sortBy}>{sortBy}</option>)}
            </select>

            <label for="filterBags">filter:</label>
            <select name="filterBags" id="filterBags" onChange={(e) => { setSelectedFilter(e.target.value) }} >
                {filter.map(filter => <option value={filter} >{filter} </option>)}
            </select>

            <label for="search">Search:</label>
            <input type="search" id="search" name="search" placeholder="Search" autocomplete="off" />
        </div>)
}