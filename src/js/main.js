/**
 * Navigates to the specified URL.
 * @param {string} urlLink - The URL to navigate to. Defaults to an empty string.
 */
const navigate = function (urlLink = "") {
    window.location.href = urlLink;
};

// Variable to track the navigation state
let isNavOpen = false;

/**
 * Toggles the navigation menu open and closed.
 */
const manageNav = function () {
    // Select the navigation element
    const navElement = document.querySelector(".apsara_nav");

    if (!isNavOpen) {
        // Open the navigation menu
        navElement.style.width = "100%";
    } else {
        // Close the navigation menu
        navElement.style.width = "0%";
    }

    // Toggle the navigation state
    isNavOpen = !isNavOpen;

};

