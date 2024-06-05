import React from 'react';
import {Link} from "react-router-dom";

const Cites = () => {
    return (
                    <section className="container mx-auto py-8 px-4">
                <h2 className="text-3xl font-bold mb-4 text-center text-navy">Cities</h2>
                <nav className="flex flex-wrap justify-center sm:space-x-6 lg:space-x-8">
               
                    <a href="#haifa" className="city-link flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                        <i className="fas fa-city mr-2"></i>
                        Haifa
                    </a>
                  
                    <a href="#telaviv" className="city-link flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                        <i className="fas fa-city mr-2"></i>
                        Tel Aviv
                    </a>
                  
                    <a href="#qiryatshomna" className="city-link flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                        <i className="fas fa-city mr-2"></i>
                        Qiryat Shomna
                    </a>
                  
                    <a href="#eilat" className="city-link flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                        <i className="fas fa-city mr-2"></i>
                        Eilat
                    </a>
                
                    <a href="#jerusalem" className="city-link flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                        <i className="fas fa-city mr-2"></i>
                        Jerusalem
                    </a>
                </nav>
            </section>
    );
};

export default Cites;