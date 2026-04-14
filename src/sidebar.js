const mainDiv = document.getElementById("sidebar");

mainDiv.innerHTML += `<p>TEST</p>`;

function closeSidebar() {
    marginVal = 50;
    let ti = setInterval(() => {
        if (marginVal == 100) {
            clearInterval(ti);
        }
        sidebar.style.margin = `0% 0% 0% ${marginVal}%`;
        marginVal = marginVal + 1;
    }, 10);
}
