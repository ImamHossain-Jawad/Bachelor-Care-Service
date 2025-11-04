// Common navigation functions
function navigateTo(page) {
    // Update the URL without reloading the page
    history.pushState({}, '', page);
    // Load the new page
    window.location.href = page;
}

// Navigation functions
function goHome() {
    navigateTo('home.html');
}

function goMeal() {
    navigateTo('mealplan.html');
}

function goLaundry() {
    navigateTo('laundry.html');
}

function goLogin() {
    navigateTo('Login.html');
}

function logout() {
    localStorage.removeItem('bachelor_current');
    alert('Logged out');
    navigateTo('Login.html');
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    // Load the page from browser history
    window.location.reload();
});