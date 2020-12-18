let postBtn = document.getElementById("postBtn");
let postText = document.getElementById("postText");
let postName = document.getElementById("postName");
let contentBox = document.getElementById("contentBox");

postBtn.addEventListener("click",function(){
    if(postText.value != "" && postName.value != ""){
        var content = document.createElement("div");
        var likeBtn = document.createElement("button");
        var title = document.createElement("h1");
        var post = document.createElement("p");
        var date = document.createElement("h4");
        var count = 0;

        content.setAttribute("class","content");
        title.innerHTML = postName.value;
        post.innerHTML = postText.value;
        date.innerHTML = Date();
        likeBtn.innerHTML = "like(0)"
        likeBtn.addEventListener("click",function(){
            count++;
            this.innerHTML = "like("+ count + ")";
        });

        content.appendChild(likeBtn);
        content.appendChild(title);
        content.appendChild(post);
        content.appendChild(date);
        contentBox.appendChild(content);
    }
});