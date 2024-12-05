import {getCookieValue} from "../register_modules/getCookieValue.mjs";
export {showCurrentEmail};
function showCurrentEmail()
{
    const emailElement = document.getElementById('email');
    let i = getCookieValue('userid');
    let user = JSON.parse(localStorage.getItem(`${i}`));
    let userEmail = user.email;
    emailElement.placeholder = `${userEmail}`;
}