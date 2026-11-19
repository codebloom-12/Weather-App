fetch("https://6afd3ed72a9c141d36b84bf2.mockapi.io/weather")
.then(response => response.json())
.then(data => {
    console.log(data);
});

document.getElementById("city").textContent = data[0].city;
document.getElementById("temperature").textContent = data[0].temperature + "°C";
document.getElementById("condition").textContent = data[0].condition;
document.getElementById("humidity").textContent = "Humidity: " +data[0].humidity + "%";