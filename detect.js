function delayDownloadButton() {
    var downloadButton = document.querySelector('.downloadbutton');

    if (downloadButton) {
        downloadButton.style.backgroundColor = 'gray';
        downloadButton.style.cursor = 'not-allowed';
        downloadButton.innerText = 'Download (5)';

        var countdown = 5;
        var countdownInterval = setInterval(function () {
            countdown--;
            downloadButton.innerText = 'Download (' + countdown + ')';

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                checkAdBlock();
            }
        }, 1000);
    }
}

function checkAdBlock() {
    var img = new Image();
    img.src = 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1234567890/?value=0&guid=ON&script=0';

    var timeout = setTimeout(function () {
        displayAdblockPopup();
    }, 5000);

    img.onload = function () {
        clearTimeout(timeout);
        enableDownloadButton();
    };
}

function enableDownloadButton() {
    var downloadButton = document.querySelector('.downloadbutton');

    if (downloadButton) {
        downloadButton.style.backgroundColor = 'DodgerBlue';
        downloadButton.style.cursor = 'pointer';
        downloadButton.innerText = 'Download';
        downloadButton.onclick = null; // Remove the onclick prevention
    }
}

function displayAdblockPopup() {
    var downloadButton = document.querySelector('.downloadbutton');

    if (downloadButton) {
        downloadButton.style.backgroundColor = 'red';
        downloadButton.style.cursor = 'not-allowed';
        downloadButton.innerText = 'AdBlock Detected';
        downloadButton.onclick = function () {
            return false;
        };
    }
}
document.addEventListener('DOMContentLoaded', delayDownloadButton);
