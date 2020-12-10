var url = "https://pokeapi.co/api/v2/pokemon/";
let searchBtn = document.getElementById("searchBtn");
let inputText = document.getElementById("inputText");
let content = document.getElementById("content");

class HttpClient {
    constructor() {
        this.get = function (aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function () {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            };
            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.onloadend = function () {
                if (anHttpRequest.status == 404) {
                    window.alert("you dumb");
                }
            };
            anHttpRequest.send(null);
        };
    }
}

searchBtn.addEventListener("click",function(){
    var client = new HttpClient();
    let requestUrl = url + inputText.value;
    client.get(requestUrl,function(response){
        //white space check
        if(inputText.value != "" && inputText.value.replace(/^\s+|\s+$/g, '').length != 0){
            //remove all child
            while (content.firstChild) {
                content.firstChild.remove()
            }
            //clear input text
            inputText.value = "";

            var arr = JSON.parse(response);
            var img = document.createElement("img");
            var pname = document.createElement("h2");
            var ptype = document.createElement("p");

            //pokemon img
            img.setAttribute("src",arr["sprites"]["other"]["official-artwork"]["front_default"]);
            img.setAttribute("width",250);
            img.setAttribute("height",250);

            //pokemon name
            pname.innerText = "No." + arr["id"] + " " + arr["name"].charAt(0).toUpperCase() + arr["name"].slice(1);

            //pokemon type(s)
            if (arr["types"].length == 1){
                ptype.innerText = arr["types"][0]["type"]["name"];
            }
            else{
                ptype.innerText = arr["types"][0]["type"]["name"] + " / " + arr["types"][1]["type"]["name"];;
            }

            content.appendChild(img);
            content.appendChild(pname);
            content.appendChild(ptype);
        }
        else{
            window.alert("you dumb");
        }
    })
})        