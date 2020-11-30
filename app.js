var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output-text");

function clickhandler() {
    outputDiv.innerText="hello";
};

btnTranslate.addEventListener('Click', clickhandler())