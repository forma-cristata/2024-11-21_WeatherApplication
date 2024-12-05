import {getCookieValue} from "../register_modules/getCookieValue.mjs";
import {validateZipCode} from "./validateZipCode.js";

export {modifyUsersZipcode};
function modifyUsersZipcode(zipcode)
{
    // Get user id from cookies.
    const userId = getCookieValue("userid");

    // Get user from local storage
    const registeredUserObject = JSON.parse(localStorage.getItem(`${userId}`));


    // Set user with new zip code.
    const user = {
        email: registeredUserObject.email,
        password: registeredUserObject.password,
        zipcode: zipcode,
        darkmodepref: registeredUserObject.darkmodepref
    };

    // Save back to local storage
    localStorage.setItem(`${userId}`, JSON.stringify(user));

}

