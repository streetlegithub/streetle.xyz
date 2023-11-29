document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-wrapper img');
    let currentIndex = 0;

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    const imageIndicators = document.querySelector('.image-indicators');
    for (let i = 0; i < images.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', function () {
            currentIndex = i;
            showImage(currentIndex);
            updateIndicators();
        });
        imageIndicators.appendChild(indicator);
    }
    updateIndicators();

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const imageWrapper = document.querySelector('.image-wrapper');

    function showImage(index) {
        const translateValue = -index * 100 + '%';
        imageWrapper.style.transform = 'translateX(' + translateValue + ')';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        updateIndicators();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        updateIndicators();
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
});
