// =====================================
// 🔥 FIRE ANIMATION
// =====================================

document.addEventListener('DOMContentLoaded', () => {

    // FIRE EFFECT
    if (!document.querySelector('.fire-container')) {
        let fire = document.createElement('div');
        fire.className = 'fire-container';
        document.body.appendChild(fire);

        for (let i = 0; i < 40; i++) {
            let ember = document.createElement('span');

            ember.className = 'ember';
            ember.textContent = '🔥';
            ember.style.left = Math.random() * 100 + '%';
            ember.style.fontSize = (10 + Math.random() * 15) + 'px';
            ember.style.animationDuration = (5 + Math.random() * 8) + 's';
            ember.style.animationDelay = (-Math.random() * 10) + 's';

            fire.appendChild(ember);
        }
    }

    // LOGIN FORM SUBMIT
    const authForm = document.getElementById('authForm');

    if (authForm) {
        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmit();
        });
    }

    // PASSWORD MATCH CHECKER
    const confirmPassword = document.getElementById('confirmPassword');

    if (confirmPassword) {
        confirmPassword.addEventListener('input', checkPasswordMatch);
    }

});


// =====================================
// 🔥 LOGIN AND SIGN UP SYSTEM
// =====================================

let isLogin = true;

const DEFAULT_USERNAME = "Francis";
const DEFAULT_PASSWORD = "Franss#20";

function toggleForm() {

    const formTitle = document.getElementById('formTitle');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    const submitButton = document.getElementById('submitButton');
    const toggleText = document.getElementById('toggleText');
    const showPasswordContainer = document.getElementById('showPasswordContainer');

    if (!formTitle) return;

    document.getElementById('authForm').reset();

    document.getElementById('errorMessage').textContent = '';
    document.getElementById('passwordMatchMessage').style.display = 'none';

    isLogin = !isLogin;

    if (!isLogin) {

        formTitle.textContent = '🔥 Sign Up';

        confirmPassword.style.display = 'block';
        confirmPasswordLabel.style.display = 'block';
        confirmPassword.required = true;

        submitButton.textContent = 'Sign Up';

        showPasswordContainer.style.visibility = 'hidden';

        toggleText.innerHTML =
            'Already have an account? <a href="#" onclick="toggleForm(); return false;">Login</a>';

    } else {

        formTitle.textContent = '🔥 Login';

        confirmPassword.style.display = 'none';
        confirmPasswordLabel.style.display = 'none';
        confirmPassword.required = false;

        submitButton.textContent = 'Login';

        showPasswordContainer.style.visibility = 'visible';

        toggleText.innerHTML =
            'Don\'t have an account? <a href="#" onclick="toggleForm(); return false;">Sign Up</a>';
    }
}


// =====================================
// 🔥 HANDLE LOGIN AND SIGN UP
// =====================================

function handleSubmit() {

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    if (!username || !password) {
        errorMessage.textContent = 'Please fill out all fields.';
        return;
    }

    if (isLogin) {

        // DEFAULT ACCOUNT
        let savedUsername = localStorage.getItem('registeredUsername');
        let savedPassword = localStorage.getItem('registeredPassword');

        let validDefault =
            username === DEFAULT_USERNAME &&
            password === DEFAULT_PASSWORD;

        let validRegistered =
            username === savedUsername &&
            password === savedPassword &&
            savedUsername !== null;

        if (validDefault || validRegistered) {

            localStorage.setItem('isLoggedIn', 'true');

            alert('🔥 Welcome ' + username + '! Successfully logged in!');

            window.location.href = 'index.html';

        } else {

            errorMessage.textContent = 'Invalid username or password!';

        }

    } else {

        const confirmPassword =
            document.getElementById('confirmPassword').value;

        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match!';
            return;
        }

        // SAVE DEMO ACCOUNT
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);

        alert('🔥 Account created successfully! You can now Login.');

        toggleForm();
    }
}


// =====================================
// 🔥 SHOW PASSWORD
// =====================================

function togglePasswordVisibility() {

    const passwordField = document.getElementById('password');

    if (passwordField) {
        passwordField.type =
            passwordField.type === 'password' ? 'text' : 'password';
    }
}


// =====================================
// 🔥 PASSWORD MATCH CHECKER
// =====================================

function checkPasswordMatch() {

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('passwordMatchMessage');

    if (!message) return;

    if (confirmPassword === '') {

        message.style.display = 'none';

    } else if (confirmPassword === password) {

        message.textContent = '✓ Passwords match';
        message.style.color = '#ffcc00';
        message.style.display = 'block';

    } else {

        message.textContent = '✗ Passwords do not match';
        message.style.color = '#ff4444';
        message.style.display = 'block';
    }
}


// =====================================
// 🔥 LOGOUT FUNCTION
// =====================================

function confirmLogout() {

    if (confirm('Are you sure you want to log out?')) {

        localStorage.removeItem('isLoggedIn');

        location.href = 'Login.html';
    }
}


// =====================================
// 🔥 TAB FUNCTION
// =====================================

function openTab(e, id) {

    document.querySelectorAll('.tabcontent').forEach(x => {
        x.style.display = 'none';
    });

    document.querySelectorAll('.tablinks').forEach(x => {
        x.classList.remove('active');
    });

    document.getElementById(id).style.display = 'block';
    e.currentTarget.classList.add('active');
}


// =====================================
// 🔥 GOAL DETAILS
// =====================================

function toggleGoalDetails(id) {

    const element = document.getElementById(id);

    if (element) {
        element.classList.toggle('active');
    }
}


// =====================================
// 🔥 IMAGE GALLERY
// =====================================

let currentImageIndex = 0;

function galleryImages() {
    return [...document.querySelectorAll('.thumbnail')];
}

function openLightbox(i) {

    currentImageIndex = i;

    updateLightbox();

    document.getElementById('lightbox').classList.add('open');
}

function updateLightbox() {

    let images = galleryImages();

    if (!images.length) return;

    currentImageIndex =
        (currentImageIndex + images.length) % images.length;

    let img = images[currentImageIndex];

    document.getElementById('lightboxImage').src = img.src;
    document.getElementById('lightboxImage').alt = img.alt;

    document.getElementById('lightboxCount').textContent =
        (currentImageIndex + 1) + ' / ' + images.length;
}

function changeImage(d) {

    currentImageIndex += d;

    updateLightbox();
}

function closeLightbox() {

    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        lightbox.classList.remove('open');
    }
}


// =====================================
// 🔥 KEYBOARD CONTROLS
// =====================================

document.addEventListener('keydown', e => {

    if (e.key === 'Escape') closeLightbox();

    if (e.key === 'ArrowRight') changeImage(1);

    if (e.key === 'ArrowLeft') changeImage(-1);

});
