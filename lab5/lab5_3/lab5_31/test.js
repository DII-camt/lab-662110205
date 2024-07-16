console.log(Math.pow(2, 100));

console.log(Math.PI * Math.pow(1000, 2));

function getRandomNumber() {
    return Math.random() * 3 - 1;
}

console.log(getRandomNumber());

function replaceBad() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replaceAll("bad", "good");
}

for (let i = 0; i < 100; i++) {
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "I am bad.<br />";
}