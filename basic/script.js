var temp = 0;

function dateDisplay(){
    document.getElementById("text").innerHTML = Date();
    funWithBg();
}


function plus(){
    if(document.getElementById("edt1").value != "" || document.getElementById("edt2").value != "" ){
        let x = document.getElementById("edt1").value +" "+ document.getElementById("edt2").value;
        document.getElementById("preview").innerHTML = x;
        funWithBg();
    }
    else{
        document.getElementById("preview").innerHTML = "you dumb!";
        document.body.style.backgroundColor = "red";
    }
}

function plus2(){
    document.getElementById("text2").innerHTML = temp;
    temp++;
    funWithBg();
}

function funWithBg(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+randomColor;
}