const blinkText = document.querySelector('.blink');

if (blinkText) {
let blink = setInterval(function () {
    blinkText.style.visibility = (blinkText.style.visibility == 'hidden' ? '' : 'hidden');
}, 600);
}
