import {getCookieValue} from "../register_modules/getCookieValue.mjs";

export {showCurrentZipCode};
function showCurrentZipCode(element)
{
    const userId = getCookieValue("userid");

    // Get user from local storage
    element.value='';
    element.placeholder = JSON.parse(localStorage.getItem(`${userId}`)).zipcode;
    element.blur();
}