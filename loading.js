document.addEventListener("DOMContentLoaded", function () {
    // Simulate ad loading (replace this with your actual ad-loading logic)
    simulateAdLoading();
});

function simulateAdLoading() {
    // Show loading spinner
    document.getElementById("loading-spinner").classList.remove("hidden");

    // Simulate ad loading time (replace this with your actual ad-loading time)
    setTimeout(function () {
        // Hide loading spinner when ads are loaded
        document.getElementById("loading-spinner").classList.add("hidden");
    }, 2000); // Replace 2000 with the actual loading time of your ads
}
