const body = document.querySelector("body")
const color1 = document.getElementById ("color1")
const color2 = document.getElementById("color2")
const showcolor1 = document.getElementById("showcolor1")
const  showcolor2 = document.getElementById("showcolor2")
const pre = document.getElementById("showCode");
const email = document.getElementById('email')
const password = document.getElementById('password')
const rpassword = document.getElementById('r-password')
const siginin = document.getElementById('sigin-in')
const button = document.getElementById('b')
const div = document.getElementById('div2')
const div2 = document.getElementById('div3')
const divp = document.querySelector(".p1")
const divp2 = document.querySelector(".p2")
const divp3 = document.querySelector(".p3")
const divn = document.querySelector(".background2")
function action(){
    body.style.background =
    "linear-gradient(to right ,"+ color1.value +","+ color2.value+")";
    showcolor1.innerHTML = color1.value
    showcolor2.innerHTML = color2.value
    
};


color1.addEventListener("input" , action)
color2.addEventListener("input" , action)


function copy_text(){
    if(button.style.display != "flex"){
        divn.innerHTML = `<p style = "color:red;">!اول وارد شوید</p>`
    }
    else{
        navigator.clipboard.writeText(color1.value+","+color2.value);
        divp.innerHTML += `<p>${color1.value + color2.value}</p>`
        divp2.innerHTML += `<p>${color1.value + color2.value}</p>`
        divp3.innerHTML += `<p>${color1.value + color2.value}</p>`
        divn.innerHTML = ""
        
    }
}

function sigin(){
    div.style.top = "100px"
}

function submit(){
    if(email.value.length == 0 && password.value.length == 0 && rpassword.value.length == 0){
       div2.innerHTML = `<p style="color:red;">!لطفا اطلاعات خواسته شده را وارد کنید</p>`
    }
    else if(email.value.length <8){
        div2.innerHTML = `<p style="color:red;">!ایمیل خالی است</p>`
    }
    else if(password.value.length <8){
        div2.innerHTML = `<p style="color:red;">!رمز عبور خالی است</p>`
    }
    else if(rpassword.value.length <8){
        div2.innerHTML = `<p style="color:red;">!رمز عبور را تکرار کنید</p>`
    }
    else if(password.value != rpassword.value){
        div2.innerHTML = `<p style="color:red;">!رمز عبور با تکرارش مطابقت ندارد</p>`
    }
    else{
    div.style.top = "-600px"
    button.style.display = "flex"
    siginin.style.display = "none"
    }
}