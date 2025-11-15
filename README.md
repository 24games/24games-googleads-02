# Site Neon - Landing Page

Sitio web estático moderno con tema oscuro y acentos neon verde, diseñado para la comunidad de streamers en Chile.

## 🚀 Características

- **100% Estático**: Sin frameworks, sin build tools, sin dependencias npm
- **Tema Dark + Neon Verde**: Paleta moderna con efectos de brillo
- **Totalmente Responsivo**: Mobile-first (360px - 1440px+)
- **Accesible**: Cumple con estándares AA/AAA, soporta `prefers-reduced-motion`
- **Animaciones Fluidas**:
  - Carrusel infinito con fade en bordes
  - Fade on scroll para elementos que salen del viewport
  - Palabras con brillo animado (gradiente verde)
  - Balones neon flotando con parallax suave
- **SEO Optimizado**: Meta tags, Open Graph, HTML semántico

## 📁 Estructura del Proyecto

```
site-neon/
├── index.html          # Página principal
├── styles.css          # Todos los estilos y animaciones
├── script.js           # JavaScript vanilla (carrusel, fade, etc.)
├── assets/             # Recursos estáticos
│   ├── favicon.ico     # Favicon formato ICO
│   ├── favicon.svg     # Favicon formato SVG
│   ├── icon-*.svg      # Íconos para el carrusel (8 íconos)
│   └── ball-neon.svg   # Balón neon para sección CTA
└── README.md           # Este archivo
```

## 🎨 Paleta de Colores

```css
--negro-base: #0A0B0D        /* Background principal */
--gris-profundo: #0F1216     /* Background secundario */
--verde-neon: #00FF7F        /* Color principal neon */
--verde-neon-alt: #10B981    /* Variante verde */
--verde-neon-bright: #00E676 /* Verde brillante */
--texto-principal: #FFFFFF   /* Texto blanco */
--texto-secundario: #C9D1D9  /* Texto gris claro */
```

## 🖼️ Cómo Reemplazar las Imágenes

### 1. Background de la Sección Hero

En `styles.css`, buscar la línea **86**:

```css
.hero-section::before {
    /* ... */
    background: 
        linear-gradient(135deg, rgba(10, 11, 13, 0.95) 0%, rgba(15, 18, 22, 0.85) 100%),
        url('RUTA_DE_TU_IMAGEN_HERO.jpg'); /* <-- Reemplazar aquí */
    /* ... */
}
```

**Recomendaciones:**
- Formato: JPG, PNG o WebP
- Tamaño: Mínimo 1920x1080px
- Optimizada para web (máx 500KB)

### 2. Imágenes para el "Slot" Derecho del Hero

En `index.html`, línea **52-57**, reemplazar el placeholder:

```html
<div class="hero-right">
    <!-- Aquí agregar tus imágenes -->
    <img src="assets/tu-imagen.jpg" alt="Descripción" class="hero-image">
</div>
```

**Opcional:** Eliminar o comentar el `.hero-image-placeholder` en CSS (línea 145).

### 3. Background de la Sección CTA (opcional)

Si deseas cambiar el fondo de la sección CTA (donde flotan los balones), editar en `styles.css`, línea **330**:

```css
.cta-section {
    /* ... */
    background: linear-gradient(135deg, var(--gris-profundo) 0%, #0D0E10 100%);
    /* o usar: background: url('tu-imagen-cta.jpg'); */
}
```

## 🌐 Cómo Usar

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador web favorito.

### Opción 2: Servidor local (recomendado)

**Con Python:**
```bash
cd site-neon
python -m http.server 8000
```

**Con Node.js (npx):**
```bash
cd site-neon
npx serve
```

**Con VS Code:**
Instala la extensión "Live Server" y haz clic derecho en `index.html` → "Open with Live Server".

Luego visita: `http://localhost:8000`

## ♿ Accesibilidad

- ✅ HTML semántico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ✅ Atributos `alt` en todas las imágenes significativas
- ✅ Contraste de colores AA/AAA
- ✅ Navegación por teclado (`Tab`, `Space`, `Enter`)
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Botones con `aria-label` descriptivos
- ✅ Focus visible para usuarios de teclado

## 📱 Responsividad

El sitio está optimizado para:
- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Breakpoints Principales:
- `640px`: Grid de 2 columnas para glass cards
- `768px`: Hero split (texto izquierda, imágenes derecha)
- `1024px`: Grid de 3 columnas para glass cards

## 🎭 Animaciones y Efectos

### 1. Carrusel Infinito
- Scroll automático hacia la derecha
- Fade en los bordes con `mask-image`
- Botón "Pausar/Reanudar"
- Pausa on hover
- Velocidad: 40s por ciclo completo

### 2. Fade Away on Scroll
- Elementos desaparecen gradualmente al salir por arriba
- Usa `IntersectionObserver` para rendimiento óptimo
- Transición suave de 350ms

### 3. Palabra Brillante (.word-glow)
- Gradiente verde animado
- `background-clip: text` para efecto de texto transparente
- Brillo externo con `filter: drop-shadow`
- Animación de 3s en loop infinito

### 4. Balones Flotando
- 8 balones SVG con animaciones desfasadas
- Movimientos sutiles (translateY, translateX, scale)
- Opacidad baja (0.15) para no distraer

### 5. Prefers-Reduced-Motion
Todas las animaciones respetan la preferencia del usuario:
```javascript
if (prefersReducedMotion) {
    // Desactivar animaciones
}
```

## 🛠️ Personalización

### Cambiar la Fuente Tech
En `index.html`, línea **17**:
```html
<!-- Cambiar 'Orbitron' por 'Exo+2' o 'Rajdhani' -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

Y en `styles.css`, línea **20**:
```css
--font-tech: 'Orbitron', sans-serif;
```

### Agregar Más Íconos al Carrusel
1. Crear un nuevo SVG en `assets/icon-nuevo.svg`
2. Agregarlo en `index.html` (líneas 74-89) **dos veces** (original + duplicado)
3. Mantener el mismo formato y clases

### Modificar Velocidad del Carrusel
En `styles.css`, línea **265**:
```css
animation: scrollRight 40s linear infinite; /* Cambiar 40s */
```

## 📦 Despliegue

Este sitio puede ser desplegado en cualquier hosting estático:

### GitHub Pages
```bash
git add .
git commit -m "Add site-neon"
git push origin main
```
Luego activa GitHub Pages en Settings → Pages.

### Netlify
Arrastra la carpeta `site-neon/` directamente en https://app.netlify.com/drop

### Vercel
```bash
vercel --prod
```

### Hosting Tradicional (cPanel, FTP)
Sube todos los archivos de `site-neon/` a la carpeta `public_html/` o `www/`.

## 📄 Licencia

Este proyecto fue creado según especificaciones del cliente.
Todos los derechos reservados 2026.

## 🤝 Soporte

Para dudas o personalizaciones adicionales, contacta al desarrollador.

---

**Desarrollado con ⚡ usando HTML5, CSS3 y JavaScript Vanilla**



