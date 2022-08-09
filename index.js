let count=0;
var g=0;
function increase()
{
    count++;
    document.getElementById("Digit").innerHTML=count;
}
function decrease()
{
    if(count>0)
    {
    count--;
    document.getElementById("Digit").innerHTML=count;
    }
}
function reset()
{
    count=0;
    document.getElementById("Digit").innerHTML=count;
}