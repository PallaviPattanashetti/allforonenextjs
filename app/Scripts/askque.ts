async function AskingFetch(name: string, time: string) {
    const response = await fetch('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/AskQue/Fetch/' + name + "/" + time)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default AskingFetch