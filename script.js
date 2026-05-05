// ===== MOBILE NAVBAR TOGGLE =====
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active-link');
        }
    });

    // Hide navbar on scroll for mobile (close menu if open)
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
        // Keep it open - user controls it
    }
});

// ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
document.addEventListener('click', (e) => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    }
});

// ===== LIGHTBOX FUNCTIONALITY =====
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
    // Use timeout to allow display:flex to apply before adding opacity class
    setTimeout(() => {
        lightbox.classList.add('show');
    }, 10);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.getElementById('lightbox-img').src = '';
    }, 300);
}

// Add click event to all gallery images
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            openLightbox(e.target.src);
        });
    });
});
