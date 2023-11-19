
var ivanFranIntro = document.getElementById("ivanfran-intro");
ivanFranIntro.onclick = function(){
    if(ivanFranIntro.className == "orange")
        ivanFranIntro.className = "lime";
    else
        ivanFranIntro.className = "orange";
};

var ivanFranEnding = document.querySelectorAll("p#ivanfran-ending")
ivanFranEnding[0].onclick = function(){
    if(ivanFranEnding[0].className == "orange")
        ivanFranEnding[0].className = "lime";
    else
        ivanFranEnding[0].className = "orange";
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