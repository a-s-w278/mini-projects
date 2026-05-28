const image=document.querySelector("img");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const images=
[
    "images/html-image.jpg",
    "images/css-image.jpg",
    "images/c++-image.avif",
    "images/python-image.jpg",
    "images/java-image.jpg"
]
let index=0;

function prevButton()
{
    index--;
    if(index<0)
    {
        index=images.length-1;
    }
    image.src=images[index];
}

prev.addEventListener("click",prevButton);

function nextButton()
{
    index++;
    if(index>images.length-1)
    {
        index=0;
    }
    image.src=images[index];
}

next.addEventListener("click",nextButton);