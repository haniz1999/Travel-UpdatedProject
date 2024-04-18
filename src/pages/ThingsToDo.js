import React, {useState} from 'react';
import Navbar from "../comps/navbar";
import LocationHandler from "../utils/locationHandler";
import AttractionsDisplay from "../comps/AttractionsListDisplay";
import {getCoordsByCity} from "../utils/common";
import SearchBar from "../comps/SearchBar";
import RestaurantList from "../comps/RestaurantList";


const ThingsToDo = () => {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(false)



    async function getAttractions(latitude, longitude) {
        const url = `https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?latitude=${latitude}&longitude=${longitude}&lunit=km&currency=USD&lang=en_US`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0322cc479amshf2237675d6bf417p16980ejsn734280e9919d',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result.data;
            // Process the result here
        } catch (error) {
            console.error('Error fetching attractions:', error);
        }
    }


    async function searchByName() {
        const cityName = document.getElementById('cityInput').value.trim();
        const result = await getCoordsByCity(cityName)
        const {longitude,latitude}= result
        console.log("searchRestaurants",result)
        setAttractions(await getAttractions(latitude, longitude)); // Example coordinates for Haifa


        // Implement actual geocoding service here
    }







    return (
        <>
            <body className="bg-gray-100  text-gray-700 dark:bg-gray-800   dark:text-gray-200">

            
            <header>
                <img src="/images/header.png" alt="Header Image" className="w-full"/>
            </header>

                        <Navbar/>

            <div className="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800">
                <div className="text-center mt-8">
                    <h1 className="text-4xl font-bold ">Explore Nearby Places</h1>
                </div>
                <br/>
                    <p className=" mb-5 text-xl">Click the button below to automatically find your current location. This feature helps you discover nearby places to visit, making it easier to explore your surroundings without the need for manual searches.</p>


                <LocationHandler title={"Show Nearby Attractions"} ListComponent={AttractionsDisplay} getFunction={getAttractions} />
                    <p id="location" className="mt-4 "></p>
                <SearchBar onSearch={searchByName}/>
                {attractions.length > 0 ?
                    <AttractionsDisplay data={attractions} />
                    : ""}


            </div>
            <br/>








                                <section className="container mx-auto py-8 px-4 ">
                    <p className="text-2xl  mb-4 text-center">Explore Top Cities in Israel and Their Must-See Attractions</p>
                    <nav className="flex flex-wrap justify-center sm:space-x-6 lg:space-x-8 dark:text-black">
                                                <a href="#haifa" className="city-link flex items-center justify-center bg-gray-200  px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                            <i className="fas fa-city mr-2"></i>
                            Haifa
                        </a>
                                                <a href="#telaviv" className="city-link flex items-center justify-center bg-gray-200  px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                            <i className="fas fa-city mr-2"></i>
                            Tel Aviv
                        </a>
                                                <a href="#qiryatshomna" className="city-link flex items-center justify-center bg-gray-200  px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                            <i className="fas fa-city mr-2"></i>
                            Qiryat Shomna
                        </a>
                                                <a href="#eilat" className="city-link flex items-center justify-center bg-gray-200  px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                            <i className="fas fa-city mr-2"></i>
                            Eilat
                        </a>
                                                <a href="#jerusalem" className="city-link flex items-center justify-center bg-gray-200  px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-500 hover:text-white mb-4 sm:mb-0">
                            <i className="fas fa-city mr-2"></i>
                            Jerusalem
                        </a>
                    </nav>
                </section>



                <button onClick="scrollToTop()" className="fixed bottom-8 right-8 w-12 h-12 rounded-full text-lg flex items-center justify-center bg-green-500 text-white hover:bg-green-600 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    ↑
                </button>






                                <section className="container mx-auto py-8 px-4">
                                        <div id="haifa" className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-center">Haifa</h3>
                        <h4 className="text-xl font-semibold">Key Attractions:</h4>
                        <p>Visit the stunning Baha'i Gardens, explore the German Colony, and enjoy panoramic views from Mount Carmel.</p>                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Hai Park - Kiryat Motzkin</h3>

                                <img src="/images/parkhai.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">
                                        Having fun all year round at Chai Park, a perfect experience for the whole family<br/>
                                        An excellent opportunity to get to know together with the whole family the magical world of giant creatures that comes to life in the beautiful zoo in Israel - Chai Park Motzkin. A unique exhibition that blends perfectly with the amazing attractions in the park.
                                    </p>
                                    <p className=" mb-2">Hai Park - Kiryat Motzkin opening hours<br/>
                                        Summer (summer time):<br/>
                                        - Sunday-Thursday on Saturday and holiday 09:00-17:00<br/>
                                        - Friday and holiday evenings 09:00-15:00<br/>
                                        Winter (winter time):<br/>
                                        - Sunday-Thursday, Saturday and holiday 09:00 00-16:00<br/>
                                        - Friday and holiday evenings 09:00-14:00<br/>
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">HAIFA CABLE CARS</h3>

                                <img src="/images/cable.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">
                                        The Haifa Cable Cars, located at the tip of Haifa that juts out into the Mediterranean, are fabulous both as a quick method of transportation and as a tourist attraction. Climbing up from beside the Bat Galim Promenade all the way up to Stella Maris, the top of the Carmel ridge, the Haifa cable cars provide a view of Haifa and the bay that must be seen.</p>


                                    <p className=" mb-2">Opening Hours:<br/>
                                        Summer: 9am-8pm<br/>
                                        Winter: 10am-6pm<br/>
                                    </p><br/><br/>
                                    <br/><br/><br/><br/>
                                        <div className="flex items-center space-x-4">
                                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                                <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                            </a>
                                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                                <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                            </a>
                                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                                <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                            </a>
                                        </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Ninja City - a ninja complex for children</h3>

                                <img src="/images/ninja.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">Come be like real ninjas, in our perfect arena with a variety of challenging and fun facilities
                                        The ninja madness continues right here in Ninja City - here you will find the most extreme and fun experience with everything that the ninja world brings!

                                        Ninja City is a unique complex of its kind in Israel that covers an area of 700 square meters so that your children can enjoy as much space as possible and insanely hot extreme facilities.
                                        If your children act like ninjas let them do it in the most perfect complex in the north for this purpose, where they can Climb, jump, run and release adrenaline.
                                    </p>

                                    <p className=" mb-2">Opening Hours:<br/>Sunday - Thursday: 10:00-21:00<br/>
                                        Friday: 10:00-18:00<br/>
                                        Saturday: 10:00-21:00<br/>
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>

                        </div>
                    </div>
                                        <div id="telaviv" className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-center">Tel Aviv</h3>
                        <h4 className="text-xl font-semibold">Key Attractions:</h4>
                        <p>Enjoy the bustling city life, beautiful beaches, and the historic Jaffa district.</p>                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">CINEMAX 360 - life in the movie</h3>

                                <img src="/images/CINEMAX.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">The experience is called: "Cinemax 360" - all the senses work! Active chairs that will move you in full synchronization and in full accordance with what is happening on the screen, wind and gentle splashes of water will refresh your face, and you will not stop laughing, getting excited, enjoying and being surprised!
                                        The expression "living in a movie" becomes real together with the feeling that you are in the movie.
                                        The movies at CIMEMAX 360 are projected on a 360-degree screen with unique DOME technology for the first time in Israel, like at Universal Studio in the USA!
                                        There you will find 16 active seats (4 rows each with 4 seats) so you can enjoy the movie as much as possible.
                                    </p>

                                    <p className=" mb-2">Opening Hours: 19:00 - 00:00</p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Amusement Park</h3>

                                <img src="/images/lonapark.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">Tel Aviv Amusement City Amusement Park awaits you with plenty of attractions and facilities for all ages

                                        Looking for a place where the whole family can have fun together? Or maybe you plan to hang out with friends from school/neighborhood during the vacation and want to find a suitable place for that? Whether your goal is to spend a few hours of fun and experience or take the pleasure to the extreme - Luna Park Tel Aviv is the perfect place for you!
                                    </p>
                                    <p className=" mb-2">Opening Hours: <br/>
                                        • The opening hours and activities of the amusement park vary depending on the weather, holidays and vacations, so it is recommended to be updated in advance on the activity hours on the park's website.
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">The park lake</h3>

                                <img src="/images/park2.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">The place is considered one of the largest urban parks in Israel and in the world and apart from nature where you can also meet a variety of water animals, poultry and birds.
                                        In the park you can enjoy the history of the place, magnificent archaeology, cultural and sports sites, hiking trails, manicured lawns, lots of shade and plenty of greenery.
                                    </p>
                                    <p className=" mb-2">Opening Hours: 9:00 AM - 10:00 PM</p>
                                    <br/><br/><br/><br/><br/><br/><br/><div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>



                                                                                </div>
                    </div>
                                        <div id="qiryatshomna" className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-center">Qiryat Shmona</h3>
                        <h4 className="text-xl font-semibold">Key Attractions:</h4>
                        <p>Discover the lush landscapes of the Hula Valley, enjoy outdoor adventures in the nearby nature reserves, and explore the historical sites.</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Amigos</h3>

                                <img src="/images/Amigos.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">About:<br/>
                                        Kosher Mehadrin restaurant, authentic atmosphere, rich terrace for a cup of coffee at the end of the meal Business for families, also large. Business for children, business for friends, business for couples. We specialize in over 20 years in a high quality meat section, also in wines! , Maintaining aesthetics, providing service from the heart. There are lots of different types of atmosphere.</p>
                                    <br/>
                                        <p className=" mb-2">Opening Hours: 9:00 AM - 10:00 PM</p>
                                        <div className="flex items-center space-x-4">
                                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                                <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                            </a>
                                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                                <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                            </a>
                                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                                <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                            </a>
                                        </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Maneki Neko</h3>

                                <img src="/images/BaguetteShlomi.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">About:<br/> Here you’ll find the best Shawarma, Falafel,Schnitzel in the north. Have it in a pita, roll or baguette... or why not take a break and have it on a plate.😃
                                    </p> <br/><br/><br/><br/><br/><br/>
                                    <p className=" mb-2">Opening Hours: 9:00 AM - 10:00 PM</p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Esterika</h3>

                                <img src="/images/Esterika.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">About:<br/> Boutique restaurant. Special bread sandwiches, salads and more...
                                    </p> <br/><br/><br/><br/><br/><br/><br/><br/>
                                    <p className=" mb-2">Opening Hours: 9:00 AM - 10:00 PM</p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>


                                                                                </div>
                    </div>
                                        <div id="eilat" className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-center">Eilat</h3>
                        <h4 className="text-xl font-semibold">Key Attractions:</h4>
                        <p>Experience world-className snorkeling and diving in the Red Sea, and enjoy the vibrant nightlife.</p>                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Atlantis extreme marine experience</h3>

                                <img src="/images/atlantes.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">Looking for a perfect attraction in the sea of Eilat?
                                        Get to know Atlantis, the place that allows you to enjoy three wonderful attractions in the Red Sea and all this with one super affordable ticket.
                                        <br/>Prices
                                            Detail and information about Atlantis extreme marine experience
                                            ticket price for the three attractions at a special price of NIS 115!
                                    </p>
                                    <p className=" mb-2">Opening Hours:<br/>
                                        Sunday: 08:00-19:00<br/>
                                        Monday: 08:00-19:00<br/>
                                        Tuesday: 08:00-19:00<br/>
                                        Wednesday: 08:00-19:00<br/>
                                        Thursday: 08:00-19:00<br/>
                                        Friday: 08:00 -17:00<br/>
                                        Saturday: 08:00-19:00
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Great Dave - perfect diving experience</h3>

                                <img src="/images/dive.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">All the information about Achla Dave - a perfect diving experience
                                        The end has come to your searches and walking around Eilat, Achla Dave is the hottest place to be
                                        for those who have always dreamed and for those who have already experienced and want a little more Achla Dave's diving club opens its doors and brings you to the world of water
                                    </p>
                                    <p className=" mb-2">Opening Hours:<br/>
                                        Sundays, Thursdays between the hours of 09:00-17:00<br/>
                                        Fridays between the hours of 09:00-17:00<br/>
                                        Saturdays between the hours of 09:00-17:00
                                    </p><br/><br/>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Kisoski Beach - Parachute for a crazy experience</h3>

                                <img src="/images/crazyparachute.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">About:<br/>All the information about Kisoski Beach - Parachute for a crazy experience
                                        To have fun in the Red Sea together with all the attractions of Kisouski Water Sports.<br/>
                                            we would like to invite you to one of the many attractions that the place offers:
                                            Paraglider - a single or double paraglider which is towed by a boat from which you will take off and land. An opportunity to soar 70 meters above sea level. Those who try this special experience will be able to enjoy the magical view of Eilat.

                                    </p>
                                    <p className=" mb-2">Opening Hours: Sunday - Thursday 9:00 AM - 10:00 PM</p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>


                                                                                </div>
                    </div>


                                        <div id="jerusalem" className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 text-center">Jerusalem</h3>
                        <h4 className="text-xl font-semibold">Key Attractions:</h4>
                        <p>Discover the ancient beauty of the Old City, the Western Wall, and the vibrant Mahane Yehuda Market.</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Experience world art inside the Israel Museum</h3>

                                <img src="/images/museum2.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">What will you find in the Israel Museum?
                                        In the Israel Museum you can see about half a million art objects from different cultures in the world. It is one of the largest museums in the Middle East and has collections in the fields of archaeology, ethnography, Judaica, Israeli art, art from different parts of the world and exhibitions that change from time to time. The museum has seven wings, some of which are closed and some are outside.
                                    </p>
                                    <p className=" mb-2">Israel Museum opening hours<br/>
                                        Sundays, Mondays, Wednesdays, Thursdays, hours: 10:00-17:00
                                        Tuesdays, hours: 16:00-21:00
                                        Fridays, hours: 14:00-10:00
                                        Saturdays, hours: 10:00 -17:00
                                    </p><br/><br/>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Rider Emek Hula hikers in the Jerusalem mountains</h3>

                                <img src="/images/rider2.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">We offer you:<br/>
                                        •	Couples trips<br/>
                                        •	family trips<br/>
                                        •	Excellent for small groups and productions in the heart of the magical mountains of Jerusalem<br/>
                                        We also offer a unique Easy Rider riding experience on new, short and long routes.<br/>
                                        We will arrive at : Beit Zeit Dam, the Steph, Beit Nakofa, Kiryat Inavim, Ma'ale Ha'Hamme (the trips are suitable for all ages)
                                    </p>
                                    <p className=" mb-2">
                                        Rider Emek Hula hikers in the Jerusalem mountains opening hours<br/>
                                        Sunday to Thursday, during the hours: 08:00-22:00<br/>
                                        Friday: 08:00 until the start of Shabbat<br/>
                                        Saturday: no work
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>
                                                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
                                <h3 className="text-lg font-semibold mb-2">Rockefeller Museum of Archaeology</h3>

                                <img src="/images/museum.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                    <p className=" mb-4">Come and get a glimpse of the beginning of the last century, with a variety of amazing and unique exhibits and objects waiting for you at the Rockefeller Museum of Archaeology.
                                        Most of the exhibits in the museum are discoveries made during archaeological excavations at the beginning of the 20th century, and reveal the history of man in Israel during the various periods.
                                    </p>
                                    <p className=" mb-2">Opening Hours:<br/>
                                        Sundays, Mondays, Wednesdays and Thursdays: 10:00-15:00<br/>
                                        Saturdays: 10:00-14:00<br/>
                                        Tuesdays, Fridays and holiday eves: closed<br/>
                                    </p><br/><br/><br/>
                                    <div className="flex items-center space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/waze.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                                                                        <img src="/images/phone-call.png" alt="Facebook" className="h-6 w-6"/>

                                        </a>
                                    </div>
                            </div>


                                                                                </div>
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
                                    <li><a href="/explore" className="hover:text-blue-400">Explore</a></li>
                                    <li><a href="/restaurants" className="hover:text-blue-400">Restaurants</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Where to Go</a></li>
                                    <li><a href="/thingstodo" className="hover:text-blue-400">Things to Do</a></li>
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
                                    <a href="#" className="hover:text-blue-400">Facebook</a>
                                    <a href="#" className="hover:text-blue-400">Instagram</a>
                                    <a href="#" className="hover:text-blue-400">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 text-center py-4">
                        <p>&copy; 2024 Travel Israel. All rights reserved.</p>
                    </div>
                </footer>
                                <script src="attracationscard.js"></script>

            </body>
        </>
    );
};

export default ThingsToDo;