// ==================== MAINTENANCE PAGE SCRIPT ====================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    initPage();
});

/**
 * Initialize page functionality
 */
function initPage() {
    // Add smooth reveal animation on load
    animateOnLoad();
    
    // Add button click handler
    handleButtonClick();
    
    // Add random floating particles
    createParticles();
}

/**
 * Animate elements on page load
 */
function animateOnLoad() {
    const homeData = document.querySelector('.home__data');
    const homeImg = document.querySelector('.home__img');
    
    if (homeData) {
        homeData.style.opacity = '0';
        homeData.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            homeData.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            homeData.style.opacity = '1';
            homeData.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (homeImg) {
        homeImg.style.opacity = '0';
        homeImg.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            homeImg.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            homeImg.style.opacity = '1';
            homeImg.style.transform = 'translateY(0)';
        }, 400);
    }
}

/**
 * Handle refresh button click
 */
function handleButtonClick() {
    const button = document.querySelector('.home__button');
    
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            const originalText = this.textContent;
            this.textContent = 'Загрузка...';
            this.style.pointerEvents = 'none';
            
            // Simulate checking server status
            setTimeout(() => {
                // Refresh the page
                window.location.reload();
            }, 1000);
        });
    }
}

/**
 * Create floating particles for additional visual effect
 */
function createParticles() {
    const particleCount = 5;
    const colors = ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.15)'];
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(colors[i % colors.length]);
    }
}

/**
 * Create a single floating particle
 * @param {string} color - Particle color
 */
function createParticle(color) {
    const particle = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 8 + 4;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    
    // Style particle
    particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${startX}px;
        bottom: -20px;
        pointer-events: none;
        z-index: 0;
        animation: particleFloat ${duration}s linear ${delay}s infinite;
    `;
    
    document.body.appendChild(particle);
    
    // Add keyframe animation if not exists
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Console message for developers
 */
console.log('%c🔧 Технические работы', 'font-size: 20px; font-weight: bold; color: #d4a84b;');
console.log('%cСервер проходит техническое обслуживание. Мы скоро вернёмся!', 'font-size: 14px; color: #666;');
