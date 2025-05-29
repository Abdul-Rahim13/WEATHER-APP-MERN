const request = require('request') 

const Geocode = (address, callback) => {
    const Url = `http://api.weatherapi.com/v1/forecast.json?key=57a243309bdd42d7b8364653252004&q=${address}`

    request({url: Url, json:true}, (error, res) => {
        if(error){
            callback('Unable to connect location services!', undefined)
        }
        else if(!res.body || res.body.error){
            callback('Unable to find Location please try another search!',undefined)
        }
        else{
            const longitude = res.body.location.lon;
            const latitude = res.body.location.lat;
            
            callback(undefined, {longitude, latitude});
        }
    })
}

module.exports = Geocode;