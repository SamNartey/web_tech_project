var registerPopup = document.getElementById("registerPopup");
var registerCloseBtn = popup.querySelector(".registerclose");

function openRegisterPopUp() {
    registerPopup.style.display = "block";
}

function closeRegisterPopUp() {
    registerPopup.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == registerPopup) {
        registerPopup.style.display = "none";
    }
}