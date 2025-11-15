/**
 * Site Neon - Script Principal
 * Funcionalidades: Carrusel infinito, Fade on scroll, Reduced motion
 */

// ==========================================================================
// CONFIGURACIÓN Y UTILIDADES
// ==========================================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Verifica si el usuario prefiere movimiento reducido
 */
function shouldAnimate() {
    return !prefersReducedMotion;
}

// ==========================================================================
// CARRUSEL INFINITO (Sempre rodando, sem pausa)
// ==========================================================================

class InfiniteCarousel {
    constructor(trackId) {
        this.track = document.getElementById(trackId);
        
        if (!this.track) {
            console.warn('Carousel track not found');
            return;
        }
        
        this.init();
    }
    
    init() {
        // Carrossel roda continuamente, sem interrupções
        console.log('Carrossel infinito inicializado (sempre rodando)');
        
        // Se o usuário prefere movimiento reducido, desacelerar (mas não parar)
        if (prefersReducedMotion) {
            const icons = this.track.querySelectorAll('.carousel-icons');
            icons.forEach(iconSet => {
                iconSet.style.animationDuration = '80s'; // Mais lento, mas ainda rodando
            });
        }
    }
}

// ==========================================================================
// FADE AWAY ON SCROLL (elementos que salen por arriba)
// ==========================================================================

class ScrollFadeObserver {
    constructor() {
        this.elements = [];
        this.observer = null;
        
        if (!shouldAnimate()) {
            return; // No aplicar si el usuario prefiere movimiento reducido
        }
        
        this.init();
    }
    
    init() {
        // Seleccionar elementos que deben tener el efecto fade
        this.elements = document.querySelectorAll(
            '.hero-section, .football-content, .glass-card, .cta-content, .routine-content'
        );
        
        if (!this.elements.length) {
            return;
        }
        
        // Configurar Intersection Observer
        const options = {
            root: null,
            rootMargin: '-20% 0px -10% 0px', // Trigger cuando sale del viewport superior
            threshold: [0, 0.1, 0.5, 1]
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si el elemento está saliendo por arriba (boundingClientRect.top < 0)
                // y no está visible (isIntersecting = false), aplicar fade-away
                if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                    entry.target.classList.add('fade-away');
                } else {
                    entry.target.classList.remove('fade-away');
                }
            });
        }, options);
        
        // Observar todos los elementos
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// ==========================================================================
// SMOOTH SCROLL PARA ANCLAS (si se agregan en el futuro)
// ==========================================================================

function initSmoothScroll() {
    if (prefersReducedMotion) {
        return; // No aplicar smooth scroll si el usuario prefiere movimiento reducido
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorar # solo
            if (href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================================================
// ANIMACIONES DE BALONES (pausa si el usuario prefiere movimiento reducido)
// ==========================================================================

function initFloatingBalls() {
    if (prefersReducedMotion) {
        const balls = document.querySelectorAll('.floating-ball');
        balls.forEach(ball => {
            ball.style.animation = 'none';
        });
    }
}

// ==========================================================================
// LISTENER PARA CAMBIOS EN PREFERS-REDUCED-MOTION
// ==========================================================================

function initMotionPreferenceListener() {
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    motionMediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            // Usuario activó preferencia de movimiento reducido
            console.log('Reduced motion activated');
            location.reload(); // Recargar para aplicar cambios
        } else {
            // Usuario desactivó preferencia de movimiento reducido
            console.log('Reduced motion deactivated');
            location.reload(); // Recargar para aplicar cambios
        }
    });
}

// ==========================================================================
// PERFORMANCE: Lazy loading para imágenes (si se agregan en el futuro)
// ==========================================================================

function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // El navegador soporta lazy loading nativo
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback con Intersection Observer
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ==========================================================================
// INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio Neon cargado');
    console.log('Prefers reduced motion:', prefersReducedMotion);
    
    // Inicializar carrusel infinito (sempre rodando)
    const carousel = new InfiniteCarousel('carouselTrack');
    
    // Inicializar fade on scroll
    const fadeObserver = new ScrollFadeObserver();
    
    // Inicializar smooth scroll
    initSmoothScroll();
    
    // Inicializar balones flotantes
    initFloatingBalls();
    
    // Listener para cambios en prefers-reduced-motion
    initMotionPreferenceListener();
    
    // Lazy loading
    initLazyLoading();
    
    // Accesibilidad: Focus visible para navegación con teclado
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.body.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});

// ==========================================================================
// OPTIMIZACIÓN: Debounce para eventos de scroll/resize
// ==========================================================================

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Listener para resize (si se necesita en el futuro)
const handleResize = debounce(() => {
    // console.log('Window resized');
    // Lógica adicional si es necesaria
}, 150);

window.addEventListener('resize', handleResize);

// ==========================================================================
// EXPORT PARA USO FUTURO (si se modulariza)
// ==========================================================================

// Si en el futuro se usa módulos ES6:
// export { InfiniteCarousel, ScrollFadeObserver, debounce };

