const quote=document.querySelector(".quote");
const copy=document.querySelector("#copyQuote");
const author=document.querySelector(".author");
const twitter=document.querySelector("#twitter");
const linkedin=document.querySelector("#linkedin");
const refresh=document.querySelector("#refresh");

async function getQuote()
{
    const response=await fetch(`https://dummyjson.com/quotes/random`);
    const data=await response.json();
    if(!response.ok) return;
    quote.textContent=`"${data.quote}"`;
    author.textContent=`—${data.author}`;
}
getQuote();
refresh.addEventListener("click",getQuote);