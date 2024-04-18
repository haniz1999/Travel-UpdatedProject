import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 ">
            <div className="flex justify-center">
            <div className="flex space-x-2 md:space-x-4  ">

                <Link to="/" className="text-sm md:text-lg font-medium text-gray-600 hover:text-green-500 py-2 md:py-4 px-1 md:px-2">HOME</Link>
                <Link to="/restaurants" className="text-sm md:text-lg font-medium text-gray-600 hover:text-green-500 py-2 md:py-4 px-1 md:px-2">RESTAURANTS</Link>
                <Link to="/where-to-go" className="text-sm md:text-lg font-medium text-gray-600 hover:text-green-500 py-2 md:py-4 px-1 md:px-2">WHERE TO GO</Link>
                <Link to="/things-to-do" className="text-sm md:text-lg font-medium text-gray-600 hover:text-green-500 py-2 md:py-4 px-1 md:px-2">THINGS TO DO</Link>

            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;