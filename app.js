/**************variables**************/

var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#text-input");

var txtOutput = document.querySelector("#text-output");

/**************functions**************/

function clickEventHandler() {
    //console.log("clicked");
    //console.log("input", txtInput.value);
    txtOutput.innerText = txtInput.value;
}

//convert on click
btnTranslate.addEventListener("click", clickEventHandler)

