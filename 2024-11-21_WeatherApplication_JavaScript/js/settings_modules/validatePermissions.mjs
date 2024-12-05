export {validatePermissions};
import {getCookieValue} from "../register_modules/getCookieValue.mjs";
import {navigateToLoginPage} from "../navigation_modules/navigateToLoginPage.mjs";

function validatePermissions()
{
    let user = "";
    try
    {
        user = getCookieValue('email');
    }
    catch
    {}
    if(!user)
    {
        alert("Log in to continue")
        navigateToLoginPage();
    }
    else
    {
        document.getElementsByTagName('body')[0].classList.remove("d-none");
    }
}