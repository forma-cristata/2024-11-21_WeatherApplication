
export {storeLogInInformation}
function storeLogInInformation()
{
    let count;
    try
    {
        count = Number(localStorage.getItem('userCount'));

    }
    catch
    {
        count = 0;
    }



    localStorage.setItem('userCount', String(count + 1));
    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        zipcode: document.getElementById('zipcode').value,
        darkmodepref: (document.getElementById('darkmode-edit').checked ? "dark" : "light")

    };
    localStorage.setItem(`user${count}`, JSON.stringify(user));

}


