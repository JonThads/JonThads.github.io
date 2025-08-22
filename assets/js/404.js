// Coming Soon Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initInteractiveElements();
    initProgressBar();
    initKeyboardNavigation();
    initAccessibilityFeatures();
    initPageAnimations();
});

/**
 * Interactive Elements
 */
function initInteractiveElements() {
    // Coming soon icon click effect
    const comingSoonIcon = document.querySelector('.coming-soon-icon');
    
    if (comingSoonIcon) {
        comingSoonIcon.addEventListener('click', function() {
            // Reset animation
            this.style.animation = 'none';
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.animation = 'bounce 3s ease-in-out infinite';
                this.style.transform = '';
            }, 150);
            
            // Create rocket trail effect
            createRocketTrail(this);
        });

        // Enhanced hover effect
        comingSoonIcon.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) drop-shadow(0 0 20px rgba(74, 144, 226, 0.3))';
        });

        comingSoonIcon.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    }

    // CTA button effects with professional animations
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });

        // Add click ripple effect
        button.addEventListener('click', function(e) {
            createRippleEffect(this, e);
        });
    });

    // Social links with smooth animations
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * Progress Bar Animation
 */
function initProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (!progressFill || !progressText) return;

    let progress = 0;
    const targetProgress = 88; // Professional completion percentage
    const increment = 0.3;
    const messages = [
        'Initializing...',
        'Loading assets...',
        'Compiling code...',
        'Testing features...',
        'Optimizing performance...',
        'Final touches...',
        'Almost ready!',
        'Getting awesome!'
    ];

    // Animate progress bar with realistic loading
    const progressInterval = setInterval(() => {
        progress += Math.random() * increment + 0.2;
        
        if (progress >= targetProgress) {
            progress = targetProgress;
            clearInterval(progressInterval);
            
            // Completion effects
            setTimeout(() => {
                progressFill.style.boxShadow = '0 0 15px rgba(0, 63, 127, 0.5)';
                progressText.textContent = 'Something awesome is loading!';
                progressText.style.color = 'var(--ateneo-blue)';
                progressText.style.fontWeight = '700';
            }, 500);
        }
        
        progressFill.style.width = progress + '%';
        
        // Update progress text with dynamic messages
        const messageIndex = Math.floor((progress / targetProgress) * messages.length);
        if (messages[messageIndex]) {
            progressText.textContent = messages[Math.min(messageIndex, messages.length - 1)];
        }
    }, 80);

    // Add periodic pulse effect when complete
    setInterval(() => {
        if (progress >= targetProgress) {
            progressFill.style.animation = 'pulse 0.8s ease-in-out';
            setTimeout(() => {
                progressFill.style.animation = '';
            }, 800);
        }
    }, 4000);
}

/**
 * Create Rocket Trail Effect
 */
function createRocketTrail(element) {
    const trailCount = 12;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'rocket-trail';
        trail.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, var(--ateneo-light-blue), var(--accent-cyan));
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${centerX - 4}px;
            top: ${centerY - 4}px;
            box-shadow: 0 0 8px var(--ateneo-light-blue);
        `;
        
        document.body.appendChild(trail);
        
        // Animate trail particles
        const angle = (i * 30) * (Math.PI / 180);
        const distance = 60 + Math.random() * 40;
        const duration = 1000 + Math.random() * 500;
        
        trail.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).addEventListener('finish', () => {
            trail.remove();
        });
    }
}

/**
 * Create Ripple Effect
 */
function createRippleEffect(button, event) {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;
    
    // Add ripple keyframes if not already present
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    button.style.position = 'relative';
    button.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

/**
 * Keyboard Navigation
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        const comingSoonIcon = document.querySelector('.coming-soon-icon');
        
        // Enter or Space to activate coming soon icon
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === comingSoonIcon) {
            e.preventDefault();
            comingSoonIcon.click();
        }
        
        // Escape to go back to portfolio
        if (e.key === 'Escape') {
            window.location.href = '/';
        }
        
        // Add keyboard navigation class for focus visibility
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });

    // Enhanced focus styles for keyboard navigation
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .keyboard-navigation .coming-soon-icon:focus,
        .keyboard-navigation .cta-button:focus,
        .keyboard-navigation .social-link:focus,
        .keyboard-navigation .nav-link:focus {
            outline: 3px solid var(--ateneo-light-blue);
            outline-offset: 3px;
        }
        
        .keyboard-navigation .coming-soon-icon:focus {
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
        }
    `;
    document.head.appendChild(focusStyle);
}

/**
 * Page Animations
 */
