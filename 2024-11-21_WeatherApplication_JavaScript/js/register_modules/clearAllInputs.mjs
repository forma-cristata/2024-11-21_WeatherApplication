export {clearAllInputs};
async function clearAllInputs()
{
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const zipcode = document.getElementById('zipcode');
    email.value = "";
    password.value = "";
    zipcode.value="";
    await new Promise(r => setTimeout(r, 1000));
}