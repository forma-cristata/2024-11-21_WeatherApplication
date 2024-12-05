export {validateZipCode};

function validateZipCode(zip)
{
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

}