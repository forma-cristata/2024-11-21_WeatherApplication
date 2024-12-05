export {checkZipCode};
function checkZipCode(zip) {
// You generally want to put fetch calls in a try catch in case of network errors
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=93b3318b75630cf8585daa94c76458a7&units=imperial`;
let validZip = false;
let weatherResults = "";
for(let i = 0; !validZip && i < 3; i++) {
    try {
        weatherResults = fetch(url);
        if (weatherResults.ok) {
            validZip = true;
        }

    } catch (e) {
        console.error(e);
    }
}
return validZip;

}