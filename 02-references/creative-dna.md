# Creative DNA — ALMINI STUDIO by ALEXANDRE POLETTINI

Este documento estabelece o **DNA Criativo e Contrato Visual** inegociável do Almini Studio. Todas as etapas subsequentes do pipeline (`/strategy`, `/design`, `/build`, `/audit`, `/polish`) devem obrigatoriamente se orientar por estas decisões.

---

## 1. Personalidade da Marca
* **Arquetípica:** O Criador-Arquiteto Técnico.
* **Vibe:** Sofisticado, minimalista, rigoroso, confiante, autoral e contemporâneo.
* **Manifestação Prática:** Não tenta impressionar com fogos de artifício ou efeitos espalhafatosos. O impacto é construído por proporções perfeitas, tipografia monumental bem assentada e código impecavelmente executado.

---

## 2. Tipografia
* **Hierarquia Titânica:**
  * **H1 Hero & Títulos Monumentais:** `Bebas Neue` ou `Inter 800/900`, com entrelinha ultracurta (`0.92`), caixa alta obrigatória e tracking levemente negativo (`-0.01em` a `-0.02em`).
* **Metadados & Elementos Interativos:**
  * `IBM Plex Mono` — usado em tags categoriais, botões de ação, numerais de seção, seletor de idiomas `[ PT | EN ]` e microcópias.
* **Corpo de Texto e Manifesto:**
  * `IBM Plex Sans` (ou `Inter` 300/400) com entrelinha ampla (`1.8` a `1.85`), cor cinza quente/neutra (`#e0e0e0` / `#c2c2c2`), garantindo imersão de leitura editorial.

---

## 3. Composição & Grid
* **Fundo Contratual:** Preto absoluto (`#000000`).
* **Bordas e Linhas de Contenção:** 1px sólido translúcido (`rgba(255, 255, 255, 0.10)`), sem sombras projetadas difusas (drop shadows borradas estão proibidas).
* **Grid Assimétrico de Alta Densidade:**
  * Proporção de 1:1.3 entre coluna de metadados e coluna visual em cards de projetos.
  * Respiros de seção monumentais (`padding: 7rem 0`).

---

## 4. Tratamento de Imagem
* **Enquadramento:** Proporções limpas (16:9, 3:2 ou 2:1 panorâmico), com `object-fit: cover`.
* **Proteção de Fundo:** Toda imagem de projeto repousa sobre uma moldura com fundo `#0c0c0c` e borda fina de 1px cinza escuro para evitar vazamento de luz indesejado sobre o fundo preto.
* **Estilo:** Fotografia real de produto, mockups detalhados de papelaria física e interfaces funcionais. Nunca ilustrações vetoriais genéricas de stock ("flat characters corporativos").

---

## 5. Motion Design
* **Filosofia:** Motion responsivo e invisível — sentido, não assistido.
* **Durações e Curvas:** 200ms a 350ms em `cubic-bezier(0.25, 1, 0.5, 1)`.
* **Microinterações:**
  * Elevação vertical suave em hover nos cards de projetos (`translateY(-6px)`).
  * Expansão linear de sublinhados em links (`width: 0` para `100%`).
  * Rotação de 45° no ícone `+` ao abrir o menu cockpit.

---

## 6. Navegação (Cockpit Interface)
* **Header Fixo Translúcido:** `backdrop-filter: blur(14px)`, `height: 76px`.
* **Menu Trigger:** Botão em formato pill (`+ MENU`), ativando um drawer compacto central suspenso de 320px com numeração de seções `01` a `07`.
* **Seletor de Idioma Integrado:** `[ PT | EN ]` posicionado à direita no header, sem dropdowns complexos, alternando entre as versões nativas.

---

## 7. O Que NÃO Fazer (Lista de Proibições Estéticas)
* **NUNCA:** Usar gradientes coloridos multicoloridos (estilo roxo/rosa neon de fintech genérica).
* **NUNCA:** Usar bordas excessivamente arredondadas em blocos principais (apenas botões e tags são pill; cards de conteúdo usam cantos retos ou raio discreto de `8px`).
* **NUNCA:** Usar sombras borradas e opacas (`box-shadow` difuso colorido).
* **NUNCA:** Incluir ilustrações cartunescas 3D ou 2D de bancos de imagem.
* **NUNCA:** Usar frases comerciais clichês ("Transformamos sonhos em realidade", "A melhor agência para sua empresa").

---

## 8. Creative Gate
* [x] **Identidade Exclusiva:** O Creative DNA é 100% específico para o Almini Studio e a visão autoral de Alexandre Polettini.
* [x] **Separação Rigorosa:** Nenhuma imagem ou ativo externo de referência foi copiado para o diretório de build.
* [x] **Manifesto de Ativos:** Os ativos reais de projeto (`NIX` e `Mano's Car`) foram catalogados em `00-brief/assets-manifest.md`.

**Status:** `CREATIVE GATE VALIDADO`

