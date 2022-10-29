import { getFilteredBags } from "../store/itemsReducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BagFilter = () => {

    const sortBy = ['SORT','All', 'Price Low to High', 'Price High to Low'];
    const filter = ['FILTER','All', 'Koko', 'Monaco'];

    const [selectedFilter, setSelectedFilter] = useState('All');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilteredBags(selectedFilter))
    }, [selectedFilter])

    return (
        <div className="filter-nav">
            <select className="filter-nav-child" name="sortBags" id="sortBags">
                {sortBy.map(sortBy => <option value={sortBy}>{sortBy}</option>)}
            </select>

            <select className="filter-nav-child" name="filterBags" id="filterBags" onChange={(e) => { setSelectedFilter(e.target.value) }} >
                {filter.map(filter => <option value={filter} >{filter} </option>)}
            </select>
            
        </div>)
}