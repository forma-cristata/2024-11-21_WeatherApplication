import {showCurrentZipCode} from "./settings_modules/showCurrentZipCode.mjs";
import {modifyUsersZipcode} from "./settings_modules/modifyUsersZipCode.mjs";
import {applyPresetModeIfSoSettings} from "./login_modules/applyPresetModeIfSo.mjs";
import {toggleDarkMode} from "./settings_modules/toggleDarkMode.mjs";
import {saveZipCodeChanges} from "./settings_modules/saveZipCodeChanges.mjs";
import {deleteLoggedInCookies} from "./settings_modules/deleteLoggedInCookies.mjs";
import {showCurrentEmail} from "./settings_modules/showCurrentEmail.mjs";
import {allowEdits} from "./settings_modules/allowEdits.mjs";
import {disallowEdits} from "./settings_modules/disallowEdits.mjs";
import {modifyUsersEmail} from "./settings_modules/modifyUsersEmail.mjs";
import {modifyUsersPassword} from "./settings_modules/modifyUsersPassword.mjs";
import {validatePermissions} from "./settings_modules/validatePermissions.mjs";
import {checkZipCode} from "./settings_modules/checkZipCode.mjs";
import {randomizeLoggedInBackground} from "./register_modules/randomizeBackground.mjs";
import {verifyNoDuplicateEmails} from "./register_modules/verifyNoDuplicateEmails.mjs";

document.addEventListener("DOMContentLoaded", () =>
{
    validatePermissions();
    /*********** Dark Mode Code ************/

    applyPresetModeIfSoSettings();
    randomizeLoggedInBackground();
    /*********** Navigation Code ************/
    const darkModeToggleSwitch = document.getElementById('darkmode-edit');
    const darkModeToggleSwitch2 = document.getElementById('darkmode-edit-2');

    darkModeToggleSwitch.addEventListener('change', (e) => {
        toggleDarkMode(e);
        darkModeToggleSwitch2.checked = darkModeToggleSwitch.checked;
    });

    darkModeToggleSwitch2.addEventListener('change', (e) => {
        toggleDarkMode(e);
        darkModeToggleSwitch.checked = darkModeToggleSwitch2.checked;
    });

    showCurrentZipCode(document.getElementById('zipcode-edit'));
    document.getElementById('zipcode-edit').addEventListener('keydown', (x) =>
    {
        saveZipCodeChanges(x);
    });

    document.getElementById('logout').addEventListener('click', deleteLoggedInCookies);
    document.getElementById('logout-2-btn').addEventListener('click', deleteLoggedInCookies);

    /*********** Non-Navigation Code ************/

    showCurrentEmail();




    const emailInput = document.getElementById('email');
    disallowEdits(emailInput);

    const passwordInput = document.getElementById('password');
    disallowEdits(passwordInput);

    const zipcodeInput = document.getElementById('zipcode-edit-2');
    disallowEdits(zipcodeInput);
    showCurrentZipCode(zipcodeInput);






    const editEmailButton = document.getElementById('edit-email-btn');
    const saveEmailButton = document.getElementById('save-email-btn');
    const emailForm = document.getElementById('form-1');
    editEmailButton.addEventListener('click', (e) =>
    {
        allowEdits(emailInput, e);
        editEmailButton.classList.add("d-none");
        saveEmailButton.classList.remove("d-none");
    });
    emailForm.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        verifyNoDuplicateEmails(emailInput.value);
        modifyUsersEmail(emailInput.value);
        showCurrentEmail();
        emailInput.value = "";
        disallowEdits(emailInput);
        editEmailButton.classList.remove("d-none");
        saveEmailButton.classList.add("d-none");
    });

    const editPasswordButton = document.getElementById('edit-password-btn');
    const savePasswordButton = document.getElementById('save-password-btn');
    const passwordForm = document.getElementById('form-2');
    editPasswordButton.addEventListener('click', (e) =>
    {
        passwordInput.value=""
        allowEdits(passwordInput, e);
        editPasswordButton.classList.add("d-none");
        savePasswordButton.classList.remove("d-none");
    });
    passwordForm.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        modifyUsersPassword(passwordInput.value);
        passwordInput.value="password123";
        disallowEdits(passwordInput);
        editPasswordButton.classList.remove("d-none");
        savePasswordButton.classList.add("d-none");
    });


    const editZipcodeButton = document.getElementById('edit-zip-btn');
    const saveZipcodeButton = document.getElementById('save-zip-btn');
    const zipCodeForm = document.getElementById('form-3');
    editZipcodeButton.addEventListener('click', (e) =>
    {
        allowEdits(zipcodeInput, e);
        editZipcodeButton.classList.add("d-none");
        saveZipcodeButton.classList.remove("d-none");
    });
    zipCodeForm.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        const zipC = zipcodeInput.value;
        let validZip = checkZipCode(zipC);
        if(!validZip) {zipcodeInput.classList.add('invalid');}
        else {
            modifyUsersZipcode(zipcodeInput.value)
            showCurrentZipCode(document.getElementById('zipcode-edit'));
            showCurrentZipCode(zipcodeInput);
            disallowEdits(zipcodeInput);
            editZipcodeButton.classList.remove("d-none");
            saveZipcodeButton.classList.add("d-none");
            zipcodeInput.value = "";
        }
    });





});
