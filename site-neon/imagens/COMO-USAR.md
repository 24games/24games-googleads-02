# 🖼️ Como Usar suas Imagens

## 📋 Passo a Passo Rápido

### 1️⃣ Adicione suas Imagens Aqui
Arraste ou copie suas imagens para esta pasta `imagens/`

**Exemplo:**
```
site-neon/
└── imagens/
    ├── hero-background.jpg    ← Background principal
    ├── foto-1.jpg             ← Imagem do hero direito
    ├── foto-2.jpg             ← Imagem do hero direito
    └── foto-3.jpg             ← Imagem do hero direito
```

---

### 2️⃣ Configurar o Background do Hero

**Arquivo**: `styles.css`  
**Linha**: 86

**Encontre isto:**
```css
background: 
    linear-gradient(135deg, rgba(10, 11, 13, 0.95) 0%, rgba(15, 18, 22, 0.85) 100%),
    url('RUTA_DE_LA_IMAGEN_DEL_CLIENTE.jpg'); /* <-- MUDAR AQUI */
```

**Mude para (exemplo):**
```css
background: 
    linear-gradient(135deg, rgba(10, 11, 13, 0.95) 0%, rgba(15, 18, 22, 0.85) 100%),
    url('../imagens/hero-background.jpg'); /* <-- Use o nome da sua imagem */
```

⚠️ **IMPORTANTE**: Note o `../` antes de `imagens/` - isso é necessário!

---

### 3️⃣ Adicionar Imagens no Slot Direito

**Arquivo**: `index.html`  
**Linhas**: 52-57

**Encontre isto:**
```html
<div class="hero-right">
    <!-- Slot vacío para imágenes futuras -->
    <div class="hero-image-placeholder"></div>
</div>
```

**Opção A - Uma imagem:**
```html
<div class="hero-right">
    <img src="imagens/foto-1.jpg" alt="Descrição da imagem" style="border-radius: 12px;">
</div>
```

**Opção B - Múltiplas imagens (grid):**
```html
<div class="hero-right" style="display: grid; gap: 1rem; grid-template-columns: repeat(2, 1fr);">
    <img src="imagens/foto-1.jpg" alt="Foto 1" style="border-radius: 8px; width: 100%;">
    <img src="imagens/foto-2.jpg" alt="Foto 2" style="border-radius: 8px; width: 100%;">
    <img src="imagens/foto-3.jpg" alt="Foto 3" style="border-radius: 8px; width: 100%; grid-column: 1 / -1;">
</div>
```

---

## ✅ Checklist

- [ ] Imagens adicionadas na pasta `imagens/`
- [ ] Background do hero configurado no `styles.css` (linha 86)
- [ ] Imagens do slot direito adicionadas no `index.html` (linhas 52-57)
- [ ] Testado no navegador (atualizar com Ctrl+F5)

---

## 💡 Dicas

✅ **Formatos recomendados**: JPG (fotos), PNG (transparência), WebP (melhor compressão)  
✅ **Tamanho do background**: 1920x1080px ou maior  
✅ **Tamanho das fotos**: 500-800px de largura  
✅ **Otimize para web**: Use [TinyPNG.com](https://tinypng.com) para comprimir  
✅ **Máximo por arquivo**: 500KB para performance rápida

---

## 🔧 Resolvendo Problemas

**Imagem não aparece?**
1. Verifique o nome do arquivo (com extensão .jpg, .png, etc)
2. Certifique-se que usou `../imagens/` no CSS
3. Certifique-se que usou `imagens/` no HTML
4. Recarregue com Ctrl+F5 (limpa o cache)

**Imagem muito grande/pequena?**
Adicione estilo inline:
```html
<img src="imagens/foto.jpg" alt="Foto" style="max-width: 500px; height: auto;">
```

---

**Precisa de ajuda? Veja INSTRUCCIONES.md na pasta raiz!** 📖



