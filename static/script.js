// Intersection Observer for smooth section animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate children elements
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-scale-in');
                }, index * 150);
            });

            const skillIcons = entry.target.querySelectorAll('.fab');
            skillIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('animate-scale-in');
                    icon.classList.add('animate-float');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Smooth mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    requestAnimationFrame(() => {
        mobileMenu.classList.toggle('show');
    });
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Smooth mobile menu close
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    });
});

// Smooth form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Smooth button state transition
        submitBtn.style.width = submitBtn.offsetWidth + 'px';
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Smooth success animation
            submitBtn.style.backgroundColor = '#10B981';
            submitBtn.textContent = 'Sent Successfully!';
            form.reset();
            
            setTimeout(() => {
                submitBtn.style.backgroundColor = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.width = '';
            }, 2000);
        } catch (error) {
            // Smooth error animation
            submitBtn.style.backgroundColor = '#EF4444';
            submitBtn.textContent = 'Error! Try Again';
            
            setTimeout(() => {
                submitBtn.style.backgroundColor = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.width = '';
            }, 2000);
        }
    });
}

// Smooth typing animation
const smoothTypeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.textContent = '';
    
    return new Promise(resolve => {
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                resolve();
            }
        }, speed);
    });
};

// Initialize smooth typing animation with cursor
const initTypeAnimation = async () => {
    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        heroTitle.style.borderRight = '2px solid #3B82F6';
        await smoothTypeWriter(heroTitle, 'Welcome to My Portfolio');
        heroTitle.style.borderRight = 'none';
    }
};

// Start animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypeAnimation();
    
    // Add float animation to hero section
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.classList.add('animate-fade-in');
    }
});

// Smooth parallax effect
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('#home');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Hover effects for links and buttons
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    menuBtn.innerHTML = isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    mobileMenu.classList.toggle('hidden');
    requestAnimationFrame(() => {
        mobileMenu.classList.toggle('show');
    });
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (isMenuOpen) {
            isMenuOpen = false;
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    });
});

// Typing animation
const typingText = document.querySelector('.typing-text');
const words = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isWaiting = true;
        setTimeout(() => {
            isDeleting = true;
            isWaiting = false;
        }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    
    const typingSpeed = isDeleting ? 100 : isWaiting ? 3000 : 200;
    setTimeout(type, typingSpeed);
}

// Start typing animation
type();

// Parallax effect for hero section
const heroShapes = document.querySelectorAll('.hero-shapes .shape');
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    heroShapes.forEach(shape => {
        const shapeSpeed = shape.getAttribute('data-speed') || 0.1;
        const x = (window.innerWidth - e.pageX * shapeSpeed) / 100;
        const y = (window.innerHeight - e.pageY * shapeSpeed) / 100;
        
        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-card')) {
                const progress = entry.target.querySelector('.progress');
                if (progress) {
                    progress.style.transform = 'translateX(0)';
                }
            }
            
            // Animate project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('section, .skill-card, .project-card').forEach(el => {
    observer.observe(el);
    if (el.classList.contains('project-card')) {
        el.style.transform = 'translateY(50px)';
        el.style.opacity = '0';
    }
});

// Form animations
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Add loading animation
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success animation
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
            submitBtn.style.backgroundColor = '#10B981';
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        } catch (error) {
            // Error animation
            submitBtn.innerHTML = '<i class="fas fa-times"></i> Error!';
            submitBtn.style.backgroundColor = '#EF4444';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// Glitch effect for section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.animation = 'none';
        title.offsetHeight; // Trigger reflow
        title.style.animation = 'glitch 1s linear infinite';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.animation = 'none';
    });
});





