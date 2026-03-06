async function AlphaFetch (letters:string) {
    const response = await fetch ('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/AlphaReverse/Fetch/Letters?Letters='+letters)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default AlphaFetch