import React from 'react';

function AttractionsDisplay({ loading,data }) {

        return (
            <>
                {loading ? <span className="loader"></span> : ""}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data && Array.isArray(data) ? (
                    data.map(attraction => (
                        <div key={attraction.name} className="bg-white rounded-lg shadow-lg p-6 mb-4 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">{attraction.name}</h3>
                            <img src={attraction.photo?.images?.large?.url} alt={attraction.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <p className=" mb-4">

                                Number of reviews: {attraction.num_reviews}<br />
                                Rating: {attraction.rating}<br />
                                Read more on  <a href={attraction.web_url} target="_blank" rel="noopener noreferrer"><strong>TripAdvisor</strong></a>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Error: Data is undefined or not an array</p>
                )}
            </div>
            </>
        );
}

export default AttractionsDisplay;
