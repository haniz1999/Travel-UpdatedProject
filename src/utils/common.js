export async function getCoordsByCity(city){
    const url = "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address="+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0322cc479amshf2237675d6bf417p16980ejsn734280e9919d',
            'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
    };

    try {
        const locations = []
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        console.log(result.Results);
        const allresults = result.Results
        const israeliLocations = allresults.filter(location => location.country === 'Israel');
        const coordinates = israeliLocations.map(location => ({
            longitude: location.longitude,
            latitude: location.latitude
        }));
        console.log(coordinates)

        return coordinates[0]
    } catch (error) {
        console.error(error);
    }
}