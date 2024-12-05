import {navigateToHomePage} from "../navigation_modules/navigateToHomePage.mjs";
import {navigateToLoginPage} from "../navigation_modules/navigateToLoginPage.mjs";

export {verifyNoDuplicateEmails};

function verifyNoDuplicateEmails(loginEmail)
{
    let loginsMatch = false;

    for(let i = 0; i < Number(localStorage.getItem("userCount")); i++)
    {
        try
        {
            const registeredUserObject = JSON.parse(localStorage.getItem(`user${i}`));
            const userRegisteredEmail = registeredUserObject.email;
            if(loginEmail === userRegisteredEmail)
            {
                loginsMatch = true;

                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);

            }
            else
            {
                document.getElementById('email').classList.remove("invalid");
            }
        }
        catch
        {
            break;
        }

    }
    if(loginsMatch)
    {
        document.getElementById('email').classList.add("invalid");
        alert("User with this email is already registered");

        if(String(window.location.href) === "http://localhost:63342/it211-project2-kcraycraft45/register.html")
        {navigateToLoginPage();}
    }
}