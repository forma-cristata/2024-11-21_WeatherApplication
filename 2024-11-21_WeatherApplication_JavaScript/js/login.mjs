import {setEmailCookie} from "./login_modules/setEmailCookie.mjs";
import {checkIfLogInMatches} from "./login_modules/checkIfLogInMatches.mjs";
import {applyPresetModeIfSoLoginRegister} from "./login_modules/applyPresetModeIfSo.mjs";
import {toggleDarkMode} from "./settings_modules/toggleDarkMode.mjs";
import {randomizeBackground} from "./register_modules/randomizeBackground.mjs";
import {checkForLoggedInUser} from "./register_modules/checkForLoggedInUser.mjs";

const form = document.getElementsByTagName('form')[0];

document.addEventListener("DOMContentLoaded", () =>
{
    randomizeBackground();
    applyPresetModeIfSoLoginRegister();
    checkForLoggedInUser();
    form.addEventListener('submit', e =>
    {
        e.preventDefault();
        setEmailCookie();
        checkIfLogInMatches();
    });

    const darkModeToggleSwitch = document.getElementById('darkmode-edit');
    darkModeToggleSwitch.addEventListener('change', (e) => {
        toggleDarkMode(e);
    });

});






