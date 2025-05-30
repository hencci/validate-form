const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const highFive = document.getElementById('highFive');

function isEmpty(input) {
    return input.value.trim() === '';
}

function validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (isEmpty(input)) {
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
    if (isEmpty(input)) {
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
    if (isEmpty(input)) {
        showError(input, 'Postal Code is required');
        return false;
    }
    else if (!postalPattern.test(input.value.trim())) {
        showError(input, 'Enter a valid postal code (12345 or 12345-6789)');
        return false;
    }
    else {
        clearError(input);
        return true;
    }
}

function validatePassword(input) {
    if (isEmpty(input)) {
        showError(input, 'Password is required');
        return false;
    }

    const passwordPatterns = [
        { test: /.{8,}/, message: 'at least 8 characters' },
        { test: /[a-z]/, message: 'at least 1 lowercase letter' },
        { test: /[A-Z]/, message: 'at least 1 uppercase letter' },
        { test: /[0-9]/, message: 'at least 1 number' },
        { test: /[!@#$%^&*(),.?":{}|<>]/, message: 'At least 1 special character' }
    ];

    const failedPatterns = passwordPatterns.filter(passwordPattern => !passwordPattern.test.test(input.value));

    if (failedPatterns.length > 0) {
        const messages = failedPatterns.map(passwordPattern => passwordPattern.message);
        showError(input, `Password must have: ${messages.join(', ')}`);
        return false;
    }
    else {
        clearError(input);
        return true;
    }
}

function validateConfirmPassword(input) {
    if (isEmpty(input)) {
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
    switch (event.target.id) {
        case 'email':
            validateEmail(event.target);
            break;
        case 'country':
            validateCountry(event.target);
            break;
        case 'postal':
            validatePostalCode(event.target);
            break;
        case 'password':
            validatePassword(event.target);
            break;
        case 'confirmPassword':
            validateConfirmPassword(event.target);
            break;
        default:
            return true;
    }
}

// Attach event listeners
email.addEventListener('blur', validateField);
country.addEventListener('blur', validateField);
postal.addEventListener('blur', validateField);
password.addEventListener('blur', validateField);
confirmPassword.addEventListener('blur', validateField);

// --- Validate Entire Form on Submit ---
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isCountryValid = validateCountry(country);
    const isPostalValid = validatePostalCode(postal);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (isEmailValid && isCountryValid && isPostalValid && isPasswordValid && isConfirmPasswordValid) {
        highFive.style.display = 'block';
    }
    else {
        highFive.style.display = 'none';
        alert('Please fix the errors before submitting');
    }
});