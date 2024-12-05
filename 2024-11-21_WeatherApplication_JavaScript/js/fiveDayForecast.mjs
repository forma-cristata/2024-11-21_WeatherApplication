import {getWeatherData} from "./currentWeather_modules/getWeatherData.mjs";
import {updatePage} from "./fiveDayForecast_modules/updatePage.mjs";
import {applyPresetModeIfSo} from "./login_modules/applyPresetModeIfSo.mjs";
import {getCookieValue} from "./register_modules/getCookieValue.mjs";
import {toggleDarkMode} from "./settings_modules/toggleDarkMode.mjs";
import {showCurrentZipCode} from "./settings_modules/showCurrentZipCode.mjs";
import {saveZipCodeChanges} from "./settings_modules/saveZipCodeChanges.mjs";
import {deleteLoggedInCookies} from "./settings_modules/deleteLoggedInCookies.mjs";
import {validatePermissions} from "./settings_modules/validatePermissions.mjs";
import {navigateToFiveDayForecastPage} from "./navigation_modules/navigateToFiveDayForecastPage.mjs";
import {randomizeLoggedInBackground} from "./register_modules/randomizeBackground.mjs";
const REFRESH_MILLISECONDS = 60000;
document.addEventListener("DOMContentLoaded", async () => {
    validatePermissions();
    applyPresetModeIfSo();
    randomizeLoggedInBackground();

    // ----------------- Nav Bar Functionality ------------------------
    const darkModeToggleSwitch = document.getElementById('darkmode-edit');
    darkModeToggleSwitch.addEventListener('change', (e) => {
        toggleDarkMode(e);
    });

    showCurrentZipCode(document.getElementById('zipcode-edit'));
    document.getElementById('zipcode-edit').addEventListener('keydown', (x) =>
    {
        saveZipCodeChanges(x);
    });

    document.getElementById('logout').addEventListener('click', deleteLoggedInCookies);


    const i = getCookieValue('userid');
    const registeredUserZipcode = JSON.parse(localStorage.getItem(`${i}`)).zipcode;
    const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${registeredUserZipcode},us&appid=93b3318b75630cf8585daa94c76458a7&units=imperial&ct=5`;
    const weather = await getWeatherData(fiveDayUrl);
    updatePage(weather);
    setTimeout(navigateToFiveDayForecastPage, REFRESH_MILLISECONDS);
});


