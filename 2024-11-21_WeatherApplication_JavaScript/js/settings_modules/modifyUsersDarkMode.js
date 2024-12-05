import {getCookieValue} from "../register_modules/getCookieValue.mjs";

export {modifyUsersDarkMode};
function modifyUsersDarkMode()
{
    // Get user id from cookies.
    const userId = getCookieValue("userid");

    if(userId)
    {
        // Get user from local storage
        const registeredUserObject = JSON.parse(localStorage.getItem(`${userId}`));

        const darkmode = getCookieValue("darkmode");
        // Set user with new password.
        const user = {
            email: registeredUserObject.email,
            password: registeredUserObject.password,
            zipcode: registeredUserObject.zipcode,
            darkmodepref: darkmode
        };

        // Save back to local storage
        localStorage.setItem(`${userId}`, JSON.stringify(user));
    }

}