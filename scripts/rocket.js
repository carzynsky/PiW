const rocketShip = document.getElementById('rocketship');
const btnStart = document.getElementById('okButtonStart');
const btnFaster = document.getElementById("okButtonFaster");
const btnSlower = document.getElementById('okButtonSlower');

let started = false;
let speed = 100;
let direction = 1;
function initial()
{
    rocketShip.style.top = '150px';
    rocketShip.style.left = '450px';
    rocketShip.style.position = 'absolute';
}

function move()
{
    if(parseInt(rocketShip.style.left) > 850 || parseInt(rocketShip.style.left) < 450)
    {
        // rocketShip.style = "transform: scaleX(-1);";
        direction *= -1;
    }
    console.log(rocketShip.style.left);
    rocketShip.style.left = parseInt(rocketShip.style.left) + 10*direction + 'px';
    setTimeout("move()", speed);

}

btnStart.addEventListener('click', function(){
    if(!started)
    {
        started = true;
        move();
    }
});

btnFaster.addEventListener('click', function(){
    if(speed >= 20)
        speed-=20;
})

btnSlower.addEventListener('click', function(){
    if (speed <= 300)
        speed += 20;
})