function validateSearch() {
    if (document.querySelector('#q').value == '') {
        alert("You can't let the search empty!");
        return false;
    }
}

document.querySelector('#form-searching').onsubmit = validateSearch;

var banners = ["Images/HTML-5.png", "Images/CSS-3.png"];
var currentBanner = 0;
function switchBanner() {
    currentBanner = (currentBanner + 1) % 2;
    document.querySelector('.highlight img').src = banners[currentBanner];
}

var timer = setInterval(switchBanner, 3000);

var control = document.querySelector('.pause');
control.onclick = function () {
    if (control.className == 'pause') {
        clearInterval(timer);
        control.className = 'play';
    } else {
        timer = setInterval(switchBanner, 4000);
        control.className = 'pause';
    }
    return false;
};