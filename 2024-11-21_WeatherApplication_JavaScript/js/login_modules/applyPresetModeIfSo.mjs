import {getCookieValue} from "../register_modules/getCookieValue.mjs";
import {modifyUsersDarkMode} from "../settings_modules/modifyUsersDarkMode.js";
export {applyPresetModeIfSo, applyPresetModeIfSoSettings, applyPresetModeIfSoLoginRegister};

/**
 * Set dark mode theme and toggle button selection when the page loads
 * For the Home, Current Weather & Five-Day Forecast
 */
function applyPresetModeIfSo()
{
    let cookie = (getCookieValue("darkmode") === "true");
    console.log(`getCookieValue("darkmode") = ${cookie}`);

    console.log(cookie);
    document.querySelector('html').setAttribute("data-bs-theme", `${cookie? "dark" : "light"}`);
    //====================================================//
    document.getElementById('darkmode-edit').checked = cookie;
}

/**
 * Set dark mode theme to default selections (based on window settings)
 * For the Login & Register pages
 */
function applyPresetModeIfSoLoginRegister()
{
    let cookie = String(window.matchMedia("(prefers-color-scheme: dark)").matches);
    console.log(`getCookieValue("darkmode") = ${cookie}`);

    console.log(cookie);
    document.querySelector('html').setAttribute("data-bs-theme", `${cookie? "dark" : "light"}`);
    //====================================================//
    document.getElementById('darkmode-edit').checked = cookie;
}

/**
 * Set dark mode theme and toggle button selection (both) when the page loads
 * For the Settings page
 */
function applyPresetModeIfSoSettings()
{
    let cookie = getCookieValue("darkmode") === "true";
    console.log(`getCookieValue("darkmode") = ${cookie}`);

    console.log(cookie);
    document.querySelector('html').setAttribute("data-bs-theme", `${cookie? "dark" : "light"}`);
    //====================================================//
    document.getElementById('darkmode-edit').checked = cookie;
    document.getElementById('darkmode-edit-2').checked = cookie;
}