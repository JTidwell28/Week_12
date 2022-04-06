let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        run (e);
    }
});

userNum.focus();

let counter = 0;

function run(){
    randumNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter")

    if (a!= b) {
        z.innerHTML = "Number are not the same. Computer got "  + b + ", and user got " + a;
        z.style.color = "purple";
        z.style.backgroundColor = "blue";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You've tried " + counter + " times."
        c.style.color = "pink";
        c.style.backgroundColor = "blue";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "red";
    
    } else if( a == b) {
        z.innerHTML = "The numbers are the same. Computer got " + b +", and user got " + a;
        z.style.color = "purple";
        z.style.backgroundColor = "blue";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times to get it right!"
        c.style.color = "pink";
        c.style.backgroundColor = "blue";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "green"
    }

    resetInput();

}

function resetInput() {
    document.getElementById("getNumber").value = "";
}