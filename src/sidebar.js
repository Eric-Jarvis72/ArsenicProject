const mainDiv = document.getElementById("sidebar");
const closeButton = document.getElementById("close");

function closeSidebar() {
    let marginVal = 50;
    let marginInc = 1; 
    let ti = setInterval(() => {
        if (marginVal >= 100) {
            clearInterval(ti);
        }
        sidebar.style.margin = `0% 0% 0% ${marginVal}%`;
        marginVal = marginVal + marginInc;
        if (marginInc > .01) {
            marginInc = marginInc - .01;
        }
    }, 10);
}

closeButton.addEventListener('click', () => {
    closeSidebar();
});
