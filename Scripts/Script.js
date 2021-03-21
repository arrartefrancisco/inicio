let text = document.querySelector("#text");

document.body.addEventListener("mouseenter", function()
{
    document.body.style.backgroundColor = "Green";
})

document.body.addEventListener("mouseleave", function()
{
    document.body.style.backgroundColor = "Gray";
})

document.querySelector("#textURL").innerHTML += document.URL;
document.querySelector("#textAnchor").innerHTML += document.querySelectorAll("a").length.toString();


document.querySelector("#btnTextChange").addEventListener("click", function()
{
    text.innerHTML === "Hello World!" ? text.innerHTML = "Hello Javascript World!" : text.innerHTML = "Hello World!";
})

document.querySelector("#btnFontSizeChange").addEventListener("click", function()
{
    text.style.fontSize === "16px" ? text.style.fontSize = "40px" : text.style.fontSize = "16px";
})

document.querySelector("#btnCaseChange").addEventListener("click",function()
{
    if (text.innerHTML !== text.textContent.toUpperCase(text))
    {
        text.innerHTML = text.textContent.toUpperCase(text);
        document.querySelector("#btnCaseChange").innerHTML = "Minúsculas";
    }
    else
    {
        text.innerHTML = text.textContent.toLowerCase(text);
        document.querySelector("#btnCaseChange").innerHTML = "Mayúsculas";
    }
    
})

document.querySelector("#btnHideText").addEventListener("click", function()
{
    document.querySelector("#textHidden").style.display !== "none" ? document.querySelector("#textHidden").style.display = "none" : document.querySelector("#textHidden").style.display = "inherit";
})



