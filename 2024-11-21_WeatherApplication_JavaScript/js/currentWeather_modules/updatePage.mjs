export {secondsSinceEpochToTime, degreeToCompass, updatePage};

/**
 * Get the direction from the degree
 * (for the wind)
 * @param degree
 * @returns {string}
 */
function degreeToCompass(degree)
{
    // Normalize the degree to ensure it is within 0-360
    degree = degree % 360;

    if (degree < 0) {
        degree += 360;
    }

    if (degree >= 337.5 || degree < 22.5)
    {
        return 'North';
    }
    else if (degree >= 22.5 && degree < 67.5)
    {
        return 'Northeast';
    }
    else if (degree >= 67.5 && degree < 112.5)
    {
        return 'East';
    }
    else if (degree >= 112.5 && degree < 157.5)
    {
        return 'Southeast';
    }
    else if (degree >= 157.5 && degree < 202.5)
    {
        return 'South';
    }
    else if (degree >= 202.5 && degree < 247.5)
    {
        return 'Southwest';
    }
    else if (degree >= 247.5 && degree < 292.5)
    {
        return 'West';
    }
    else
    {
        return 'Northwest';
    }
}

/**
 * Time conversion
 * @param time
 * @returns {string}
 */
function secondsSinceEpochToTime(time)
{
    const date = new Date(time * 1000);
    return date.toLocaleTimeString('en-US',
        {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
}

/**
 * Update weather specifics
 * @param data
 */
function updatePage(data)
{
    console.log(data);
    document.title = `Weather in ${data.name}`;
    document.getElementById("header").innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon"/></img>Weather in ${data.name}`;
    document.getElementById("temperature").innerHTML = `${data.main.temp}<small> °F</small>`;
    document.getElementById("feels-like").innerHTML = `${data.main.feels_like}<small> °F</small>`;
    document.getElementById("low-temp").innerHTML = `${data.main.temp_min}<small> °F</small>`;
    document.getElementById("high-temp").innerHTML = `${data.main.temp_max}<small> °F</small>`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}<small>%</small>`;
    document.getElementById("wind").innerHTML = `${data.wind.speed} <small>mph ${degreeToCompass(data.wind.deg)}</small>`;
    document.getElementById("sunrise").innerHTML = `<small>${secondsSinceEpochToTime(data.sys.sunrise)}</small>`;
    document.getElementById("sunset").innerHTML = `<small>${secondsSinceEpochToTime(data.sys.sunset)}</small>`;
}
