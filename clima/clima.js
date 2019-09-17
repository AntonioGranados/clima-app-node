const axios = require('axios');

const getClima = async(lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4cc5cd1f2f3ebf1f036a017f571aa018&units=metric`);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}