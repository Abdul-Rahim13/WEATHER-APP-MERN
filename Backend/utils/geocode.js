const request = require('request') 

const Geocode = (address, callback) => {
    const Url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${encodeURIComponent(city)}&hours=48&key=df931726f6ff426eb74262416155eea7`;

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