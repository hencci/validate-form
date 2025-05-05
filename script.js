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
    const postalPattern = /^[0-9]{5}(-[0-9]{4})?$/; // e.g., 12345 or 12345-6789
    if (!input.value.trim()) {
        showError(input, 'Postal Code is required');
        return false;
    }
    else if (!postalPattern.test(input.value.trim())) {
        showError(input, 'Enter a valid postal code');
        return false;
    }
    else {
        clearError(input);
        return true;
    }
}

function validatePassword(input) {
    if (!input.value.trim()) {
        showError(input, 'Password is required');
        return false;
    }
    else if (input.value.length < 8) {
        showError(input, 'Password must be at least 8 characters');
        return false;
    }
    else {
        clearError(input);
        return true;
    }
}
function validateConfirmPassword(input) {
    if (!input.value.trim()) {
        showError(input, 'Password confirmation is required');
        return false;
    }
    else if (input.value !== password.value) {
        showError(input, 'Passwords do not match');
        return false;
    }
    else {
        clearError(input);
        return true;
    }
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