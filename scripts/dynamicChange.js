const refPic = document.getElementById('ref-pic');

let index = 0;

refPic.addEventListener('mouseover', function(){
    index = (index + 1) % 5;
    console.log(index);
    document.getElementById("pic").src = "../img/" + index + ".png";
})

refPic.addEventListener('mouseout', function(){
    console.log('out :(');
})