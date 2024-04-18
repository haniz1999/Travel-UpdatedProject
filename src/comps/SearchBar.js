import React, { useState } from 'react';
import {getCoordsByCity} from "../utils/common";
import RestaurantList from "./RestaurantList";

const SearchBar = ({ onSearch}) => {
    const [city, setCity] = useState('');

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {

        onSearch(city);

    };


    return (
        <div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-400">Prefer to search by city or neighborhood? Use the search bar below to discover dining options in your desired area.</p>

            <input
                type="text"
                id="cityInput"
                placeholder="Enter a city"
                value={city}
                onChange={handleInputChange}
                className="px-4 py-2 w-64 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
                id="searchButton"
                onClick={handleSearch}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
                Search
            </button>

        </div>
    );
};

export default SearchBar;
