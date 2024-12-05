export {getCookieValue}
function getCookieValue(name)
{
    let x = document.cookie.split('; ')
        .find((row) => row.toLowerCase().startsWith(name + "=") )
        ?.split('=')[1];
    console.log(`Cookie: ${x}`);
    if(x === undefined && name==='darkmode')
    {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        x = `${String(window.matchMedia("(prefers-color-scheme: dark)").matches)}`;
        document.cookie = 'darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

        document.cookie = `darkmode=${x}; expires=${date.toUTCString()};`;
        console.log(`System settings: ${String(window.matchMedia("(prefers-color-scheme: dark)").matches)}`)
    }
    return x;
}

