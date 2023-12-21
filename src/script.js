const body = document.querySelector("body")
//color input
const color1 = document.getElementById ("color1")
const color2 = document.getElementById("color2")
//
// show color in body
const showcolor1 = document.getElementById("showcolor1")
const  showcolor2 = document.getElementById("showcolor2")
//
//show code color in p
const pre = document.getElementById("showCode");
//
//div sign in 
const div = document.getElementById('div2')
//a place for ereror sign in
const div2 = document.getElementById('div3')
//
//inputs for sgin in
const email = document.getElementById('email')
const password = document.getElementById('password')
const rpassword = document.getElementById('r-password')
//
//Element for sign in
const siginin = document.getElementById('sigin-in')
const siginin2 = document.getElementById('sigin-in2')
const button = document.getElementById('b')
const eye = document.getElementById('eye')
const eye2 = document.getElementById('eye2')
//
// set by querySelector  erorr for first sign in
const divn = document.querySelector(".background2")
//
// change color by input
function action(){
    if(button.style.display != "flex"){
        showcolor1.innerHTML=  `<p style = "color:red;">!اول وارد شوید</p>`
        showcolor2.innerHTML=  `<p style = "color:red;">!اول وارد شوید</p>`

    }
    else{
    body.style.background =
    "linear-gradient(to right ,"+ color1.value +","+ color2.value+")";
    showcolor1.innerHTML = color1.value
    showcolor2.innerHTML = color2.value
    }
    
};


color1.addEventListener("input" , action)
color2.addEventListener("input" , action)

//
// error for sign in by p
function copy_text(){
    if(button.style.display != "flex"){
        divn.innerHTML = `<p style = "color:red;">!اول وارد شوید</p>`
    }
    else{
        navigator.clipboard.writeText(color1.value+","+color2.value);
        alert("کپی شد")
        divn.innerHTML = ""
    }
}
//
// code a div for sign in 
function sigin(){
    div.style.top = "100px"
}
//
// Code a div for login errors
function submit(){
    if(email.value.length == 0 && password.value.length == 0 && rpassword.value.length == 0){
       div2.innerHTML = `<p style="color:red;">!لطفا اطلاعات خواسته شده را وارد کنید</p>`
    }
    else if(email.value.length = 0){
        div2.innerHTML = `<p style="color:red;">!ایمیل خالی است</p>`
    }
    else if(password.value.length = 0 ){
        div2.innerHTML = `<p style="color:red;">!رمز عبور خالی است</p>`
    }
    else if(rpassword.value.length = 0){
        div2.innerHTML = `<p style="color:red;">!رمز عبور را تکرار کنید</p>`
    }
    else if(email.value.length <8){
        div2.innerHTML = `<p style="color:red;">!ایمیل کمتر از 8 تا است</p>`
    }
    else if(password.value.length <8  ){
        div2.innerHTML = `<p style="color:red;">!رمز عبور کمتر از 8 تا است</p>`
    }

    else if(password.value != rpassword.value){
        div2.innerHTML = `<p style="color:red;">!رمز عبور با تکرارش مطابقت ندارد</p>`
    }
    else{
    div.style.top = "-700px"
    button.style.display = "flex"
    siginin.style.display = "none"
    siginin2.style.display = "none"
    }
}
//
//code a img for type password
function eyeShow() {
    if(password.type == "password"){
        eye.src="./src/eye.svg"
        password.type = "text"
    }
    
   else if(password.type == "text"){
        eye.src="./src/eye-slash.svg"
        password.type = "password"
    }
}
function eyeShow2() {
    if(rpassword.type == "password"){
        eye2.src="./src/eye.svg"
        rpassword.type = "text"
    }
    
   else if(rpassword.type == "text"){
        eye2.src="./src/eye-slash.svg"
        rpassword.type = "password"
    }
}
//
