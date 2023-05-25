var body = document.querySelector("body")
var color1 = document.getElementById ("color1")
var color2 = document.getElementById("color2")
var showcolor1 = document.getElementById("showcolor1")
var showcolor2 = document.getElementById("showcolor2")
var pre = document.getElementById("showCode");
function action(){
    body.style.background =
    "linear-gradient(to right ,"+ color1.value +","+ color2.value+")";
    showcolor1.innerHTML = color1.value
    showcolor2.innerHTML = color2.value
    
};


color1.addEventListener("input" , action)
color2.addEventListener("input" , action)


function copy_text(){
    navigator.clipboard.writeText(color1.value+","+color2.value);
    alert('متن کپی شد');
}
