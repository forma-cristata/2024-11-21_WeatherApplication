import {getCookieValue} from "./getCookieValue.mjs";

export {randomizeBackground, randomizeLoggedInBackground};






function randomizeBackground()
{
    const allBackgrounds = ["./images/coastal.png", "./images/default.png", "./images/desert.png", "./images/forest.png", "./images/plains.png", "./images/tundra.png", "./images/urban.png"]

    let rand = Math.floor(Math.random() * (allBackgrounds.length-1));
    console.log(rand);
    document.getElementById('bg').style.backgroundImage = `url(${allBackgrounds[rand]})`;
}



function randomizeLoggedInBackground()
{
    const allBackgrounds = ["./images/coastal.png", "./images/default.png", "./images/desert.png", "./images/forest.png", "./images/plains.png", "./images/tundra.png", "./images/urban.png"]
    let zip = Number(JSON.parse(localStorage.getItem(`${getCookieValue("userid")}`)).zipcode);
    console.log(zip);
    let arr;

    if((zip >= 53001 && zip <= 54990) || (zip >= 57001 && zip <= 57799) || (zip >= 50001 && zip <= 52809) || (zip >= 68119 && zip <= 68120) || (zip >= 46001 && zip <= 47997) || (zip >= 40003 && zip <= 42788) || (zip >= 55001 && zip <= 56763) || (zip >= 63001 && zip <= 65899) || (zip >= 38601 && zip <= 39776) || (zip === 71233) || (zip >= 59001 && zip <= 59937) || (zip >= 43001 && zip <= 45999) || (zip >= 73001 && zip <= 73199) || (zip >= 73401 && zip <= 74966))
    {// fp
            arr = [allBackgrounds[3], allBackgrounds[4]];
    }
    else if ((zip >= 98001 && zip <= 99403) || (zip >= 5001 && zip <= 5495) || (zip >= 5601 && zip <= 5907) || (zip >= 29001 && zip <= 29948) || (zip >= 30001 && zip <= 31999) || (zip === 39901) || (zip >= 3901 && zip <= 4992) || (zip >= 27006 && zip <= 28909) || (zip >= 3031 && zip <= 3897) || (zip >= 2801 && zip <= 2940))
    {// cf
            arr = [allBackgrounds[0], allBackgrounds[3]];
    }
    else if ((zip >= 1001 && zip <= 2791) || (zip >= 5501 && zip <= 5544) || (zip === 20331) || (zip >= 20335 && zip <= 20797) || (zip >= 20812 && zip <= 21930) || (zip >= 20040 && zip <= 20167) || (zip >= 22001 && zip <= 24658) || (zip >= 37010 && zip <= 38589) || (zip >= 15001 && zip <= 19640))
    {// fu
            arr = [allBackgrounds[3], allBackgrounds[6]];}
    else if ((zip >= 35004 && zip <= 36925) || (zip >= 6001 && zip <= 6389) || (zip >= 6401 && zip <= 6928) || (zip >= 19701 && zip <= 19980) || (zip >= 70001 && zip <= 71232) || (zip >= 71234 && zip <= 71497) || (zip >= 68001 && zip <= 68118) || (zip >= 68122 && zip <= 69367))
    { // f
            arr = [allBackgrounds[3]];}
    else if ((zip >= 82001 && zip <= 83128) || (zip >= 84001 && zip <= 84784) || (zip >= 87001 && zip <= 88441) || (zip === 73301) || (zip === 75501) || (zip >= 75503 && zip <= 79999) || (zip >= 88510 && zip <= 88589))
    {//dp
            arr = [allBackgrounds[2], allBackgrounds[4]];}
    else if ((zip >= 32004 && zip <= 34997) || (zip >= 48001 && zip <= 49971) || (zip === 6390) || (zip >= 10001 && zip <= 14975) || (zip >= 97001 && zip <= 97920))
    {// cfu
            arr = [allBackgrounds[0], allBackgrounds[3], allBackgrounds[6]];}
    else if ((zip >= 20001 && zip <= 20039) || (zip >= 20042 && zip <= 20599) || (zip === 20799))
    {// u
            arr = [allBackgrounds[6]];}
    else if ((zip >= 60001 && zip <= 62999) || (zip >= 7001 && zip <= 8989))
    { // fpu
            arr = [allBackgrounds[3], allBackgrounds[4], allBackgrounds[6]];    }
    else if ((zip >= 66002 && zip <= 67954) || (zip >= 58001 && zip <= 58856)){
            // p
            arr = [allBackgrounds[4]];}
    else if ((zip >= 71601 && zip <= 72959) || (zip === 75502)){
            // CFP
            arr = [allBackgrounds[0], allBackgrounds[3], allBackgrounds[4]];}
    else if (zip >= 90001 && zip <= 96162){
            // CDU
            arr = [allBackgrounds[0], allBackgrounds[2], allBackgrounds[6]];}
    else if (zip >= 85001 && zip <= 86556){
            // D
            arr = [allBackgrounds[2]];}
    else if (zip >= 83201 && zip <= 83876){
            // dfp
            arr = [allBackgrounds[2], allBackgrounds[3], allBackgrounds[4]];}
    else if (zip >= 90001 && zip <= 81658){
            // dfpu
            arr = [allBackgrounds[2], allBackgrounds[3], allBackgrounds[4], allBackgrounds[6]];}
    else if (zip >= 88901 && zip <= 89883){
            // dpu
            arr = [allBackgrounds[2], allBackgrounds[4], allBackgrounds[6]];}
    else if (zip >= 99501 && zip <= 99950){
            // t
            arr = [allBackgrounds[5]];}
    else{
            arr = [allBackgrounds[1]];
}


    let rand = Math.round(Math.random() * (arr.length-1));
    console.log(rand);
    document.getElementById('bg').style.backgroundImage = `url(${arr[rand]})`;
}










