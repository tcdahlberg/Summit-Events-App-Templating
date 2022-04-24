const loadReady = (callback) => {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

function fadein() {
    let fadeWrapper = document.getElementById('backPage');
    fadeWrapper.style.display = "none";
    return true;
}

function fadeout() {
    let fadeWrapper = document.getElementById('backPage');
    fadeWrapper.style.display = "block";
    return true;
}