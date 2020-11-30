var btnTranslate=document.querySelector("#btn-tanslate");
var txtInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output-text");

function clickhandler() {
    outputDiv.innerText = "Nishant" + txtInput.value;
};

btnTranslate.addEventListener("click",clickhandler);