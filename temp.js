var btn = document.getElementById('gbtn');
window.onscroll = function()
{
    var x = window.scrollY;
if(x > 650)
{
 btn.style.visibility = 'visible';
}
else
{
    btn.style.visibility = 'hidden';
}
}
function goup()
{
    window.scrollTo(0,0);
}
