document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    const isDarkModeStored = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkModeStored);

    const addons = document.querySelectorAll('.addon');
    addons.forEach(addon => {
        addon.classList.toggle('dark-mode', isDarkModeStored);
    });

    darkModeToggle.classList.toggle('dark-mode', isDarkModeStored);

    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌑';

    darkModeToggle.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');

        darkModeToggle.classList.toggle('dark-mode');

        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌑';
    }
});
