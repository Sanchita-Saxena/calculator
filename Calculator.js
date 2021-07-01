function input(val)
{
    document.getElementById("text").value+=val
}
function solve()
{
    let x = document.getElementById("text").value
    let y = eval(x)
    document.getElementById("text").value = y
}
function Clr()
{
    document.getElementById("text").value = ""
}
function cancel()
{
    document.getElementById("text").value = document.getElementById("text").value.substring(0,document.getElementById("text").value.length-1);
}

