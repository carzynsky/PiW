const scoreInfo = document.getElementById('score-info');
const actionMsg = document.getElementById('action-msg');
let monsters = document.querySelectorAll('.monster');

let directionsX = [1,1,1];

let score = 0;

function move()
{
    for(x=0; x<monsters.length; x++)
    {
        if(parseInt(monsters[x].style.left) > 930 || parseInt(monsters[x].style.left) < 550)
        {
            directionsX[x] *= -1;
        }
        else
        {
            if(Math.random() >= 0.6)
            {
                directionsX[x] *= -1;
            }
        }
        monsters[x].style.left = parseInt(monsters[x].style.left) + 10*directionsX[x] + 'px';
        console.log(monsters[x].style.top);
        if(parseInt(monsters[x].style.top) > 370)
            monsters[x].style.top = parseInt(monsters[x].style.top) + (Math.floor(Math.random()*10)+1)*(-1) + 'px';
        else if(parseInt(monsters[x].style.top) < 150)
            monsters[x].style.top = parseInt(monsters[x].style.top) + (Math.floor(Math.random()*10)+1)*2 + 'px';
        else
        {
            if(Math.random() >= 0.6)
            {
                monsters[x].style.top = parseInt(monsters[x].style.top) + (Math.floor(Math.random()*10)+1)*(-2) + 'px';
            }
            else
            {
                monsters[x].style.top = parseInt(monsters[x].style.top) + (Math.floor(Math.random()*10)+1) + 'px';
            }
        }
        if(Math.random() > 0.9)
        {
            var tmp = monsters[x].src;
            if(tmp.includes('monster1'))
            {
                monsters[x].src = tmp.replace("monster1", "monster2");
            }
            else
            {
                monsters[x].src = tmp.replace("monster2", "monster1");
            }
        }
    }

    scoreInfo.textContent = 'Wynik: ' + score;
    setTimeout("move()", 150);
}


for (i=0; i<monsters.length; i++)
{
    monsters[i].addEventListener('click', function(e){
        if(e.target.src.includes('monster1'))
        {
            actionMsg.style.color = 'rgb(0,255,0)';
            actionMsg.textContent = 'Brawo!';
            score += 100;
        }
        else
        {
            actionMsg.style.color = 'rgb(255,0,0)';
            actionMsg.textContent = 'Uważaj!';
            score -= 150;
        }
    });
}




