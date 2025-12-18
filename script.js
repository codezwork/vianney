// Smooth scrolling for navigation links
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

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.1)';
  }
});

// Calendar functionality
const calendarDates = document.querySelectorAll('.calendar-date');
calendarDates.forEach(date => {
  date.addEventListener('click', () => {
    calendarDates.forEach(d => d.classList.remove('active'));
    date.classList.add('active');
  });
});

// Audio player functionality
const playBtn = document.querySelector('.play-btn');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    playBtn.textContent = '▶';
    isPlaying = false;
  } else {
    playBtn.textContent = '⏸';
    isPlaying = true;
  }
});

// Pagination dots functionality
const dots = document.querySelectorAll('.pagination-dots .dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.news-card, .feature-card, .about-text, .about-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Mobile menu toggle (if needed)
const mobileMenuToggle = () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('mobile-open');
};

// Add mobile menu button if screen is small
if (window.innerWidth <= 768) {
  const header = document.querySelector('.header .container');
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.innerHTML = '☰';
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: block;
  `;
  mobileMenuBtn.addEventListener('click', mobileMenuToggle);
  header.appendChild(mobileMenuBtn);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Form validation (if forms are added later)
const validateForm = (form) => {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#ff4444';
      isValid = false;
    } else {
      input.style.borderColor = '#ddd';
    }
  });
  
  return isValid;
};

// Loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s ease';
});

// Set initial body opacity
document.body.style.opacity = '0';
