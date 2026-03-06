async function MagicFetch(questions:string) {
    const response = await fetch('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/MagicBall/Fetch/anything?question='+questions)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default MagicFetch