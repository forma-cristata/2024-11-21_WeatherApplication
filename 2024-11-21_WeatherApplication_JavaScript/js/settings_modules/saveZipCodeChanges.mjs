import {checkZipCode} from "./checkZipCode.mjs";

export {saveZipCodeChanges};
import {modifyUsersZipcode} from "./modifyUsersZipCode.mjs";
import {showCurrentZipCode} from "./showCurrentZipCode.mjs";

function saveZipCodeChanges(x)
{
    if(x.key === 'Enter')
    {
        const zipC = document.getElementById('zipcode-edit').value;
        let validZip = checkZipCode(zipC);
        if(!validZip)
        {
            document.getElementById('zipcode-edit').classList.add("invalid");
            document.getElementById('zipcode-edit').focus();
        }
        document.getElementById('zipcode-edit').classList.remove('invalid');
        modifyUsersZipcode(document.getElementById('zipcode-edit').value)
        showCurrentZipCode(document.getElementById('zipcode-edit'));
        showCurrentZipCode(document.getElementById('zipcode-edit-2'));

    }
}
