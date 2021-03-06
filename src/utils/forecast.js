const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ff92588b3d23790feb3218d74201331&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const currentWeather = body.current

            callback(undefined, `${currentWeather.weather_descriptions[0]}. `
                + `It is currently ${currentWeather.temperature} degress out. `
                + `There is a ${currentWeather.precip}% chance of rain. `
                + `Humidity is ${currentWeather.humidity}%`)
        }
    })
}

module.exports = forecast