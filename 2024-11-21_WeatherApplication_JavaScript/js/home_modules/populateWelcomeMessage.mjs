import {getCookieValue} from "../register_modules/getCookieValue.mjs";

export {populateWelcomeMessage};

/**
 * Welcome specific logged-in user by their email.
 */
function populateWelcomeMessage()
{
    const welcomeMessage = document.getElementById('welcome-message');
    let i = getCookieValue('userid');
    let user = JSON.parse(localStorage.getItem(`${i}`));
    let userEmail = user.email;
    welcomeMessage.textContent = `Welcome, ${userEmail}!`;
    console.log(welcomeMessage.innerText);
}
