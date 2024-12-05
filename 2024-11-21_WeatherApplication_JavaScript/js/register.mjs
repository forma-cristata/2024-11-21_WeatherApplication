import {storeLogInInformation} from "./register_modules/storeLogInInformation.mjs";
import {navigateToLoginPage} from "./navigation_modules/navigateToLoginPage.mjs";
import {clearAllInputs} from "./register_modules/clearAllInputs.mjs";
import {applyPresetModeIfSoLoginRegister} from "./login_modules/applyPresetModeIfSo.mjs";
import {toggleDarkMode} from "./settings_modules/toggleDarkMode.mjs";
import {randomizeBackground} from "./register_modules/randomizeBackground.mjs";
import {checkForLoggedInUser} from "./register_modules/checkForLoggedInUser.mjs";
import {verifyNoDuplicateEmails} from "./register_modules/verifyNoDuplicateEmails.mjs";
import {validateZipCode} from "./settings_modules/validateZipCode.js";
import {checkZipCode} from "./settings_modules/checkZipCode.mjs";

const form = document.getElementsByTagName('form')[0];
document.addEventListener('DOMContentLoaded', () =>
{
    randomizeBackground();
    applyPresetModeIfSoLoginRegister();
    checkForLoggedInUser();

    form.addEventListener('submit', async e => {
        e.preventDefault();
        console.log(e.target);

        storeLogInInformation();
        await clearAllInputs();
        navigateToLoginPage();

    });
    document.getElementById('email').addEventListener('blur', () =>
    {
        verifyNoDuplicateEmails(document.getElementById('email').value);
    });
    document.getElementById('zipcode').addEventListener('blur', () =>
    {
        if(!checkZipCode(document.getElementById('zipcode').value))
        {
            document.getElementById('zipcode').classList.add("invalid");
        }
        else
        {
            document.getElementById('zipcode').classList.remove("invalid");
        }
    })

    const darkModeToggleSwitch = document.getElementById('darkmode-edit');
    darkModeToggleSwitch.addEventListener('change', (e) => {
        toggleDarkMode(e);
    });
});










