import {getCookieValue} from "./getCookieValue.mjs";

export {checkForLoggedInUser};

function checkForLoggedInUser()
{

    if(getCookieValue('userid'))
    {
        location.href = "./home.html";
    }
}