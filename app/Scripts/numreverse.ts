async function NumberFetch (number:string) {
    const response = await fetch ('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/NumReverse/Fetch/number?numbers='+number)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default NumberFetch