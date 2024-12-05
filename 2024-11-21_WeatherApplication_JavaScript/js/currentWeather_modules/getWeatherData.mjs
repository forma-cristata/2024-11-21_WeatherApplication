export {getWeatherData};
async function getWeatherData(url) {
    // You generally want to put fetch calls in a try catch in case of network errors
let weatherResults = "";
while(!weatherResults) {
    try {
        weatherResults = await fetch(url);
        if (!weatherResults.ok) {
            throw new Error(weatherResults.statusText)
        }

        return await weatherResults.json();
    } catch (e) {
        console.error(e);
    }
}
}





