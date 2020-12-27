function data(){
    
    const url_api = 'http://restcountries.eu/rest/v2/'
    // @ts-ignore
    let input = document.getElementById("countryField").value;
    const urlCountryName = url_api + `name/${input}`;

    const getCountryData = async() => {
        console.log('index.html 10 | Processing...');
        const request = await fetch(urlCountryName);
        const data = await request.json();
        return data;
    }

getCountryData().then(countryData => {
    console.log("index.html 16 | country data", countryData);
    document.getElementById("displayName").innerHTML = `${countryData[0].name}, ${countryData[0].capital}`;

    let img = document.createElement('img');
    img.src = `${countryData[0].flag}`;
    var src = document.getElementById("flagLink");
    img.length = 500;
    img.height = 300;
    src.appendChild(img);
    let lat = countryData[0].latlng[0];
    let lng = countryData[0].latlng[1];
    let mapLink = `https://www.latlong.net/c/?lat=${lat}&long=${lng}`
    //document.getElementById("mapLink").innerHTML = countryData[0].latlng[0];
    let link = document.createElement('a');
    link.textContent = 'Click here to View Map!';
    link.href = mapLink;
    var href = document.getElementById("mapLink");
    href.appendChild(link);
    //document.getElementById("mapLink").innerHTML = mapLink;

    
});
console.log(`${input}`);
};


function region(){
    
    let url_api = 'http://restcountries.eu/rest/v2/'
    // @ts-ignore
    let input = document.getElementById("regionField").value;
    let urlCountryName = url_api + `region/${input}`;

const getRegionData = async() => {
    console.log('index.html 10 | Processing...');
    const request = await fetch(urlCountryName);
    const data = await request.json();
    return data;
}

getRegionData().then(RegionData => {
    console.log("index.html 16 | country data", RegionData);
    document.getElementById("displayRegion").innerHTML = RegionData[0].region;
    let i = 0;
    for(i = 0; i < RegionData.length; i++){
        document.getElementById("displayAllCountries").innerHTML += `${RegionData[i].name}, ${RegionData[i].capital}<br>`; 
    };

   
    //document.getElementById("mapLink").innerHTML = countryData[0].latlng[0];
    //document.getElementById("mapLink").innerHTML = mapLink;

    
});

}
