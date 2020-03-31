const x2 = document.getElementById('x2');
const x = document.getElementById('x');
const free = document.getElementById('free');
const btn = document.getElementById('okButton');
const resultMessage = document.getElementById('result');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

const newLine = '\n';
function compute(a, b, c)
{
    if(a != 0)
    {
        var delta = Math.pow(b,2)-4*a*c;
        if(delta > 0)
        {
            var a1 = ((-1)*b-Math.sqrt(delta))/(2*a);
            var a2 = ((-1)*b+Math.sqrt(delta))/(2*a);
            resultMessage.textContent = 'Równanie ma dwa rozwiązania: ';
            result1.textContent = 'x1 = ' + a1;
            result2.textContent = 'x2 = ' + a2;
        }
        else if(delta == 0)
        {
            var a1 = ((-1)*b)/(2*a);
            resultMessage.textContent = 'Równanie ma jedno rozwiązanie: ';
            result1.textContent = 'x1 = ' + a1;
            result2.textContent = '';
        }
        else
        {
            resultMessage.textContent = 'Równanie nie ma rozwiązań!';
            result1.textContent = '';
            result2.textContent = '';
        }
    }
    else
    {
        if(b == 0)
        {
            if(c == 0)
            {
                resultMessage.textContent = 'Równanie tożsamościowe!';
                result1.textContent = '';
                result2.textContent = '';
            }
            else
            {
                resultMessage.textContent = 'Równanie sprzeczne';
                result1.textContent = '';
                result2.textContent = '';
            }
        }
        else
        {
            var tmp = (-1)*c/b;
            if(tmp == 0) tmp = Math.abs(tmp);
            resultMessage.textContent = 'Równanie jest liniowe i ma jedno rozwiązanie: ';
            result1.textContent = 'x = ' + tmp;
            result2.textContent = '';
        }
    }
}

btn.addEventListener('click', function(){
    compute(Number(x2.value), Number(x.value), Number(free.value));
});