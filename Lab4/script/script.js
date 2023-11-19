
var firstHobby = document.getElementById("first-hobby");
firstHobby.onclick = function(){
    if(firstHobby.className == "orange")
        firstHobby.className = "lime";
    else
        firstHobby.className = "orange";
};

var secondHobby = document.querySelectorAll("li#second-hobby")
secondHobby[0].onclick = function(){
    if(secondHobby[0].className == "orange")
        secondHobby[0].className = "lime";
    else
        secondHobby[0].className = "orange";
};

var imagesContainer = document.getElementById("images-container");
var addButton = document.getElementById("add-button");
addButton.onclick = function(){
    var img = document.createElement("img");
    img.src = "pictures/ivanfran2.jpg";
    imagesContainer.appendChild(img);
}

var increaseButton = document.getElementById("increase-button");
increaseButton.onclick = function(){
    var images = document.querySelectorAll("img");
    images.forEach(image => {
        image.width += 10;
        image.height += 10;
    });
}

var decreaseButton = document.getElementById("decrease-button");
decreaseButton.onclick = function(){
    var images = document.querySelectorAll("img");
    images.forEach(image => {
        image.width -= 10;
        image.height -= 10;
    });
}

var deleteButton = document.getElementById("delete-button");
deleteButton.onclick = function(){
    var images = document.querySelectorAll("img");  
    if(images.length > 1)
    {
        imagesContainer.removeChild(images[images.length -1 ]);
    }
}