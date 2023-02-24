// variables + functions + local storage
let clicks = 0

// load data from local storage
function load() {
    clicks = parseInt(localStorage.getItem("clicks"))
    document.getElementById("clicks").innerHTML = clicks;
}

// save data in local storage
function save() {
    localStorage.setItem("clicks", clicks)
    document.getElementById("clicks").innerHTML = clicks;
}

// increase click count + save in local storage
function increase() {
    clicks++
    document.getElementById("clicks").innerHTML = clicks;
}

// decrease click count + save in local storage
function decrease() {
    clicks--
    document.getElementById("clicks").innerHTML = clicks;
}

// reset click count + save in local storage
function reset() {
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
}