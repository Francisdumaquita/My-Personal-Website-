// =====================================
// 🔥 FIRE ANIMATION
// =====================================

document.addEventListener('DOMContentLoaded', () => {
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
});

// =====================================
// LOGOUT FUNCTION
// =====================================

function confirmLogout() {
    if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('isLoggedIn');
        location.href = 'login.html';
    }
}

// =====================================
// TAB FUNCTION
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
// GOAL DETAILS
// =====================================

function toggleGoalDetails(id) {
    document.getElementById(id).classList.toggle('active');
}

// =====================================
// IMAGE GALLERY
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
    document.getElementById('lightbox').classList.remove('open');
}

// =====================================
// KEYBOARD CONTROLS
// =====================================

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();

    if (e.key === 'ArrowRight') changeImage(1);

    if (e.key === 'ArrowLeft') changeImage(-1);
});

