export {modifyUsersEmail};
import {getCookieValue} from "../register_modules/getCookieValue.mjs";

function modifyUsersEmail(email)
{
    // Get user id from cookies.
    const userId = getCookieValue("userid");

    // Get user from local storage
    const registeredUserObject = JSON.parse(localStorage.getItem(`${userId}`));


    // Set user with new email.
    const user = {
        email: email,
        password: registeredUserObject.password,
        zipcode: registeredUserObject.zipcode,
        darkmodepref: registeredUserObject.darkmodepref
    };

    // Save back to local storage
    localStorage.setItem(`${userId}`, JSON.stringify(user));

}