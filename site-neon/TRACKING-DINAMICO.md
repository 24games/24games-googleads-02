# Sistema de Tracking Dinâmico

## Como Funciona

Este site possui um sistema automático de tracking que ajusta os links de todos os botões baseado no slug da URL acessada.

### Exemplos

- **URL:** `dominio.com/axt2`  
  **Links dos botões:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt2`

- **URL:** `dominio.com/axt27`  
  **Links dos botões:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt27`

- **URL:** `dominio.com/axt99`  
  **Links dos botões:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt99`

- **URL:** `dominio.com/` (raiz, sem slug)  
  **Links dos botões:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt2` (padrão)

## Como Criar Novas Variações

Para criar uma nova variação de tracking, basta criar uma cópia da página com um slug diferente na URL:

1. **Acesse:** `seudominio.com/novoSlug`
2. **Resultado:** Todos os botões automaticamente apontarão para `...utm_campaign=Gads_novoSlug`

**Não é necessário duplicar arquivos ou editar código!** O sistema detecta automaticamente o slug da URL.

## Detalhes Técnicos

- O script está em `script.js` na função `updateDynamicLinks()`
- Todos os links com a classe `.dynamic-link` são atualizados automaticamente
- O sistema funciona no carregamento da página (evento `DOMContentLoaded`)
- Se não houver slug na URL, o padrão `axt2` é usado

## Testando

Para testar localmente:

1. Abra o arquivo `index.html` no navegador
2. Adicione um slug qualquer na URL (ex: `file:///caminho/index.html/teste`)
3. Abra o console do navegador (F12)
4. Verifique a mensagem: "Links atualizados com slug: teste"
5. Inspecione os botões e veja que os links foram atualizados

## Botões Afetados

Atualmente, os seguintes botões são atualizados automaticamente:

- ✅ Botão "Conocer" (Seção 3 - CTA)
- ✅ Botão "Saber más" (Seção 4 - Entretenimiento)

Se novos botões forem adicionados, basta adicionar a classe `dynamic-link` a eles.

