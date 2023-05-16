const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz Enter city name`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c96b9616d1406cc654f84f0553b71b25`;
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerText = `${arrData[0].main.temp} F`;
            const tempMod = arrData[0].weather[0].main;
            if (tempMod == "Clear") {
                temp_status.innerText = `☼`;
            } else if (tempMod == "Clouds") {
                temp_status.innerText = `☁`;
            } else if (tempMod == "Rain") {
                temp_status.innerText = `🌧`;
            } else {
                temp_status.innerText = `☼`;
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Plz Enter city name properly`;
            datahide.classList.add('data_hide');
            // temp.innerText = "0 °C";
            // temp_status.innerText = "";
        }
    }
}

submitBtn.addEventListener('click', getInfo);


const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const monthData = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const dayData = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timerFun = () => {
    const todayDate = new Date().getDate();
    const todayDay = dayData[new Date().getDay()];
    const todayMonth = monthData[new Date().getMonth()];
    day.innerText = todayDay;
    today_date.innerText = `${todayDate}, ${todayMonth}`;
}
timerFun();