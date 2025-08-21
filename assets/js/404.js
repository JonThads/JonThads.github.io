// Coming Soon Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initInteractiveElements();
    initProgressBar();
    initKeyboardNavigation();
    initAccessibilityFeatures();
    initCursorEffect();
});

/**
 * Go back function
 */
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
}

/**
 * Interactive Elements
 */
function initInteractiveElements() {
    // Construction icon click effect
    const constructionIcon = document.querySelector('.construction-icon');
    
    if (constructionIcon) {
        constructionIcon.addEventListener('click', function() {
            // Reset animation
            this.style.animation = 'none';
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.animation = 'bounce 3s ease-in-out infinite';
                this.style.transform = '';
            }, 100);
            
            // Add some fun effects
            createSparkles(this);
        });

        // Add hover effect for better feedback
        constructionIcon.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });

        constructionIcon.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    }

    // CTA button effects
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Social links hover effects
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
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
    
    if (!progressFill) return;

    let progress = 0;
    const targetProgress = 85;
    const increment = 0.5;
    
    // Animate progress bar on load
    const progressInterval = setInterval(() => {
        progress += Math.random() * increment + 0.2;
        
        if (progress >= targetProgress) {
            progress = targetProgress;
            clearInterval(progressInterval);
            
            // Add completion effect
            setTimeout(() => {
                progressFill.style.boxShadow = '0 0 20px rgba(132, 204, 22, 0.5)';
            }, 500);
        }
        
        progressFill.style.width = progress + '%';
        
        // Update progress text if it exists
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = Math.round(progress) + '%';
        }
    }, 50);

    // Add periodic pulse effect
    setInterval(() => {
        if (progress >= targetProgress) {
            progressFill.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                progressFill.style.animation = '';
            }, 500);
        }
    }, 3000);
}

/**
 * Create Sparkle Effect
 */
function createSparkles(element) {
    const sparkleCount = 8;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #fbbf24, #fb7185);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
        `;
        
        document.body.appendChild(sparkle);
        
        // Animate sparkle
        const angle = (i * 360 / sparkleCount) * (Math.PI / 180);
        const distance = 50 + Math.random() * 30;
        const duration = 800 + Math.random() * 400;
        
        sparkle.animate([
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
            sparkle.remove();
        });
    }
}

/**
 * Keyboard Navigation
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        const constructionIcon = document.querySelector('.construction-icon');
        
        // Enter or Space to activate construction icon
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === constructionIcon) {
            e.preventDefault();
            constructionIcon.click();
        }
        
        // Escape to go back
        if (e.key === 'Escape') {
            goBack();
        }
        
        // Add keyboard navigation class for focus visibility
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

/**
 * Cursor Effect
 */
function initCursorEffect() {
    let cursor = null;
    
    document.addEventListener('mousemove', function(e) {
        if (!cursor) {
            cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(64, 224, 208, 0.3), rgba(64, 224, 208, 0.1));
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(cursor);
        }
        
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        
        // Scale cursor based on hover state
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        if (hoveredElement && (hoveredElement.classList.contains('cta-button') || 
            hoveredElement.classList.contains('social-link') || 
            hoveredElement.classList.contains('construction-icon'))) {
            cursor.style.transform = 'scale(2)';
        } else {
            cursor.style.transform = 'scale(1)';
        }
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.opacity = '0';
        }
    });

    document.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.opacity = '1';
        }
    });
}

/**
 * Accessibility Features
 */
function initAccessibilityFeatures() {
    // Add focus styles for keyboard navigation
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .keyboard-navigation .construction-icon:focus,
        .keyboard-navigation .cta-button:focus,
        .keyboard-navigation .social-link:focus {
            outline: 3px solid rgba(255, 255, 255, 0.8);
            outline-offset: 3px;
        }
        
        .construction-icon:focus {
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
        }
    `;
    document.head.appendChild(focusStyle);

    // Announce page load to screen readers
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
        announcer.textContent = 'Coming Soon page loaded. Press Tab to navigate or Escape to go back.';
    }, 1000);

    // Update progress announcements
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        let lastAnnouncedProgress = 0;
        const progressObserver = new MutationObserver(() => {
            const currentWidth = parseInt(progressFill.style.width);
            if (currentWidth > lastAnnouncedProgress + 20) {
                announcer.textContent = `Loading progress: ${currentWidth} percent`;
                lastAnnouncedProgress = currentWidth;
            }
        });
        
        progressObserver.observe(progressFill, {
            attributes: true,
            attributeFilter: ['style']
        });
    }
}

/**
 * Email Notification Feature
 */
function initEmailNotification() {
    const notifyButton = document.querySelector('.primary-button[href^="mailto:"]');
    
    if (notifyButton) {
        notifyButton.addEventListener('click', function(e) {
            // If email client doesn't open, show alternative
            setTimeout(() => {
                const modal = createNotificationModal();
                document.body.appendChild(modal);
            }, 1000);
        });
    }
}

/**
 * Create Notification Modal
 */
function createNotificationModal() {
    const modal = document.createElement('div');
    modal.className = 'notification-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Stay Updated!</h3>
            <p>Enter your email to get notified when we launch:</p>
            <form class="email-form">
                <input type="email" placeholder="your@email.com" required>
                <button type="submit">Notify Me</button>
            </form>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-backdrop"></div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            color: var(--dark-gray);
            text-align: center;
            position: relative;
            z-index: 10001;
            max-width: 400px;
            width: 90%;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
        }
        
        .email-form {
            margin: 1rem 0;
        }
        
        .email-form input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid var(--medium-gray);
            border-radius: 6px;
            margin-bottom: 1rem;
        }
        
        .email-form button {
            background: var(--ateneo-blue);
            color: white;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 6px;
            cursor: pointer;
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
    `;
    document.head.appendChild(modalStyle);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
        modalStyle.remove();
    });
    
    modal.querySelector('.modal-backdrop').addEventListener('click', () => {
        modal.remove();
        modalStyle.remove();
    });
    
    modal.querySelector('.email-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = modal.querySelector('input').value;
        
        // Simulate email signup
        modal.querySelector('.modal-content').innerHTML = `
            <h3>Thank You!</h3>
            <p>We'll notify you at <strong>${email}</strong> when we launch!</p>
            <button onclick="this.closest('.notification-modal').remove()">Close</button>
        `;
    });
    
    return modal;
}

/**
 * Performance Optimizations
 */
function initPerformanceOptimizations() {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;600;700;800&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Optimize animations for performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// Initialize optional features
// Uncomment to enable
// initEmailNotification();
initPerformanceOptimizations();