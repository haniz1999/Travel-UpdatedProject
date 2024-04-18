import React, {useEffect, useState} from 'react';
import Navbar from "../comps/navbar";
import LocationHandler from "../utils/locationHandler";
import {getCoordsByCity} from "../utils/common";
import SearchBar from "../comps/SearchBar";
import RestaurantList from "../comps/RestaurantList";


export const getRestaurants = async (lat, long) => {
    try {
        const response = await fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${long}&limit=10&currency=ils&distance=4&lunit=km&lang=en_US`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0322cc479amshf2237675d6bf417p16980ejsn734280e9919d',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}, text: ${await response.text()}`);
        }

        const data = await response.json();
        return data.data || [];
    } catch (error) {
        throw new Error(`Error fetching restaurant data: ${error}`);
    }
};




const Restaurants = () => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false)
    //here for search button input
    async function searchRestaurants() {
        const cityName = document.getElementById('cityInput').value.trim();
        const result = await getCoordsByCity(cityName)
        const {longitude,latitude}= result
        setLatitude(longitude)
        setLongitude(latitude)

        const restaurantsResult = await getRestaurants(latitude, longitude); // Example coordinates for Haifa
        setLoading(false)
        setRestaurants(restaurantsResult)

    }

    useEffect(() => {
        console.log("useeffect rests",restaurants)
    }, [restaurants]);

    return (

            <body className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">

         
            <header>
                <img src="/images/header.png" alt="Header Image" className="w-full"/>
            </header>


                       <Navbar/>



            <div className="bg-white p-6 rounded-md shadow-md text-center dark:bg-gray-800">
                <h1 className="text-4xl font-bold ">Discover Local Eateries</h1>
                <p className="mt-2 text-lg ">Find the best restaurants and food experiences near you.</p>
                <p className=" mb-5 text-xl">Let us help you find the perfect dining spot. Simply click the button below or search by city.</p>
              <LocationHandler title={"Find Eateries Near Me"} ListComponent={RestaurantList} getFunction={getRestaurants}/>
                <p id="location" className="mt-4 "></p>
                <SearchBar onSearch={searchRestaurants} setLoading={setLoading}/>
                {restaurants.length > 0 ?
                    <RestaurantList loading={loading} buttonClicked={true} restaurants={restaurants} />
                : ""}

            </div>



            <div id="restaurantsContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto">
           
            </div>







            <script src="https://maps.googleapis.com/maps/api/js?key=65d2942cbe3e8745956225aro865b60&libraries=places"></script>

        
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


            <section className="container mx-auto py-8 px-4 ">
              
                <div id="haifa" className="mb-8">

                    <h2  id="resturant" className="text-3xl font-bold mb-4 text-center">Haifa Restaurant</h2>
                   
                    <div  className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                       
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Ein Alwadi</h3>

                            <img src="/images/EinAlwadi.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/>  The restaurant serves authentic Lebanese food, which is suitable for those avoiding gluten and sugar, as well as for vegetarians and vegans. On the menu you can find makluba, stuffed, mishan, shishbarak, siniya, lamb mansaf and other special and interesting dishes in addition to salads and on the grill
                                </p>
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
                    
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Catering Jemy</h3>

                            <img src="/images/CateringJemy.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/>
                                    The most delicious Druze catering in Israel
                                    Food stalls in shopping malls, events all over the country.
                                    Vegetarian or meat menu and dessert...
                                    For orders and contact:
                                    0542347922
                                    048395408</p>
                                <br/><br/>
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
                     
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Hummus Bar</h3>

                            <img src="/images/hummus.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> A vegan restaurant that offers indulgent main dishes, impressive desserts and of course the innovative hummus dishes. Everything about the purity of the plant :) 100% vegan.</p>
                                <br/><br/><br/>
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
                     
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Hamam El Pasha</h3>

                            <img src="/images/hamam.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About: Food. Spirit. Culture</p>
                                </div><br/><br/><br/><br/><br/>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Savta</h3>

                            <img src="/images/savta.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> How can you say no to such a perfect sandwich?<br/>
                                    Real taste of grilled sausages with lamb bacon!<br/>
                                    So what are you waiting for?<br/>
                                    Send us a message for more details<br/>
                                    Home deliveries - Www.ilovesavta.com<br/>
                                    Address - 2 Zfaririm, Haifa</p>
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
            
                <div id="telaviv" className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-center dark:text-gray-200">Tel Aviv Restaurants</h2>
       
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Green roll</h3>

                            <img src="/images/greenroll.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> The first vegan sushi restaurant in Israel!!<br/>
                                    The sushi where even pregnant women eat without fear!!<br/>
                                    For deliveries:<br/>
                                    03-5245731<br/>
                                    Ahad Ha'am 15 Tel Aviv</p>
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
                 
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Maneki Neko</h3>

                            <img src="/images/maneki.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> When you feel like eating something delicious - come to us 😋<br/> Here you will find the most delicious sushi in Tel Aviv! Stir-fries, gyoza, fresh fish! Japanese salads, special combinations, Japanese desserts and more are waiting for you!<br/> 🛵 Deliveries throughout Tel Aviv.
                                </p>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Chikti</h3>

                            <img src="/images/Chikti.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Chikti, "small plates" in Italian, is a tribute to the neighborhood bars of Venice, to the happy moments that Italy knows how to create. The food menu of chef Michael Gratofsky is connected to the cocktails of Avi Kashi, who also hosts at the bar. Whether you assemble from Chikti...</p>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">M25</h3>

                            <img src="/images/M25.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Butcher Meatmarket, operating since 2013 in the meat alley in the Carmel market in Tel Aviv. The butcher made it his goal to use 100% fresh Israeli beef and lamb, which were born, raised and nurtured on leading farms in Israel.
                                    Chefs Yaron Kastenbaum and Jonathan Borovitch have created a new language in the M25 restaurant of connecting basic food with meat qualities using all parts of the beef (Nose To Tail).
                                </p>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Munnar Indian dhaba</h3>

                            <img src="/images/Munnar.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> South Indian vegetarian workers restaurant<br/>
                                    Munnar, South Indian Dhaba<br/>
                                    Vegetarian Indian Restaurant</p> <br/><br/><br/><br/> <br/><br/>
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

                <div id="qiryatshomna" className="mb-8  dark:text-gray-200">
                    <h2 className="text-3xl font-bold mb-4 text-center">Qiryat Shomna Restaurants</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   ">
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Fast Food Restaurant</h3>

                            <img src="/images/fastfood.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Grill bar and sandwich restaurant with the best grilled meats, skewers, daily cooked dishes, vegetarian dishes and mayo dishes.
                                </p>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Noga's Hummus</h3>

                            <img src="/images/NogaHummus.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Nega and Louise is not just the food, it's the whole atmosphere. Come and taste the hummus, the fresh baguettes, and our selection of salads...
                                </p>
                                <p className=" mb-2">Opening Hours: 9:00 AM - 10:00 PM</p>
                                <div className="flex items-center space-x-4"/>
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

                <div id="eilat" className="mb-8  dark:text-gray-200">
                    <h2 className="text-3xl font-bold mb-4 text-center">Eilat Restaurants</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Branja Cafe</h3>

                            <img src="/images/Branja.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> The best place in eilat for breakfast or brunch, lunch or dinner, coffee or beer, shake or a cocktail, business meeting or romantic date…it’s just perfect for you!
                                </p> <br/><br/>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Mamo</h3>

                            <img src="/images/Mamo.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> MAMO - Mediterranean by the Red sea.<br/>
                                    Modern Mediterranean cuisine, based on local ingredients served in small plates designed for sharing and celebration together.<br/>
                                    Happy atmosphere and the most delicious food there is.
                                </p>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200" >
                            <h3 className="text-lg font-semibold mb-2">Omers</h3>

                            <img src="/images/omers.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Cool chef sandwiches escorted by special side dishes and unique pans
                                </p> <br/><br/><br/><br/>
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
                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Pastory</h3>

                            <img src="/images/Pastory.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Pastori - a magical Italian courtyard and a bar in the center, offering a variety of meats and seafood with a Tuscan flavor. On the menu you will find selected seafood, fish and meats, a huge selection of first courses and of course pasta, produced on site with combinations and flavors from all over the world. You can also choose gluten-free pasta or wholemeal pasta. The homemade sauces are made on site according to unique Tuscan recipes and adapted to the various pastas according to the best Italian tradition.
                                </p>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Pizza Lek 1988</h3>

                            <img src="/images/Pizza.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Pizza Lek Eilat is a thriving pizzeria located in the center of Eilat for almost 30 years. At Pizza Lek you will enjoy a rich menu of salads and pastries that also include Sambusk and Ziva. And there are also desserts. Pizza Lek Eilat specializes in pizzas. The thin, crispy and delicious dough and the rich selection of toppings make Lek Pizza one of the favorite hangouts for young people and families. Pizza Lek provides a delivery service to the entire city, free of charge.</p>
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

                    </div>
                </div>



                <div id="jerusalem" className="mb-8 ">
                    <h2 className="text-3xl font-bold mb-4 text-center">Jerusalem Restaurants</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6    ">

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Deja Bu</h3>

                            <img src="/images/DejaBu.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> A Jerusalem restaurant bar with a pleasant pastoral atmosphere
                                </p> <br/><br/><br/><br/> <br/>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Hummus Eliyahoo</h3>

                            <img src="/images/HummusEliyahoo.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Forget the cold hummus you know from the stores and the neighborhood hummus, and prepare yourself for the experience of fresh and hot hummus that is ground the moment you order. At Hummus Eliyahu branches, the hummus dishes are served hot with various toppings of your choice alongside a Yemenite pita...
                                </p>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Jahnun Bar</h3>

                            <img src="/images/JahnunBar.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Traditional israeli Yemen Restaurant, fast food, vegetarian, vegan, breakfast, lunch, Malawach, Jachnun, fresh salads, authentic.
                                </p> <br/><br/><br/><br/>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">LAMOZZARELLA</h3>

                            <img src="/images/LAMOZZARELLA.jpeg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> LaMozzarella is a real Italian pizza. High-quality pizza, Italian tomatoes, mozzarella cheese and Tnuva Valley, and everything is fresh without compromise! A rich menu of handmade pastas, fresh salads and homemade pastries. Fast and professional delivery service<br/>
                                    Distribution areas: Gila Har Malcha Gila Katamoni Har
                                </p>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700   dark:text-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Sarwa Street Kitchen</h3>

                            <img src="/images/SarwaStreetKitchen.jpg" alt="Restaurant 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <p className=" mb-4">About:<br/> Sarwa Street Kitchen, Jerusalem's finest street food restaurant! Come to enjoy delicious and freshly
                                </p><br/><br/><br/><br/>
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
                      
                    </div>
                </div>
             
            </section>
           
           

            </body>

    );
};

export default Restaurants;