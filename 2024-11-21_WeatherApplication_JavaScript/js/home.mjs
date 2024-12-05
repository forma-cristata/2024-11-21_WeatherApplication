import {populateWelcomeMessage} from "./home_modules/populateWelcomeMessage.mjs";
import {navigateToCurrentWeatherPage} from "./navigation_modules/navigateToCurrentWeatherPage.mjs";
import {navigateToFiveDayForecastPage} from "./navigation_modules/navigateToFiveDayForecastPage.mjs";
import {applyPresetModeIfSo} from "./login_modules/applyPresetModeIfSo.mjs";
import {toggleDarkMode} from "./settings_modules/toggleDarkMode.mjs";
import {showCurrentZipCode} from "./settings_modules/showCurrentZipCode.mjs";
import {saveZipCodeChanges} from "./settings_modules/saveZipCodeChanges.mjs";
import {deleteLoggedInCookies} from "./settings_modules/deleteLoggedInCookies.mjs";
import {validatePermissions} from "./settings_modules/validatePermissions.mjs";
import {randomizeLoggedInBackground} from "./register_modules/randomizeBackground.mjs";

const currentWeatherButton = document.getElementById("current-weather-btn");
const fiveDayForecastButton = document.getElementById("five-day-forecast-btn");
document.addEventListener("DOMContentLoaded", () =>
{
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

    const enterChatButton = document.getElementById('enter-chatroom-btn');
    enterChatButton.addEventListener('click', () =>
    {
        showChatRoom();
    });

    document.getElementById('logout').addEventListener('click', deleteLoggedInCookies);


    populateWelcomeMessage();
    currentWeatherButton.addEventListener('click', navigateToCurrentWeatherPage);
    fiveDayForecastButton.addEventListener('click', navigateToFiveDayForecastPage);
});

function showChatRoom()
{
    const welcomeForm = document.querySelector('#other form[id="container"]');
    welcomeForm.classList.add("d-none");
    document.getElementById('other').classList.add("d-none");
    document.getElementById('chatroom').classList.remove("d-none");

}

