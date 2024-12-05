import {getCookieValue} from "../register_modules/getCookieValue.mjs";
export {modifyUsersPassword};
function modifyUsersPassword(password)
{
    // Get user id from cookies.
    const userId = getCookieValue("userid");

    // Get user from local storage
    const registeredUserObject = JSON.parse(localStorage.getItem(`${userId}`));


    // Set user with new password.
    const user = {
        email: registeredUserObject.email,
        password: password,
        zipcode: registeredUserObject.zipcode,
        darkmodepref: registeredUserObject.darkmodepref
    };

    // Save back to local storage
    localStorage.setItem(`${userId}`, JSON.stringify(user));

}