# Registro de Aprovação & Refinamentos do Hero — ALMINI STUDIO

**Data:** 02 de Novembro de 2026  
**Status:** Fase A — Header + Hero Ajustado e Aprovado

---

## 1. Elementos Estruturais Aprovados

1. **Header Cockpit Minimalista:**
   - Assinatura oficial: `ALMINI STUDIO` em `Bebas Neue` refinado para `1.5rem` (24px) com subtítulo `by alexandre polettini`.
   - Gatilho central com sintaxe de chaves: `{ + MENU }`, sem silhueta de pílula, com rotação de `45deg` do ícone `+` ao abrir a gaveta suspensa.
   - Seletor de idiomas: `PT / EN` tipográfico puro, sem borda de cápsula, com sublinhado no idioma ativo.
   - Remoção do botão circular com seta `→` e da tag de disponibilidade para garantir respiro e foco absoluto na navegação e idioma.

2. **Hero Section:**
   - **Eyebrow:** `ESTÚDIO INDEPENDENTE DE DESIGN DIGITAL` / `INDEPENDENT DIGITAL DESIGN STUDIO` tipográfico direto, sem silhueta ou borda de cápsula.
   - **Headline Monumental:** `CRIANDO EXPERIÊNCIAS` / `DIGITAIS COM PROPÓSITO.` (em duas linhas equilibradas) em `Bebas Neue` clamp `clamp(3rem, 8.5vw, 6.75rem)` e entrelinha `0.92`.
   - **Texto de Apoio:** 18px `IBM Plex Sans` com entrelinha 1.8.
   - **Ações Principais:** `{ EXPLORAR PROJETOS }` e `{ VAMOS CONVERSAR }` (EN: `{ EXPLORE WORK }` e `{ LET'S TALK }`) estilizados sem silhueta sólida ou bordas de cápsula, utilizando a assinatura visual com chaves `{}`.
   - **Metadados:** `{Design independente. Pensamento criativo. Experiências digitais.}` e indicador de rolagem `{scroll to explore} ↓`.

3. **Interações de Scroll Reveal (Estilo Amplify Webflow):**
   - Cascata suave com `IntersectionObserver` acelerada por GPU, sem dependências externas.
   - Entrada cinematográfica de textos e imagens reais.
   - Acessibilidade garantida com `prefers-reduced-motion`.

---

## 2. O que deve ser preservado nas próximas etapas (Fase B / Polish)

- **Sintaxe de Chaves `{}`:** Preservar o uso de `{}` em todos os botões e CTAs (`{ VER PROJETO } →`, `{ CONHEÇA NOSSOS SERVIÇOS }`, `{ VAMOS COMEÇAR UM PROJETO }`, `{ INICIAR UM PROJETO }`, `{ ENTRE EM CONTATO }`).
- **Ausência de Silhuetas Pesadas:** Manter a elegância dos botões e tags sem bordas de pílula ou fundos sólidos desnecessários.
- **Rigor de Stack:** Manter HTML5 semântico, CSS3 e Vanilla JS sem frameworks.

