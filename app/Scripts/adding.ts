async function AddingFetch (Num1:string, Num2: string) {
    const response = await fetch ('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/AddTwoNumbers/userInput/' + Num1 + "/" + Num2)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default AddingFetch