export {setEmailCookie}
function setEmailCookie()
{
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    let userEmail = document.getElementById('email').value;
    console.log(userEmail);
    document.cookie = `email=${userEmail}; expires=${date.toUTCString()};`;
}