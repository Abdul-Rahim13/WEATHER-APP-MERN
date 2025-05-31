const request = require('request') 

const Forecast = (city, callback) => {
    const Url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${encodeURIComponent(city)}&hours=48&key=${process.env.API_KEY}`;

    request({url: Url, json:true}, (error, res) => {
        if(error){
            callback('Unable to connect location services!', undefined)
        }
        else if(!res.body || res.body.error){
            callback('Unable to find Location please try another search!',undefined)
        }
        else{
            const address = res.body.city_name;
            const hourlyData = res.body.data;
            const currentData = res.body.data[0];
            const temp = currentData.temp;
            const condition = currentData.weather.description;
            const pop = currentData.pop;
            const feelTemp = currentData.app_temp;
            const windSpeed = currentData.wind_spd;
            const uvIndex = currentData.uv

            callback(undefined, {address,hourlyData,temp,condition,pop,feelTemp,windSpeed,uvIndex});
        }
    })
}

module.exports = Forecast;