/**************variables**************/
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var txtOutput = document.querySelector("#text-output");
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

/**************functions**************/
function errorHandler(error) {
    console.log("Error Occured :(",error);
    alert("Server Error Occured");
}

function constructURL(text) {
    return(serverURL+"?text="+text);
}
function fetchURL(text) {
    fetch(constructURL(text)).then(response => response.json()).then(json => txtOutput.innerText = json.contents.translated).catch(errorHandler);
}

function clickEventHandler() {
    //console.log("clicked");
    //console.log("input", txtInput.value);
    fetchURL(txtInput.value);
}



//convert on click
btnTranslate.addEventListener("click", clickEventHandler)

