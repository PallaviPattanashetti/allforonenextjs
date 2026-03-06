
async function SayHelloFetch (name: string) {
    const response = await fetch ('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/HelloWorld/GreetUser/' + name)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default SayHelloFetch