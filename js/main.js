const weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=03dcb92fe3ae4fecb8b101112230903&aqi=no';
const keyword = document.querySelector('.keyword')
const btnSearch = document.querySelector('.btn-search')

const container = document.getElementById('container')

btnSearch.onclick = () => {
    fetch(`${weatherAPI}&q=${keyword.value}`)
        .then(res => res.json())
        .then((data) => {
            // const current = data.current
            // const location = data.location
            console.log(data);

            let element = '';

            element = showElement(data);

            container.innerHTML = element;
        });
}

function showElement(data) {
    return `<h1>${data.location.name}, ${data.location.region}, ${data.location.country}</h1>
        <div class="box">
            <img src="${data.current.condition.icon}" alt="">
            <h1>${data.current.temp_c} °C</h1>
        </div>
        <p>${data.location.localtime}</p>
        <p>${data.current.condition.text}</p>`
}