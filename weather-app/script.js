const searchbox=document.querySelector(".searchbox");
const icon=document.querySelector(".icon");
const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const condition=document.querySelector(".condition");
const humidity=document.querySelector(".humidity-value");
const wind=document.querySelector(".wind-speed");
const feel=document.querySelector(".feels-like-value");

const apiKey="0f1314e761addc5943727d5e3d3d1b18";

async function getWeather(event)
{
    try
    {
        const cityname=searchbox.value;
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&units=metric`);
        if(!response.ok) throw new Error("city not found");
        const data=await response.json();
        const iconCode=data.weather[0].icon;
        icon.src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        temp.textContent=`${Math.round(data.main.temp)}°C`;
        city.textContent=data.name;
        condition.textContent=data.weather[0].description;
        humidity.textContent=`${data.main.humidity}%`;
        wind.textContent=`${data.wind.speed} km/h`;
        feel.textContent=`${data.main.feels_like}°C`;
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