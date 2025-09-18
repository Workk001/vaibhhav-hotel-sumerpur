// Advanced Animations and Micro-interactions for Vaibhav Hotel

document.addEventListener('DOMContentLoaded', function() {
    initAdvancedAnimations();
    initParticleEffects();
    initMorphingAnimations();
    initScrollTriggers();
    initHoverEffects();
    initLoadingAnimations();
});

// Advanced animations - Disabled
function initAdvancedAnimations() {
    // Advanced animations disabled as requested
    return;
}

// Particle effects
function initParticleEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    hero.appendChild(particleContainer);

    // Create particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000);
    }

    // Create particles periodically
    setInterval(createParticle, 300);
}

// Morphing animations - Disabled
function initMorphingAnimations() {
    // All morphing animations disabled as requested
    return;
}

// Scroll-triggered animations - Disabled
function initScrollTriggers() {
    // Scroll-triggered animations disabled as requested
    return;
}

// Advanced hover effects - Disabled
function initHoverEffects() {
    // All hover effects disabled as requested
    return;
}

// Loading animations
function initLoadingAnimations() {
    // Page load animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animate hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 1s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 500);
        }
    });

    // Button loading states
    const formButtons = document.querySelectorAll('button[type="submit"]');
    formButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('loading');
            button.innerHTML = '<div class="loading-spinner"></div> Sending...';
            
            // Reset after 3 seconds
            setTimeout(() => {
                button.classList.remove('loading');
                button.innerHTML = 'Book via WhatsApp';
            }, 3000);
        });
    });
}

// Add custom CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInFromBottom {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
    
    .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
    }
    
    .particle {
        animation: float 3s ease-in-out infinite;
    }
    
    .loaded .hero-content {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loading {
        pointer-events: none;
        opacity: 0.7;
    }
    
    .loading-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-right: 10px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .room-card, .gallery-item, .feature {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .glass-effect {
        transition: all 0.3s ease;
    }
    
    .btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .section-title, .hero-title {
        transition: all 0.3s ease;
    }
    
    .room-image img, .gallery-item img {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(animationStyles);

// Performance optimization for animations
function optimizeAnimations() {
    // Use requestAnimationFrame for smooth animations
    let ticking = false;
    
    function updateAnimations() {
        // Update any frame-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Throttle scroll events
    window.addEventListener('scroll', requestTick);
}

// Initialize performance optimizations
optimizeAnimations();

// Add intersection observer for performance
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize intersection observer
initIntersectionObserver();

// Add reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}
