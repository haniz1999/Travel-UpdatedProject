import React from 'react';

const RestaurantList = ({ loading, buttonClicked, data }) => {
    console.log("RestaurantList",loading, buttonClicked, data )
    return (
        <div id="restaurantsContainer">
            {loading ? <span className="loader"></span> : ""}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg shadow-2xl dark:bg-gray-800">
                {buttonClicked && (
                    data.map((restaurant, index) => (
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 dark:bg-gray-700   dark:text-gray-200" key={index}>
                            <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>

                            <img src={restaurant.photo && restaurant.photo.images && restaurant.photo.images.small ? restaurant.photo.images.small.url : 'images/default.jpg'} alt={restaurant.name} className="w-full h-48 object-cover rounded-lg mb-4" />

                            <p className=" mb-4">About:<br />{restaurant.description}</p>

                            <p className=" mb-2">Opening Hours: {restaurant.openingHours}</p>
                            <p className=" mb-4">

                                Number of reviews: {restaurant.num_reviews}<br />
                                Rating: {restaurant.rating}<br />
                                Read more on  <a href={restaurant.web_url} target="_blank" rel="noopener noreferrer"><strong>TripAdvisor</strong></a>
                            </p>
                            <div className="flex items-center space-x-4">
                                <a href={restaurant.facebookUrl} className="text-blue-500 hover:text-blue-700">
                                    <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6" />
                                </a>
                                <a href={restaurant.wazeUrl} className="text-blue-500 hover:text-blue-700">
                                    <img src="/images/waze.png" alt="Waze" className="h-6 w-6" />
                                </a>
                                <a href={`tel:${restaurant.phoneNumber}`} className="text-blue-500 hover:text-blue-700">
                                    <img src="/images/phone-call.png" alt="Phone" className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RestaurantList;
