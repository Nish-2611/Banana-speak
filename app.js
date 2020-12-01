var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output-text");

var serverURL="https://api.funtranslations.com/translate/minion.json"
//returning the url with user text
function gettranslationURL(inputtext){

    return serverURL +"?" +"text="+inputtext
}
//error handling
function errorhandler(error){
console.log("error occured",error);
alert("Translation limit exceeded or something Wrong with the server Please try again after 1 hour")
}

function clickTranslateHandler() {
 
    var inputtext= textInput.value;

//calling server
fetch(gettranslationURL(inputtext))
.then(response => response.json())
.then(json=>{
    outputDiv.innerText =json.contents.translated;
})
.catch(errorhandler)
};
//click response
btnTranslate.addEventListener("click",clickTranslateHandler);