# 📋 Instrucciones de Uso y Personalización

## 🎯 Inicio Rápido

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador
2. **Reemplazar imágenes**: Ver sección "Imágenes a Reemplazar" abajo
3. **Personalizar contenido**: Edita el texto directamente en `index.html`

---

## 🖼️ Imágenes a Reemplazar

### ⚠️ IMPORTANTE: Background de la Sección Hero

**Archivo**: `styles.css`  
**Línea**: 86

```css
.hero-section::before {
    /* ... */
    background: 
        linear-gradient(135deg, rgba(10, 11, 13, 0.95) 0%, rgba(15, 18, 22, 0.85) 100%),
        url('RUTA_DE_TU_IMAGEN.jpg'); /* <-- CAMBIAR AQUÍ */
    /* ... */
}
```

**Pasos**:
1. Coloca tu imagen en la carpeta `assets/` (ejemplo: `assets/hero-bg.jpg`)
2. Reemplaza `'RUTA_DE_TU_IMAGEN.jpg'` por `'assets/hero-bg.jpg'`
3. Asegúrate de que la imagen sea de alta calidad (mín. 1920x1080px)

---

### 🎨 Imágenes del Slot Derecho (Hero)

**Archivo**: `index.html`  
**Líneas**: 52-57

Actualmente hay un placeholder vacío. Para agregar tus imágenes:

```html
<div class="hero-right">
    <!-- Opción A: Una sola imagen -->
    <img src="assets/tu-imagen.jpg" alt="Descripción relevante" class="hero-image">
    
    <!-- Opción B: Múltiples imágenes en grid -->
    <!-- <div class="hero-images-grid">
        <img src="assets/imagen1.jpg" alt="Descripción 1">
        <img src="assets/imagen2.jpg" alt="Descripción 2">
        <img src="assets/imagen3.jpg" alt="Descripción 3">
    </div> -->
</div>
```

Si agregas imágenes, puedes **eliminar** o **comentar** este código en `styles.css` (líneas 145-162):

```css
.hero-image-placeholder {
    /* ... este bloque puede ser eliminado ... */
}
```

---

## 📝 Editar Contenido

Todo el contenido está en español (Chile) y puede ser editado directamente en `index.html`:

### Sección 1: Hero
- **Título**: Línea 41
- **Subtítulo**: Línea 44

### Sección 2: Fútbol
- **Título**: Línea 82
- **Texto largo**: Líneas 85-87
- **Tarjetas glass**: Líneas 92-117 (6 tarjetas)

### Sección 3: CTA
- **Título**: Líneas 133-135
- **Subtítulo**: Líneas 136-138
- **Botón**: Línea 139

### Sección 4: Rutina
- **Título**: Líneas 148-150
- **Texto**: Líneas 151-153
- **Botón**: Línea 154

### Footer
- **Año**: Línea 162
- **Disclaimer**: Línea 163

---

## 🎨 Personalizar Colores

Si deseas cambiar la paleta de colores, edita las variables CSS en `styles.css` (líneas 15-22):

```css
:root {
    --negro-base: #0A0B0D;         /* Fondo principal */
    --gris-profundo: #0F1216;      /* Fondo secundario */
    --verde-neon: #00FF7F;         /* Color principal (cambiar aquí) */
    --verde-neon-alt: #10B981;     /* Variante 1 */
    --verde-neon-bright: #00E676;  /* Variante 2 */
    --texto-principal: #FFFFFF;    /* Texto blanco */
    --texto-secundario: #C9D1D9;   /* Texto gris */
}
```

**Ejemplo**: Para cambiar el neon verde a neon azul:
```css
--verde-neon: #00D4FF;         /* Azul neon */
--verde-neon-alt: #0EA5E9;     /* Azul sky */
--verde-neon-bright: #38BDF8;  /* Azul brillante */
```

---

## ⚡ Personalizar Animaciones

### Velocidad del Carrusel

**Archivo**: `styles.css`  
**Línea**: 265

```css
animation: scrollRight 40s linear infinite; /* Cambiar 40s a tu preferencia */
```

- **Más rápido**: `30s` o `25s`
- **Más lento**: `50s` o `60s`

### Desactivar Animaciones Específicas

Si deseas desactivar alguna animación:

**Palabra brillante** (líneas 59-67):
```css
.word-glow {
    /* Comentar o eliminar la propiedad animation: */
    /* animation: shimmer 3s linear infinite; */
}
```

**Balones flotando** (líneas 340-376):
```css
.floating-ball {
    /* animation: float1 8s ease-in-out infinite; */
    animation: none; /* Desactiva la animación */
}
```

---

## 🔤 Cambiar la Fuente

### Paso 1: Elegir Fuente en Google Fonts

