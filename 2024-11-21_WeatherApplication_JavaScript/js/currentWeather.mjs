import {updatePage} from "./currentWeather_modules/updatePage.mjs";
import {getWeatherData} from "./currentWeather_modules/getWeatherData.mjs";
import {applyPresetModeIfSo} from "./login_modules/applyPresetModeIfSo.mjs";
import {getCookieValue} from "./register_modules/getCookieValue.mjs";
import {toggleDarkMode} from "./settings_modules/toggleDarkMode.mjs";
import {showCurrentZipCode} from "./settings_modules/showCurrentZipCode.mjs";
import {saveZipCodeChanges} from "./settings_modules/saveZipCodeChanges.mjs";
import {deleteLoggedInCookies} from "./settings_modules/deleteLoggedInCookies.mjs";
import {validatePermissions} from "./settings_modules/validatePermissions.mjs";
import {navigateToCurrentWeatherPage} from "./navigation_modules/navigateToCurrentWeatherPage.mjs";
import {randomizeLoggedInBackground} from "./register_modules/randomizeBackground.mjs";

const REFRESH_SECONDS = 30;
let secondsUntilRefresh = REFRESH_SECONDS + 1;


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
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${registeredUserZipcode}&appid=93b3318b75630cf8585daa94c76458a7&units=imperial`;

    const weather = await getWeatherData(url);
    updatePage(weather);
    await refresh();
    setTimeout(navigateToCurrentWeatherPage, (REFRESH_SECONDS+2)*1000);



});

async function refresh()
{
    if (--secondsUntilRefresh <= 0)
    {
        setTimeout(()=>
        {
            document.getElementById('refresh-timer').textContent = "Refreshing...";

        }, 0);
        const weather = await getWeatherData();
        updatePage(weather);
        secondsUntilRefresh = REFRESH_SECONDS;
    }
    document.getElementById('refresh-timer').textContent = `Refreshing in ${secondsUntilRefresh} seconds...`;
    setTimeout(refresh, 1000);
}




