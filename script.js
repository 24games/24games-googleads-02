/**
 * Site Neon - Script Principal
 * Funcionalidades: Carrusel infinito, Fade on scroll, Reduced motion
 */

// ==========================================================================
// CONFIGURACIÓN Y UTILIDADES
// ==========================================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ==========================================================================
// DYNAMIC LINK TRACKING - Atualiza UTM baseado no slug da URL
// ==========================================================================

/**
 * Atualiza todos os links da página baseado no slug da URL
 * Ex: dominio.com/axt27 -> todos os links terão utm_campaign=Gads_axt27
 */
function updateDynamicLinks() {
    // Pegar o pathname da URL (ex: "/axt27" ou "/")
    const pathname = window.location.pathname;
    
    // Extrair o slug (tudo depois da última barra, sem a barra)
    const slug = pathname.split('/').filter(Boolean).pop() || 'axt2';
    
    // URL base dos links
    const baseUrl = 'https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_';
    
    // Construir URL final
    const finalUrl = baseUrl + slug;
    
    // Selecionar todos os links dinâmicos e atualizar
    const dynamicLinks = document.querySelectorAll('.dynamic-link');
    dynamicLinks.forEach(link => {
        link.href = finalUrl;
    });
    
    console.log(`Links atualizados com slug: ${slug}`);
    console.log(`URL final: ${finalUrl}`);
}

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
    
    // Atualizar links dinâmicos baseado no slug da URL
    updateDynamicLinks();
    
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

// ==========================================================================
// PARTICLES JS - Verde Neon Sparkles
// ==========================================================================

function initParticles() {
    // Verificar si particles.js está disponível
    if (typeof particlesJS === 'undefined') {
        console.warn('Particles.js library not loaded');
        return;
    }
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00FF7F', '#10B981', '#00E676'] // Verde neon em variações
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
    
    console.log('Particles.js inicializado com tema verde neon');
}

// Inicializar particles quando a página carregar
window.addEventListener('load', () => {
    initParticles();
});

// ==========================================================================
// THREE.JS SHADER ANIMATION - Verde Neon
// ==========================================================================

function initShaderAnimation() {
    // Verificar se THREE.js está disponível
    if (typeof THREE === 'undefined') {
        console.warn('Three.js library not loaded');
        return;
    }
    
    const canvas = document.getElementById('shader-canvas');
    if (!canvas) {
        console.warn('Shader canvas not found');
        return;
    }
    
    // Vertex shader
    const vertexShader = `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `;
    
    // Fragment shader adaptado para verde neon
    const fragmentShader = `
        #define TWO_PI 6.2831853072
        #define PI 3.14159265359
        precision highp float;
        uniform vec2 resolution;
        uniform float time;
        
        void main(void) {
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
            float t = time * 0.05;
            float lineWidth = 0.002;
            vec3 color = vec3(0.0);
            
            // Criar padrão de ondas concentricas
            for(int j = 0; j < 3; j++){
                for(int i = 0; i < 5; i++){
                    float wave = lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
                    
                    // Verde neon (#00FF7F = RGB 0, 255, 127)
                    // Converter para 0.0-1.0: R=0.0, G=1.0, B=0.498
                    color.r += wave * 0.0;   // Sem vermelho
                    color.g += wave * 1.0;   // Verde total
                    color.b += wave * 0.5;   // Meio azul (para o tom neon)
                }
            }
            
            // Adicionar um toque de variação nas cores
            color.g = clamp(color.g, 0.0, 1.0);
            color.b = clamp(color.b * 0.6, 0.0, 1.0);
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;
    
    // Inicializar Three.js
    const camera = new THREE.Camera();
    camera.position.z = 1;
    
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    const uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() }
    };
    
    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Handle window resize
    const onWindowResize = () => {
        const section = document.getElementById('routine-section');
        if (!section) return;
        
        const width = section.clientWidth;
        const height = section.clientHeight;
        
        renderer.setSize(width, height);
        uniforms.resolution.value.x = width;
        uniforms.resolution.value.y = height;
    };
    
    // Initial resize
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);
    
    // Animation loop
    let animationId;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    console.log('Shader animation inicializado com tema verde neon');
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
    });
}

// Inicializar shader quando a página carregar
window.addEventListener('load', () => {
    initShaderAnimation();
});

