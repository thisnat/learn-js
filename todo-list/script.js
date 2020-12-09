let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input1");
let content = document.getElementById("content");

addBtn.addEventListener("click",function(){
    if(input.value == ""){
        window.alert("you dumb!");
    }
    else{
        var paragraph = document.createElement('p');
        paragraph.innerText = "- "+input.value;
        content.appendChild(paragraph);
        input.value = "";
    
        paragraph.addEventListener("click",function(){
            let temp = paragraph.innerText;
            if(paragraph.innerText[0] == "✅"){
                window.alert("already done!");
            }
            else{
                paragraph.innerText = "✅" + temp.replace("-","");
            }
        })
    }
})