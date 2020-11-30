var btnTranslate=document.querySelector("#btn-tanslate");
var textInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output-text");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function gettranslationURL(inputtext){

    return serverURL +"?" +"text="+inputtext
}

function errorhandler(error){
console.log("error occured",error);
alert("Something Wrong with the server Please try again after some time")
}

function clickHandler() {
    //outputDiv.innerText = txtInput.value;
 
    var inputtext= textInput.value;

//calling server
fetch(gettranslationURL(inputtext))
.then(response => response.json())
.then(json=>{
   var translatedtext=json.contents.translated;
   outputDiv.innerText=translatedtext;
})
.catch(errorhandler)
};

btnTranslate.addEventListener("click",clickHandler);