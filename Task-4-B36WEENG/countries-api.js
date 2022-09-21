// 2) Use the rest countrie's API url(https://restcountries.com/v3.1/all) Display all the country and flag in console

//XMLhttprequest()
console.log('js file Executed');
//create a object which is capable for making an API call
const request = new XMLHttpRequest();
//open connection to destination (or config destails to Http reuest obj)
request.open('GET', "https://restcountries.com/v3.1/all");
//Send trhe rest countries server 
request.send(null);
//Getting respose and unpacking
request.onload = () => {
    const Response = JSON.parse(request.responseText)
    console.log(Response)

    //Task to pickup the flag
    for (var country of Response) {
        const { flag } = country;
        console.log(`flag: ${flag}`)
    }
};

// 3) use the same rest countryand print all countries name, regions, sub-region and population

//XMLhttprequest()
console.log('js file Executed');
//create a object which is capable for making an API call
const request = new XMLHttpRequest();
//open connection to destination (or config destails to Http reuest obj)
request.open('GET', "https://restcountries.com/v3.1/all");
//Send trhe rest countries server 
request.send(null);
//Getting respose and unpacking
request.onload = () => {
    const Response = JSON.parse(request.responseText)
    console.log(Response)

    for (var country of Response) {
        const { name, population, region, subregion } = country;
        console.log(`name : ${name} population : ${population}, Region : ${region}, Sub-Region : ${subregion}`)
    }
};