const options = document.getElementsByClassName('pic');
const mainPicture = document.getElementById('main-pic');

for(i=0; i<options.length; i++)
{
    options[i].addEventListener('mouseover', function(e){
        var str = e.target.src;
        e.target.src = str.replace("out.gif", "over.gif");
        var index = str.search("out.gif");
        mainPicture.src = str.substring(0,index) + ".gif";
    });
    options[i].addEventListener('mouseout', function(e){
        var str = e.target.src;
        e.target.src = str.replace("over.gif", "out.gif");
    });
}