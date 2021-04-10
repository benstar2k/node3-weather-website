const request = require('postman-request');

const token = '6b67515e9cacac15029ec5814c5d634e'

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${token}&query=${latitude},${longitude}`

  request({ url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather service!',undefined);
    } else if (body.error) {
      callback('Unable to find location.',undefined);
    }else {
      callback(undefined,{
        temperature : body.current.temperature,
        feels_like : body.current.feelslike,
        forecast : `Es sind gerade ${body.current.temperature} Grad da draußen. Gefühlt ${body.current.feelslike} Grad`
      });
    }
  })
}

module.exports = forecast;