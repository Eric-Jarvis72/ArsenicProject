const mainDiv = document.getElementById("sidebar");

mainDiv.innerHTML += `<p>TEST</p>`;

function closeSidebar() {
    mainDiv.style.display = "none";
}
