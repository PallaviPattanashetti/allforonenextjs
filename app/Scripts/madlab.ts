async function MadlabFetch(name:string,place:string,city:string,noun:string,adjective:string,adverb:string,animal:string, sillyword:string,food:string,otherfriends:string) {
    const response = await fetch(`https://proallforone-fvdwbvbpgfgbf2ez.westus3-01.azurewebsites.net/api/MadLab/Fetch/Inputs?name=${name}&place=${place}&city=${city}&noun=${noun}&adjective=${adjective}&adverb=${adverb}&animal=${animal}&sillyWord=${sillyword}&food=${food}&otherfriends=${otherfriends}`)
    console.log(response);
    const data = await response.text();
    console.log(data);

    return data;
}

export default MadlabFetch