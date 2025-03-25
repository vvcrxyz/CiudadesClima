const apiKey = ''; // Tu API Key

// Llama a la función fetchWeather para las tres ciudades al cargar la página
window.onload = () => {
    fetchWeather("México");
    fetchWeather("Madrid");
    fetchWeather("New York");
};

// Función para agregar una ciudad
function addCiudad() {
    const ciudad = document.getElementById('ciudadInput').value;
    if (ciudad) {
        fetchWeather(ciudad);
        document.getElementById('ciudadInput').value = ''; // Reinicia el campo de texto
    }
}

// Función para obtener el clima de una ciudad
function fetchWeather(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Error al obtener los datos del clima: ' + error));
}

// Mostrar los datos del clima
function displayWeather(data) {
    if (data.cod === 200) {
        const weatherDiv = document.createElement('div');
        weatherDiv.classList.add('ciudad');

        weatherDiv.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperatura: ${data.main.temp} °C</p>
            <p>Descripción: ${data.weather[0].description}</p>
            <p>Humedad: ${data.main.humidity} %</p>
        `;

        document.getElementById('weatherInfo').appendChild(weatherDiv);
    } else {
        alert('Ciudad no encontrada');
    }
}
