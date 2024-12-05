import {navigateToLoginPage} from "../navigation_modules/navigateToLoginPage.mjs";
import {navigateToHomePage} from "../navigation_modules/navigateToHomePage.mjs";

export {checkIfLogInMatches}
function checkIfLogInMatches()
{
    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;
    let loginsMatch = false;

    for(let i = 0; i < Number(localStorage.getItem("userCount")); i++)
    {
        try
        {
            const registeredUserObject = JSON.parse(localStorage.getItem(`user${i}`));
            const userRegisteredEmail = registeredUserObject.email;
            const userRegisteredPassword = registeredUserObject.password;
            if(loginEmail === userRegisteredEmail && loginPassword === userRegisteredPassword)
            {
                loginsMatch = true;
                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                document.cookie = `userid=user${i}; expires=${date.toUTCString()};`;

                navigateToHomePage();
            }
        }
        catch
        {
            break;
        }

    }
    if(!loginsMatch)
    {
        alert("Invalid credentials...");
        navigateToLoginPage();
    }
}

