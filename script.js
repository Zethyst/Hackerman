
var input = document.getElementById("user");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("pwd").click();
    }
});

pwd.addEventListener("click", () => {
    let t = document.getElementsByClassName("userbox")[0];
    t.style.display = "none";
    let c = document.getElementsByClassName("container")[0];
    // c.style.width = "65vw";
    c.style.height = "55vh";
    var x = document.getElementById("user").value;

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hack Program...");
        }, 1200);
    });
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Searching [ " + x + " ] username ...");
        }, 2700);
    });
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Username found => [ " + x + " ]");
        }, 6000);
    });
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Password saved in database...");
        }, 10000);
    });
    let p5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Connecting to Instagram...");
        }, 12000);
    });
    let p6 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Connected.");
        }, 16000);
    });
    p1.then((value) => {
        document.getElementById("demo").innerHTML = value;
        var prevHTML = document.getElementById("demo").innerHTML;
    });
    p2.then((value) => {
        let temp = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = temp + "<br><br>" + value;
    });
    p3.then((value) => {
        let temp = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = temp + "<br><br>" + value;
    });
    p4.then((value) => {
        let temp = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = temp + "<br><br>" + value;
    });
    p5.then((value) => {
        let temp = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = temp + "<br><br>" + value;
    });
    p6.then((value) => {
        let temp = document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = temp + "<br><br>" + value;
    });
});