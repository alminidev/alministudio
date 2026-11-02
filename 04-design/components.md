# Biblioteca de Componentes — ALMINI STUDIO

**Especificação Anatômica dos Componentes de Interface**

---

## 1. Header & Menu Cockpit

### Anatomia
* **Container:** Altura `76px`, posição `fixed`, `z-index: 1000`. Fundo `rgba(0, 0, 0, 0.88)`, `backdrop-filter: blur(14px)`.
* **Brand:** Tipografia display (`'Bebas Neue'`), 24px (`1.5rem`), caixa alta (`ALMINI STUDIO`), acompanhada do subtítulo em `IBM Plex Mono` 12px cinza (`by alexandre polettini`).
* **Menu Trigger:** Botão tipográfico autoral com chaves `{ + MENU }` sem silhueta de cápsula. Ícone `+` que rotaciona para `45deg` no estado ativo (`aria-expanded="true"`).
* **Dropdown Drawer:** Largura `320px`, fundo `#1e1e1e`, borda `1px solid rgba(255, 255, 255, 0.20)`, sombra `0 20px 40px rgba(0, 0, 0, 0.7)`.
* **Seletor de Idioma:** Tipografia mono sem silhueta contendo links `PT` e `EN`, com classe `.active` destacada com sublinhado e texto branco puro.

---

## 2. Botões & CTAs (Estilo Tipográfico Autoral com Chaves)

### Botão Primário (`.btn-primary`)
* **Uso:** Ações prioritárias de conversão (`{ EXPLORAR PROJETOS }`, `{ INICIAR UM PROJETO }`).
* **Estilo:** Sem cápsula/silhueta sólida, fundo transparente, texto branco puro (`#ffffff`), `IBM Plex Mono` 15px (`0.9375rem`), peso 700, padding sutil.
* **Hover:** Translação `translateY(-2px)`, cor `#c2c2c2`.

### Botão Secundário (`.btn-secondary`)
* **Uso:** Ações de exploração secundária (`{ VAMOS CONVERSAR }`, `{ VAMOS COMEÇAR UM PROJETO }`).
* **Estilo:** Sem borda/silhueta de cápsula, fundo transparente, texto cinza `#c2c2c2`, `IBM Plex Mono` 15px, peso 600.
* **Hover:** Translação `translateY(-2px)`, cor `#ffffff`.

---

## 3. Cards de Projetos (Selected Work)

### Anatomia
* **Estrutura:** Grid assimétrico de 2 colunas (`1fr` para dados / `1.3fr` para imagem).
* **Coluna de Dados:**
  * Numeral `01`, `02`, `03` em `Bebas Neue` 56px (`3.5rem`), cor `#444444`.
  * Nome do projeto em `Bebas Neue` 40px-48px.
  * Pills de categoria com borda de 1px e texto mono 11px uppercase.
  * Parágrafo descritivo de até 520px em cinza `#c2c2c2`.
  * Link de ação `{ VER PROJETO } →` com translação de `6px` para a direita em hover.
* **Coluna Visual (Moldura de Imagem):**
  * Altura mínima de `420px`.
  * Fundo `#0c0c0c`, borda `1px solid rgba(255, 255, 255, 0.10)`.
  * Imagem real com `object-fit: cover; width: 100%; height: 100%`.
  * Hover no card eleva a moldura em `translateY(-6px)` e ilumina a borda para `20%` de branco.

---

## 4. Cards de Serviços (Services Grid)

### Anatomia
* **Layout:** Grid 2x2.
* **Padding:** `3rem 2.5rem`.
* **Fundo:** `#0c0c0c` com borda fina de `1px solid rgba(255, 255, 255, 0.10)`.
* **Tipografia:** Numeral/disciplina mono 13px (`01 / ART DIRECTION`), Título em `Bebas Neue` 30px, parágrafo descritivo em `IBM Plex Sans` 16px.
* **Hover:** Elevação sutil `translateY(-4px)` e clareamento de borda.

