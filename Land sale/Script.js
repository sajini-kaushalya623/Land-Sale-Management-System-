// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== LAND DETAILS FUNCTION ==========
function showLandDetails(location, size, price, status) {
    alert(`Land Details:\n\nLocation: ${location}\nSize: ${size}\nPrice: ${price}\nStatus: ${status}\n\nFor more information, please contact us!`);
}

// ========== FORM SUBMISSION ==========
const landForm = document.getElementById('landRegistrationForm');

landForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        ownerName: document.getElementById('ownerName').value,
        landLocation: document.getElementById('landLocation').value,
        landSize: document.getElementById('landSize').value,
        price: document.getElementById('price').value,
        contactNumber: document.getElementById('contactNumber').value
    };

    // Display success message
    alert(`Land Registration Successful!\n\nOwner: ${formData.ownerName}\nLocation: ${formData.landLocation}\nSize: ${formData.landSize}\nPrice: ${formData.price}\nContact: ${formData.contactNumber}\n\nThank you for registering your land with us!`);
    
    // Reset form
    landForm.reset();
});

// ========== SCROLL TO TOP ON PAGE LOAD ==========
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ========== HEADER SCROLL EFFECT ==========
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }

    lastScroll = currentScroll;
});