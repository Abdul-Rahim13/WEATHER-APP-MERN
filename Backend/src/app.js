const path = require('path')
const express = require('express')
const Geocode = require('../utils/geocode.js')
const Forecast = require('../utils/forecast.js')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../Frontend/dist')

app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
    const address = req.query.address;

    if(!address){
        return res.send({
            error: 'You must provide Address'
        })
    }

    Geocode(address, (error, {longitude, latitude} = {}) => {
        if(error){
            return res.send({error})
        }

        Forecast(`${latitude},${longitude}`, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                address,
                longitude,
                latitude,
                forecast: forecastData
            })
        })
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
  });

app.listen(3000, () => {
    console.log('Server is Started at Port 3000')
})