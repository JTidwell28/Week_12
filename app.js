let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydowmn", function(e) {
    if (e.keyCode == 13) {
        run(e);
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
    let ran = Math.floor(math.random() * 10);
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
        z.style.color = "blue";
    }
}