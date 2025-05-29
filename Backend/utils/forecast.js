const request = require('request') 

const Forecast = (address, callback) => {
    const Url = `http://api.weatherapi.com/v1/forecast.json?key=57a243309bdd42d7b8364653252004&q=${address}`

    request({url: Url, json:true}, (error, res) => {
        if(error){
            callback('Unable to connect location services!', undefined)
        }
        else if(!res.body || res.body.error){
            callback('Unable to find Location please try another search!',undefined)
        }
        else{
            const address = res.body.location.name;
            const temp = res.body.current.temp_c;
            const condition = res.body.current.condition.text;

            callback(undefined, {address,temp,condition});
        }
    })
}

module.exports = Forecast;