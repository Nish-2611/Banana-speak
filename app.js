var btnTranslate=document.querySelector("#btn-tanslate");
var txtInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output-text");
function clickHandler() {
    outputDiv.innerText = txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler);