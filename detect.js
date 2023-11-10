var img = new Image();
img.src = 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1234567890/?value=0&guid=ON&script=0';

var timeout = setTimeout(function () {
    displayAdblockPopup();
    disableHeader();
    disableFooter();
}, 6000);

img.onload = function () {
    clearTimeout(timeout);
};

function displayAdblockPopup() {
    var downloadButton = document.querySelector('.downloadbutton');
    
    if (downloadButton) {
        downloadButton.style.backgroundColor = 'red';
        downloadButton.style.cursor = 'not-allowed';
        downloadButton.innerText = 'AdBlock Detected';
        downloadButton.onclick = function () {
            return false; // Prevent click action
        };
    }

    var contents = document.createElement('div');
    contents.className = 'contents';
    contents.innerHTML = '<h2>Looks like you\'re using AdBlock</h2>' +
        '<p>That\'s fine, who doesn\'t? But without funding from advertisements, we can\'t keep our content free.</p>' +
        '<p>Support your smaller creators.</p>';
    document.body.appendChild(contents);
}

function disableHeader() {
    var header = document.querySelector('.header');
    if (header) {
        header.style.pointerEvents = 'none';
    }
}

function disableFooter() {
    var footer = document.querySelector('footer');
    if (footer) {
        footer.style.display = 'none';
    }
}
