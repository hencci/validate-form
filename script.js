const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const highFive = document.getElementById('highFive');

function validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.value.trim()) {
        showError(input, 'Email is required');
        return false;
    }
    else if (!emailPattern.test(input.value.trim())) {
        showError(input, 'Email is not valid');
        return false;
    }
    else {
        clearError(input);
        return true;
    }
}

function validateCountry(input) {
    if (!input.value.trim()) {
        showError(input, 'Country is required');
        return false;
    }
    else {
        clearError(input);
        return true;
    }
}

function validatePostalCode(input) {

}

function validatePassword(input) {
    
}
function validateConfirmPassword(input) {

}

// --- Error Handling ---
function showError(input, message) {
    const errorSpan = input.parentElement.querySelector('.error-message');
    errorSpan.textContent = message;
    input.classList.add('invalid');
}

function clearError(input) {
    const errorSpan = input.parentElement.querySelector('.error-message');
    errorSpan.textContent = '';
    input.classList.remove('invalid');
}

function validateField(event) {
    
}