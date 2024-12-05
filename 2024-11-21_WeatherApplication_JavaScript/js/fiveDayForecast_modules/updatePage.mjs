import {degreeToCompass, secondsSinceEpochToTime} from "../currentWeather_modules/updatePage.mjs";
export {updatePage};

/**
 * Update the five-day forecast daily specifics
 * @param data
 */
function updatePage(data)
{
    console.log(data);
    document.title = `Weather in ${data.city.name}`;
    document.getElementById("caption").innerText = `Weather in ${data.city.name}`;
    for(let i = 0; i < 5; i += 1)
    {
        let date = String(new Date(data.list[i].dt * 1000)).slice(0, 3) + "," + String(new Date(data.list[i].dt * 1000)).slice(3, 11);
        document.getElementById(`date${i}`).innerHTML = `<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="icon" style="width: 2em"/>${date}`;
        document.getElementById(`temperature${i}`).textContent = `${data.list[i].main.temp}`;
        document.getElementById(`feels-like${i}`).textContent = `${data.list[i].main.feels_like}`;
        document.getElementById(`low-temp${i}`).textContent = `${data.list[i].main.temp_min}`;
        document.getElementById(`high-temp${i}`).textContent = `${data.list[i].main.temp_max}`;
        document.getElementById(`humidity${i}`).innerHTML = `${data.list[i].main.humidity}<small>%</small>`;
        document.getElementById(`wind${i}`).innerHTML = `${data.list[i].wind.speed}<small> ${degreeToCompass(data.list[i].wind.deg)}</small>`;
        document.getElementById(`description${i}`).textContent = `${data.list[i].weather[0].main}`;
    }

}

