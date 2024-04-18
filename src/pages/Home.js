import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../comps/navbar";

const Home = () => {
    return (
            <div className="bg-gray-100 dark:bg-gray-800 transition duration-200">
            <header>

                <img src="/images/header.png" alt="Header Image" className="w-full"/>
            </header>

                        <Navbar/>





            <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-400 py-24 px-10 text-center">
                <div className="md:w-3/4 mx-auto">
                    <p className="font-bold text-sm uppercase">Explore Israel</p>
                    <p className="text-3xl font-bold 0">Discover the Beauty of Israel</p>
                    <p className="text-2xl mb-10 leading-none ">From historic Jerusalem to vibrant Tel Aviv, explore the unique landscapes and rich culture of Israel.</p>
                    <Link to="things-to-do" className="bg-green-500 py-4 px-8 text-lg font-bold rounded-full text-white">Start Your Journey</Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 text-center">
                <hr className="border-b-2 border-gray-300 mx-0 w-full"/>
            </div>



            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="relative group">
                        <Link to="home">
                            <img src="/images/popularplace.jpg" alt="Popular Places" className="w-full h-auto rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition duration-300">
                                    <h2 className="text-white font-semibold text-lg group-hover:text-xl">Popular Places</h2>
                                </div>
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link to="restaurants">
                            <img src="/images/restaurant15.png" alt="Restaurants" className="w-full h-auto rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition duration-300">
                                    <h2 className="text-white font-semibold text-lg group-hover:text-xl">Restaurants</h2>
                                </div>
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link to="where-to-do">
                            <img src="/images/image-import.jpg" alt="Things to Do" className="w-full h-auto rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition duration-300">
                                    <h2 className="text-white font-semibold text-lg group-hover:text-xl">Where to Go</h2>
                                </div>
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link to="things-to-do">
                            <img src="/images/thingstodo.jpg" alt="Where to Go" className="w-full h-auto rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition duration-300">
                                    <h2 className="text-white font-semibold text-lg group-hover:text-xl">Things to Do</h2>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>




            <br>
                </br>

                    <section className="container mx-auto py-8 px-4 dark:text-gray-400">
                        <h2 className="text-4xl font-bold mb-8 text-center">Top Experiences</h2>
                        <p className="text-2xl text-center mb-6">Discover the top experiences in Israel that will make your trip unforgettable.</p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div className="relative">
                                <img src="/images/deadsea.jpg" alt="Experience 1" className="w-full h-auto lg:h-48 object-cover rounded-lg shadow-lg"/>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                                        <p className="text-white text-lg font-semibold">Dead Sea</p>
                                    </div>
                            </div>

                            <div className="relative">
                                <img src="/images/masada.jpg" alt="Experience 2" className="w-full h-auto lg:h-48 object-cover rounded-lg shadow-lg"/>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                                        <p className="text-white text-lg font-semibold">Masada</p>
                                    </div>
                            </div>

                            <div className="relative">
                                <img src="/images/telavivbeach.jpg" alt="Experience 3" className="w-full h-auto lg:h-48 object-cover rounded-lg shadow-lg"/>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                                        <p className="text-white text-lg font-semibold">Tel Aviv Beaches</p>
                                    </div>
                            </div>
                            <div className="relative">
                                <img src="/images/oldcityjerusalem.jpg" alt="Experience 4" className="w-full h-auto lg:h-48 object-cover rounded-lg shadow-lg"/>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                                        <p className="text-white text-lg font-semibold">Old City of Jerusalem</p>
                                    </div>
                            </div>
                        </div>
                    </section>

                    <div className="container mx-auto px-4 py-8 text-center">
                        <hr className="border-b-2 border-gray-300 mx-0 w-full"/>
                    </div>


                    <section className="container mx-auto py-8 px-4 dark:text-gray-400 ">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-8 ">Practical Travel Advice</h2>
                            <p className="text-xl text-center max-w-3xl mx-auto mb-6">Whether you're a history enthusiast, a beach lover, or an adventure seeker, Israel has something for everyone. Here are some tips to make your journey unforgettable.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                                <div className="px-4">
                                    <h3 className="text-lg font-semibold mb-2">Best Time to Visit</h3>
                                    <p>Spring (April and May) and autumn (September and October) are ideal for comfortable weather and smaller crowds.</p>
                                </div>

                                <div className="px-4">
                                    <h3 className="text-lg font-semibold mb-2">Getting Around</h3>
                                    <p>Israel's efficient public transportation system makes it easy to explore. Consider renting a car for more remote destinations.</p>
                                </div>

                                <div className="px-4">
                                    <h3 className="text-lg font-semibold mb-2">Local Cuisine</h3>
                                    <p>Don't miss out on traditional Israeli dishes like hummus, shakshuka, and falafel. Each region has its own specialties.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container mx-auto px-4 py-8 text-center">
                        <hr className="border-b-2 border-gray-300 mx-0 w-full"/>
                    </div>

                    <section className="py-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                        <div className="container mx-auto px-4">
                            <h2 className="text-4xl font-bold mb-8 text-center">Israel's Cultural Experiences</h2>
                            <p className="text-xl text-center max-w-4xl mx-auto mb-6">Beyond its historic landmarks, Israel offers a tapestry of cultural experiences. From the bustling markets of Tel Aviv to the serene landscapes of the Galilee, every corner of Israel tells a story of diversity and coexistence.</p>
                            <div className="flex flex-wrap justify-center gap-8">

                                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="h-64 overflow-hidden rounded-lg shadow-md mb-4 flex items-center justify-center">
                                        <img src="/images/market.jpg" alt="Markets" className="min-w-full min-h-full object-cover"/>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Vibrant Markets</h3>
                                    <p>Explore local markets where traditions come alive, offering everything from handmade crafts to gourmet foods.</p>
                                </div>

                                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="h-64 overflow-hidden rounded-lg shadow-md mb-4 flex items-center justify-center">
                                        <img src="/images/festival.jpg" alt="Festivals" className="min-w-full min-h-full object-cover"/>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Festivals and Events</h3>
                                    <p>Participate in festivals that celebrate Israel's rich tapestry of cultures, music, and art throughout the year.</p>
                                </div>
                            </div>
                        </div>
                    </section>




                    <div className="container mx-auto px-4 py-8 text-center">
                        <hr className="border-b-2 border-gray-300 mx-0 w-full"/>
                    </div>


                    <section className="py-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-8">What Travelers Say</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                <div className="bg-white rounded-lg p-6 shadow">
                                    <p className="italic">"Visiting the Dead Sea was a surreal experience. Floating effortlessly made me feel completely at peace."</p>
                                    <p className="mt-4 text-right font-semibold">- Alex Smith</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow">
                                    <p className="italic">"The food tour in Jerusalem opened my eyes to the rich flavors of Israeli cuisine. Absolutely unforgettable!"</p>
                                    <p className="mt-4 text-right font-semibold">- Jamie Doe</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow">
                                    <p className="italic">"Exploring the ancient ruins of Masada at sunrise was an emotional and breathtaking moment I'll always cherish."</p>
                                    <p className="mt-4 text-right font-semibold">- Casey Jordan</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow">
                                    <p className="italic">"The vibrant street art in Tel Aviv is truly something to behold. It adds so much character to the city!"</p>
                                    <p className="mt-4 text-right font-semibold">- Morgan Lee</p>
                                </div>
                               
                                <div className="bg-white rounded-lg p-6 shadow">
                                    <p className="italic">"Hiking in the Golan Heights was an adventure of a lifetime. The panoramic views are unmatched."</p>
                                    <p className="mt-4 text-right font-semibold">- Taylor Kim</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow">
                                    <p className="italic">"Snorkeling in Eilat gave me a glimpse into the colorful underwater world of the Red Sea. It was mesmerizing!"</p>
                                    <p className="mt-4 text-right font-semibold">- Jordan Patel</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container mx-auto px-4 py-8 text-center">
                        <hr className="border-b-2 border-gray-300 mx-0 w-full"/>
                    </div>

                    <section className="py-12 bg-gray-800 text-white">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Trip</h2>
                            <p className="mb-6 max-w-md mx-auto">As your journey through our site comes to a close, let's start planning your real adventure in Israel. Tailor your visit to match your dreams, from historical tours to relaxation by the Dead Sea.</p>
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <Link to="custom-plans" className="bg-green-500 hover:bg-green-600 font-bold py-3 px-6 rounded-full transition duration-300">Create Your Trip</Link>
                                <Link to="contact" className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300">Contact Us</Link>
                            </div>
                            <p className="text-gray-400">Or explore further in the links below.</p>
                        </div>
                    </section>


                    <footer className="bg-gray-800 text-white">
                        <div className="container mx-auto px-4 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                                <div>
                                    <h2 className="font-bold text-lg mb-4">About Us</h2>
                                    <p>Discover the best of Israel with curated travel guides, tips, and insights.</p>
                                </div>

                                <div>
                                    <h2 className="font-bold text-lg mb-4">Quick Links</h2>
                                    <ul>
                                        <li><Link to="explore" className="hover:text-blue-400">Explore</Link></li>
                                        <li><Link to="restaurants" className="hover:text-blue-400">Restaurants</Link></li>
                                        <li><Link to="#" className="hover:text-blue-400">Where to Go</Link></li>
                                        <li><Link to="things-to-do" className="hover:text-blue-400">Things to Do</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="font-bold text-lg mb-4">Contact Us</h2>
                                    <p>Email: contact@example.com</p>
                                    <p>Phone: +972 123 4567</p>
                                </div>

                                <div>
                                    <h2 className="font-bold text-lg mb-4">Follow Us</h2>
                                    <div className="flex space-x-4">
                                        <Link to="#" className="hover:text-blue-400">Facebook</Link>
                                        <Link to="#" className="hover:text-blue-400">Instagram</Link>
                                        <Link to="#" className="hover:text-blue-400">Twitter</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 text-center py-4">
                            <p>&copy; 2024 Travel Israel. All rights reserved.</p>
                        </div>
                    </footer>

            </div>

    )

}


export default Home;