function initPageAnimations() {
    // Animate elements on page load
    const animateElements = [
        { selector: '.container', delay: 100 },
        { selector: '.coming-soon-icon', delay: 300 },
        { selector: '.main-title', delay: 500 },
        { selector: '.subtitle', delay: 700 },
        { selector: '.description', delay: 900 },
        { selector: '.progress-container', delay: 1100 },
        { selector: '.cta-container', delay: 1300 },
        { selector: '.social-container', delay: 1500 }
    ];

    animateElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });

    // Animate background shapes with staggered timing
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.opacity = '0';
        setTimeout(() => {
            shape.style.transition = 'opacity 1s ease';
            shape.style.opacity = '0.1';
        }, 200 + (index * 150));
    });
}

/**
 * Accessibility Features
 */
function initAccessibilityFeatures() {
    // Screen reader announcements
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    `;
    document.body.appendChild(announcer);

    // Announce when page is ready
    setTimeout(() => {
        announcer.textContent = 'Coming soon page loaded. Something awesome is being built. Press Tab to navigate or Escape to return to portfolio.';
    }, 2000);

    // Update progress announcements
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        let lastAnnouncedProgress = 0;
        
        const progressObserver = new MutationObserver(() => {
            const currentWidth = parseInt(progressFill.style.width);
            const currentText = progressText.textContent;
            
            if (currentWidth > lastAnnouncedProgress + 25) {
                announcer.textContent = `Development progress: ${currentWidth} percent. ${currentText}`;
                lastAnnouncedProgress = currentWidth;
            }
        });
        
        progressObserver.observe(progressFill, {
            attributes: true,
            attributeFilter: ['style']
        });
        
        progressObserver.observe(progressText, {
            childList: true,
            characterData: true
        });
    }

    // Add high contrast mode detection
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }

    // Add reduced motion detection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Disable complex animations
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.1s !important;
                transition-duration: 0.1s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Email Notification Handler
 */
function initEmailNotification() {
    const emailButton = document.querySelector('.primary-button[href^="mailto:"]');
    
    if (emailButton) {
        emailButton.addEventListener('click', function(e) {
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show confirmation after attempting to open email client
            setTimeout(() => {
                showNotification('Email client opened! If it didn\'t open automatically, please email jtflaguitao@gmail.com', 'info');
            }, 500);
        });
    }
}

/**
 * Show Notification
 */
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'info' ? 'ℹ️' : '✅'}</span>
            <span class="notification-text">${message}</span>
            <button class="notification-close" aria-label="Close notification">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'info' ? 'var(--ateneo-blue)' : 'var(--lime-green)'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;
    
    // Add notification styles
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 1rem 1.2rem;
        }
        
        .notification-text {
            flex: 1;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            margin-left: 0.5rem;
            opacity: 0.8;
            transition: opacity 0.2s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(notificationStyle);
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (notificationStyle.parentNode) {
                notificationStyle.parentNode.removeChild(notificationStyle);
            }
        }, 300);
    });
    
    // Auto-remove after 7 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
                if (notificationStyle.parentNode) {
                    notificationStyle.parentNode.removeChild(notificationStyle);
                }
            }, 300);
        }
    }, 7000);
}

/**
 * Performance Optimizations
 */
function initPerformanceOptimizations() {
    // Preload critical resources
    const preloadLinks = [
        { href: 'assets/css/coming-soon.css', as: 'style' }
    ];
    
    preloadLinks.forEach(({ href, as }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
    });

    // Optimize animations based on device capabilities
    const reduceAnimations = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
                            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (reduceAnimations) {
        document.body.classList.add('reduced-animations');
    }

    // Connection-aware loading
    if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            document.body.classList.add('slow-connection');
            // Reduce animation complexity for slow connections
            const slowConnectionStyle = document.createElement('style');
            slowConnectionStyle.textContent = `
                .slow-connection .shape {
                    animation: none !important;
                }
                .slow-connection .coming-soon-icon::after {
                    animation: none !important;
                }
            `;
            document.head.appendChild(slowConnectionStyle);
        }
    }
}

/**
 * Error Handling
 */
function initErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('Coming Soon Page Error:', e.error);
        
        // Graceful degradation - ensure basic functionality works
        const essentialElements = ['.container', '.main-title', '.cta-container'];
        essentialElements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element && element.style.opacity === '0') {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

/**
 * Initialize all features
 */
function initializeAllFeatures() {
    try {
        initEmailNotification();
        initPerformanceOptimizations();
        initErrorHandling();
    } catch (error) {
        console.error('Error initializing additional features:', error);
        // Continue with basic functionality even if some features fail
    }
}

// Initialize additional features
initializeAllFeatures();