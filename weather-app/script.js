const searchbox=document.querySelector(".searchbox");
const icon=document.querySelector(".icon");
const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const condition=document.querySelector(".condition");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const feel=document.querySelector(".feels-like");
const weather_card=document.querySelector(".weather-card");
const details=document.querySelector(".details");

async function getWeather(event)
{
    try
    {
        const cityname=searchbox.value.trim();
        if(cityname==="") return;
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&units=metric`);
        if(!response.ok) throw new Error("city not found");
        const data=await response.json();
        const iconCode=data.weather[0].icon;
        icon.src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        temp.textContent=`${Math.round(data.main.temp)}°C`;
        city.textContent=data.name;
        condition.textContent=data.weather[0].description;
        humidity.textContent=`💧${data.main.humidity}%`;
        wind.textContent=`🌬️${data.wind.speed} m/s`;
        feel.textContent=`🤗${data.main.feels_like}°C`;
        weather_card.style.display="flex";
        details.style.display="flex";
    }
    catch(error)
    {
        alert("city not found!")
    }
    
}
searchbox.addEventListener("keydown",(event)=>
{
    if(event.key==="Enter") getWeather();
});