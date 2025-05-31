const path = require('path')
const express = require('express')
const Forecast = require('../utils/forecast.js')
const cors = require('cors');
const app = express()
const publicDirectoryPath = path.join(__dirname, '../Frontend/dist')

app.use(express.static(publicDirectoryPath))
app.use(cors());

app.get('/weather', (req, res) => {
    const city = req.query.address;

    if (!city) {
        return res.send({ error: 'You must provide a city name' });
    }

    Forecast(city, (error, forecastData) => {
        if (error) {
            return res.send({ error });
        }

        res.send({
            city,
            forecast: forecastData,
            hourly: forecastData.hourlyData
        });
    });
});


app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
  });

app.listen(3000, () => {
    console.log('Server is Started at Port 3000')
})

module.exports = app;