Visita [Google Fonts](https://fonts.google.com/) y elige una fuente tech alternativa:
- **Exo 2**: Moderna y geométrica
- **Rajdhani**: Condensada y tech
- **Share Tech Mono**: Monoespaciada tech

### Paso 2: Reemplazar en HTML

**Archivo**: `index.html`  
**Línea**: 18

```html
<!-- Ejemplo con Exo 2 -->
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Paso 3: Actualizar CSS

**Archivo**: `styles.css`  
**Línea**: 20

```css
--font-tech: 'Exo 2', sans-serif; /* Cambiar el nombre de la fuente */
```

---

## 🌐 Meta Tags y SEO

Para mejorar el SEO, edita estos meta tags en `index.html` (líneas 7-12):

```html
<meta name="description" content="TU DESCRIPCIÓN AQUÍ (máx 160 caracteres)">

<!-- Open Graph -->
<meta property="og:title" content="TU TÍTULO PARA REDES SOCIALES">
<meta property="og:description" content="TU DESCRIPCIÓN PARA REDES SOCIALES">
<meta property="og:image" content="URL_COMPLETA_DE_TU_IMAGEN_HERO">
```

---

## 📱 Testear Responsividad

### En Navegadores de Escritorio:

1. **Chrome/Edge**:
   - Presiona `F12`
   - Click en el ícono de dispositivo móvil (arriba izquierda)
   - Selecciona dispositivos: iPhone 12, iPad, Samsung Galaxy

2. **Firefox**:
   - Presiona `Ctrl+Shift+M` (Windows) o `Cmd+Opt+M` (Mac)
   - Elige diferentes tamaños de pantalla

### Breakpoints a Probar:
- ✅ 360px (móvil pequeño)
- ✅ 768px (tablet)
- ✅ 1024px (laptop)
- ✅ 1440px+ (desktop grande)

---

## ♿ Verificar Accesibilidad

### Herramientas Recomendadas:

1. **Lighthouse** (integrado en Chrome):
   - `F12` → pestaña "Lighthouse"
   - Genera reporte de Accessibility
   - Objetivo: puntaje 90+

2. **WAVE** (extensión):
   - [https://wave.webaim.org/extension/](https://wave.webaim.org/extension/)
   - Identifica problemas de contraste y estructura

3. **Navegación por Teclado**:
   - Presiona `Tab` repetidamente
   - Verifica que todos los elementos interactivos sean accesibles
   - El foco debe ser visible (borde verde)

### Checklist de Accesibilidad:
- ✅ Todas las imágenes tienen `alt` descriptivo
- ✅ Contraste de texto cumple AA/AAA
- ✅ Navegación por teclado funcional
- ✅ Botones tienen `aria-label`
- ✅ Respeta `prefers-reduced-motion`

---

## 🚀 Desplegar el Sitio

### Opción 1: GitHub Pages (Gratis)

```bash
# 1. Crear repositorio en GitHub
# 2. Subir los archivos
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main

# 3. En GitHub: Settings → Pages → Source: main branch
```

Tu sitio estará en: `https://TU_USUARIO.github.io/TU_REPO/`

### Opción 2: Netlify (Gratis)

1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta `site-neon/`
3. ¡Listo! Obtendrás una URL automática

### Opción 3: Vercel (Gratis)

```bash
npm i -g vercel
cd site-neon
vercel --prod
```

### Opción 4: Hosting Tradicional

Sube todos los archivos de `site-neon/` vía FTP a tu carpeta `public_html/` o `www/`.

---

## 🐛 Problemas Comunes

### El carrusel no se mueve
- **Solución**: Verifica que `script.js` esté correctamente vinculado en `index.html` (línea 170)
- Abre la consola del navegador (`F12` → Console) y busca errores

### Las imágenes no cargan
- **Solución**: Verifica que las rutas sean correctas y relativas (ejemplo: `assets/imagen.jpg`)
- Las rutas son **case-sensitive** en algunos servidores

### El favicon no aparece
- **Solución**: Algunos navegadores cachean el favicon. Prueba:
  1. `Ctrl+F5` para forzar recarga
  2. Abrir en modo incógnito
  3. Borrar cache del navegador

### La fuente no carga
- **Solución**: Verifica tu conexión a internet (la fuente se carga desde Google Fonts)
- Si estás offline, la fuente no cargará (fallback a `sans-serif`)

---

## 📞 Soporte

Si tienes dudas o necesitas personalizaciones adicionales:
1. Revisa el `README.md` para documentación técnica completa
2. Inspecciona el código fuente (está bien comentado)
3. Contacta al desarrollador para asistencia

---

**¡Éxito con tu sitio! ⚡**



