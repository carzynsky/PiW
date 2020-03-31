const refPic = document.getElementById('ref-pic');


refPic.addEventListener('mouseover', function(){
    document.getElementById("pic").src = "../img/1.png";
})

refPic.addEventListener('mouseout', function(){
    document.getElementById("pic").src = "../img/0.png";
})