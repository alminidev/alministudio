# Design System & Visual Blueprint — ALMINI STUDIO

**Contrato de Engenharia e Especificação Numérica**  
Este documento é a **fonte única da verdade** para a implementação front-end. Nenhum valor aqui registrado pode ser alterado, substituído ou interpretado silenciosamente durante o desenvolvimento.

---

## 1. Tokens de Cores (Paleta Contratual)

```css
/* SUPERFÍCIES & FUNDOS */
--bg:                    #000000;         /* Preto absoluto base (contraste 21:1) */
--surface-01:            #0c0c0c;         /* Fundo de cards de serviços e molduras de imagem */
--surface-02:            #161616;         /* Fundo do pill button menu inativo */
--surface-menu:          #1e1e1e;         /* Fundo do menu drawer suspenso */

/* TEXTO & TIPOGRAFIA */
--text-white:            #ffffff;         /* Headings monumentais, CTAs primários ativos */
--text-body:             #e0e0e0;         /* Leitura do manifesto e sobre o estúdio */
--text-muted:            #c2c2c2;         /* Descrição do hero, descrições de serviços */
--text-subtle:           #636363;         /* Numerais de serviços, índices de gaveta */
--text-num:              #444444;         /* Numerais gigantes de projetos (01, 02) */

/* BORDAS & LINHAS DE CONTENÇÃO */
--border-hairline:       rgba(255, 255, 255, 0.10); /* Linhas divisórias entre seções (1px) */
--border-visible:        rgba(255, 255, 255, 0.20); /* Bordas de cards, tags e CTAs secundários */
--border-highlight:      #ffffff;                    /* Borda ativa no hover e foco */
```

---

## 2. Tipografia (Escala Numérica Contratual)

| Nível / Elemento | Família Tipográfica | Tamanho (Desktop / Mobile) | Line-Height | Peso | Letter-Spacing | Transform |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **Hero H1** | `'Bebas Neue', sans-serif` | `clamp(3rem, 8.5vw, 6.75rem)` | `0.92` (92%) | 400 | `-0.01em` | Uppercase |
| **Seção H2** | `'Bebas Neue', sans-serif` | `clamp(2.5rem, 6vw, 4.5rem)` | `0.95` (95%) | 400 | `-0.02em` | Uppercase |
| **Card H3** | `'Bebas Neue', sans-serif` | `clamp(2rem, 3.5vw, 3rem)` | `1.0` (100%) | 400 | `-0.01em` | Uppercase |
| **Serviço H3**| `'Bebas Neue', sans-serif` | `1.875rem` (30px) | `1.1` (110%) | 400 | `0.02em` | Uppercase |
| **Manifesto H2**| `'Bebas Neue', sans-serif`| `clamp(2.25rem, 5vw, 4rem)` | `0.95` (95%) | 400 | `-0.01em` | Uppercase |
| **Corpo (Body)**| `'IBM Plex Sans', sans-serif` | `1.125rem` (18px) | `1.85` (185%) | 400 | `0` | Normal |
| **Pill Tags** | `'IBM Plex Mono', monospace` | `0.6875rem` (11px) | `1.0` (100%) | 600 | `0.1em` | Uppercase |
| **CTAs** | `'IBM Plex Mono', monospace` | `0.875rem` (14px) | `1.0` (100%) | 700 | `0.08em` | Uppercase |
| **Eyebrow** | `'IBM Plex Mono', monospace` | `0.8125rem` (13px) | `1.0` (100%) | 600 | `0.15em` | Uppercase |
| **Numerais** | `'Bebas Neue', sans-serif` | `3.5rem` (56px) | `1.0` (100%) | 400 | `0` | Normal |

---

## 3. Grid & Espaçamento Numérico

* **Container Máximo:** `1358px` centralizado com padding lateral de `32px` (`2rem`).
* **Header Fixo:** Altura exata de `76px`; `backdrop-filter: blur(14px)`.
* **Padding de Seções:**
  * Desktop (>1024px): `padding: 112px 0` (`7rem 0`).
  * Mobile (<768px): `padding: 80px 0` (`5rem 0`).
* **Grids de Coluna Específicos:**
  * Cards de Projeto: `grid-template-columns: 1fr 1.3fr`; gap de `64px` (`4rem`).
  * Manifesto: `grid-template-columns: 1fr 2fr`; gap de `64px` (`4rem`).
  * Serviços: `grid-template-columns: repeat(2, 1fr)`; gap de `40px` (`2.5rem`).
  * Processo: `grid-template-columns: repeat(4, 1fr)`; gap de `32px` (`2rem`).
  * Sobre o Estúdio: `grid-template-columns: 1.2fr 1fr`; gap de `80px` (`5rem`).

---

## 4. Breakpoints Responsivos

* **Desktop Grande:** `min-width: 1920px` (Container preservado em 1358px).
* **Desktop Padrão:** `1025px` a `1440px`.
* **Tablet Landscape/Portrait:** `769px` a `1024px` (Projetos em 1fr, manifesto empilhado, processo 2x2).
* **Mobile Landscape/Portrait:** `max-width: 768px` (Coluna única, botões a 100%, disponibilidade oculta).
* **Mobile Pequeno:** `max-width: 480px` (Hero clamp para 2.75rem, CTAs verticais).

---

## 5. Motion & Easing

* **Curva Contratual de Desaceleração:** `cubic-bezier(0.25, 1, 0.5, 1)`.
* **Durações:**
  * Microinterações (Hover de botões, tags, cores de link): `200ms`.
  * Transições Estruturais (Menu drawer, elevação de cards): `350ms`.
* **Transforms no Hover:**
  * Cards de Projetos: `transform: translateY(-6px)`.
  * Botões Primários e Secundários: `transform: translateY(-3px)`.
  * Quick Contact Button: `transform: scale(1.1)`.

