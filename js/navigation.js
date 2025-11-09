// Common navigation functions
function navigateTo(page) {
    window.location.href = page;
}

// Navigation functions
function goHome() {
    // Check if user is logged in
    if (!localStorage.getItem('bachelor_current')) {
        alert('Please log in first');
        navigateTo('Login.html');
        return;
    }
    navigateTo('Home.html');
}

function goMeal() {
    // Check if user is logged in
    if (!localStorage.getItem('bachelor_current')) {
        alert('Please log in first');
        navigateTo('Login.html');
        return;
    }
    navigateTo('mealplan.html');
}

function goLaundry() {
    // Check if user is logged in
    if (!localStorage.getItem('bachelor_current')) {
        alert('Please log in first');
        navigateTo('Login.html');
        return;
    }
    navigateTo('laundry.html');
}

function goLogin() {
    navigateTo('Login.html');
}

function logout() {
    localStorage.removeItem('bachelor_current');
    alert('Logged out successfully');
    navigateTo('Login.html');
}

// Authentication handler for login form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Simple validation for demo
            if (email && password) {
                localStorage.setItem('bachelor_current', JSON.stringify({
                    email: email,
                    rememberMe: rememberMe
                }));
                navigateTo('Home.html');
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});

// Handle back/forward navigation
window.addEventListener('popstate', function(event) {
    // Check if user is logged in when navigating
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['Home.html', 'mealplan.html', 'laundry.html'];
    
    if (protectedPages.includes(currentPage) && !localStorage.getItem('bachelor_current')) {
        navigateTo('Login.html');
    }
});