import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import ThingsToDo from "./pages/ThingsToDo";
import React from "react";
import Card from "./pages/Card";
import Switcher from "./utils/Switcher";
import WhereToGo from "./pages/WhereToGo";

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function App() {
    return (
        <BrowserRouter className=" transition duration-200 dark:bg-gray-900 p-10">


            <Routes >
                    <Route path="/"  element={<Home />} />
                    <Route path="/restaurants" element={<Restaurants/>} />
                 <Route path="/where-to-go" element={<WhereToGo/>} />
                    <Route path="/things-to-do" element={<ThingsToDo/>} />

            </Routes>

            <div className="fixed bottom-8 right-8 flex items-center space-x-2">
                <Switcher/>
                <button className="w-12 h-12 rounded-full text-lg flex items-center justify-center bg-green-500 text-white hover:bg-green-600 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={scrollToTop}>
                    ↑
                </button>

            </div>




        </BrowserRouter>
    );
}

export default App;
