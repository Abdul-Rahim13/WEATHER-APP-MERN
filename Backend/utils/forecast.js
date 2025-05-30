const request = require('request') 

const Forecast = (city, callback) => {
    const Url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${encodeURIComponent(city)}&hours=48&key=df931726f6ff426eb74262416155eea7`;

    request({url: Url, json:true}, (error, res) => {
        if(error){
            callback('Unable to connect location services!', undefined)
        }
        else if(!res.body || res.body.error){
            callback('Unable to find Location please try another search!',undefined)
        }
        else{
            const address = res.body.city_name;
            const temp = res.body.data[0].temp;
            const condition = res.body.data[0].weather.description;
            const pop = res.body.data[0].pop;

            callback(undefined, {address,temp,condition,pop});
        }
    })
}

module.exports = Forecast;