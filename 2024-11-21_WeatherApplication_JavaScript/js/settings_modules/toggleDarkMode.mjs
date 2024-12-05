import {modifyUsersDarkMode} from "./modifyUsersDarkMode.js";

export {toggleDarkMode};
function toggleDarkMode(e)
{
    let darkMode = e.target.checked;
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = 'darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = `darkmode=${String(darkMode)}; expires=${date.toUTCString()};`;
    modifyUsersDarkMode();
    document.querySelector('html').setAttribute("data-bs-theme", `${darkMode? "dark" : "light"}`);
}

