async function PickerFetch(category:string) {
    const response = await fetch('https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/RestaurantPicker/Pick/'+category)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default PickerFetch