# 📱 Configuração Mobile - 3 Pessoas

## ✅ Implementado

### Desktop (> 768px)
- Texto à **esquerda**
- 3 pessoas à **direita**
- Layout lado a lado

### Mobile (≤ 767px)
- ✅ Texto **primeiro** (topo)
- ✅ 3 pessoas **abaixo** do texto
- ✅ Corte escondido pela próxima seção (bottom: -80px)
- ✅ Animações sequenciais mantidas
- ✅ Tamanho ajustado: 480px de altura

## 🎯 Ordem no Mobile

```
┌─────────────────┐
│   Texto Hero    │ ← order: 1
│  (esquerda)     │
├─────────────────┤
│  3 Pessoas      │ ← order: 2
│  Vicente        │
│  Quiroga Elian  │
└─────────────────┘
      ↓
┌─────────────────┐
│  Carrossel      │ ← Esconde o corte
└─────────────────┘
```

## 📏 Medidas Mobile

- **Container**: 500px de altura
- **Pessoas**: 480px de altura
- **Bottom**: -80px (empurra para baixo)
- **Vicente**: Centro (50%)
- **Quiroga**: 20% da esquerda
- **Elian**: 10% da direita

## 🎬 Animações

Mantidas as mesmas do desktop:
- 0.5s → Vicente
- 1.2s → Quiroga
- 1.9s → Elian

## 🧪 Testar Mobile

**No navegador (Chrome/Edge/Firefox):**
1. Pressione F12 (DevTools)
2. Clique no ícone de dispositivo móvel
3. Escolha: iPhone 12, Galaxy S20, etc.
4. Ou ajuste a largura manualmente para < 768px

**Resultado esperado:**
✅ Texto aparece primeiro
✅ 3 pessoas aparecem abaixo
✅ Corte escondido pela próxima seção
✅ Animações funcionando

---

**Data:** 14/11/2025  
**Status:** ✅ Mobile responsivo completo!



