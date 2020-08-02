//Generate Pin
function getPin() {
    document.getElementById("generatePin").value = Math.floor(1000 + Math.random() * 9000);
}