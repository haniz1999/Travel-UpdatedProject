import React from 'react';
import {Link} from "react-router-dom";
	{/* This is the header for each page, we can see the image in the top of the page*/}
const Header = () => {
    return (
        <header>

                <img src="/images/header.png" alt="Header Image" className="w-full"/>
            </header>
    );
};

export default Header;