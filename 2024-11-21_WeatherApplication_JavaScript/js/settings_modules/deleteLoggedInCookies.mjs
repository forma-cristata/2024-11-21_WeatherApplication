import {navigateToLoginPage} from "../navigation_modules/navigateToLoginPage.mjs";
export {deleteLoggedInCookies};
function deleteLoggedInCookies()
{
    document.cookie = `email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
    document.cookie = 'userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    navigateToLoginPage();
}