import React, { useState, useEffect } from 'react';
import RestaurantList from "../comps/RestaurantList";
import {getRestaurants} from "../pages/Restaurants";

const LocationHandler = ({title, ListComponent, getFunction}) => {
    const [listData, setList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false)
    const [loading, setLoading ] = useState(false)
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setErrorMessage("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = async (position) => {
        try {
            setLoading(true)
            setButtonClicked(true)
            const { latitude, longitude } = position.coords;
            const result = await getFunction(latitude, longitude);
            setLoading(false)
            setList(result);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setErrorMessage("An error occurred while fetching restaurant data. Please try again later.");
        }
    };

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setErrorMessage("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setErrorMessage("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setErrorMessage("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                setErrorMessage("An unknown error occurred.");
                break;
            default:
                setErrorMessage("An error occurred.");
                break;
        }
    };



    return (
        <div className={"grid cols-2 justify-center align-middle justify-items-center gap-2"}>
            <button onClick={getLocation} className="py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                {title}
            </button>
            {errorMessage && <p>{errorMessage}</p>}
            {ListComponent && <ListComponent loading={loading} buttonClicked={buttonClicked} data={listData} />}


        </div>
    );

};

export default LocationHandler;
