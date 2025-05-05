const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const highFive = document.getElementById('highFive');

function validateEmail(input) {

}

function validateCountry(input) {

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