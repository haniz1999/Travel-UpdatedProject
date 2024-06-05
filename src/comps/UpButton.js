import React from 'react';
import {Link} from "react-router-dom";

const UpButton = () => {
    return (
        <button onClick="scrollToTop()" className="fixed bottom-8 right-8 w-12 h-12 rounded-full text-lg flex items-center justify-center bg-green-500 text-white hover:bg-green-600 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                ↑
            </button>

    );
};

export default UpButton;