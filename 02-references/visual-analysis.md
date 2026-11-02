# Análise Visual Comparativa — ALMINI STUDIO

**Objetivo:** Decompor visualmente a relação de contrastes, proporções e pesos entre as referências de inspiração e os ativos reais de projeto.

---

## 1. Decomposição Cromática e Lumínica

```
[ PRETO ABSOLUTO ]       #000000 (Fundo base, contraste 21:1 contra branco puro)
      │
      ├── [ SUPERFÍCIE 01 ]   #0c0c0c (Cards de serviços, molduras de preview)
      ├── [ SUPERFÍCIE 02 ]   #161616 (Pill buttons inativos, caixas de hover)
      └── [ SUPERFÍCIE MENU ] #1e1e1e (Menu drawer cockpit flutuante)
```

* **Brilho e Iluminação:**
  * O Almini Studio adota iluminação difusa indireta. Não há luzes neon nem gradientes coloridos vibrantes.
  * O brilho emana da própria tipografia branca (`#ffffff`) e dos reflexos sutis nas bordas de 10% a 20% de opacidade (`rgba(255, 255, 255, 0.10)`).

---

## 2. Tensão de Escalas Tipográficas

* **Display Monumental (Títulos):**
  * `font-family: 'Bebas Neue', 'Inter', sans-serif`
  * `line-height: 0.92` (quase colada verticalmente, criando um bloco monolítico sólido).
  * Impacto gráfico análogo a manchetes de pôsteres suíços ou capas de publicações conceituais.
* **Corpo Editorial (Parágrafos e Manifesto):**
  * `font-family: 'IBM Plex Sans', sans-serif`
  * `line-height: 1.85` (amplo respiro para leitura agradável e sofisticada).
* **Camada Técnica / Sintaxe (Labels, Tags e Menu):**
  * `font-family: 'IBM Plex Mono', monospace`
  * `text-transform: uppercase`, `letter-spacing: 0.1em`.
  * Elementos colocados entre chaves `{...}` para reforçar o DNA de desenvolvimento web.

---

## 3. Análise dos Ativos de Projetos Reais (Selected Work)

### A. Projeto NIX (`assets/nix-website-hero.jpg` e `assets/nix-logo.jpg`)
* **Linguagem Visual:** Fotografia industrial com iluminação fria e clean de estúdio.
* **Cores Predominantes:** Cinza metálico, preto anodizado, luz branca neutra e cores vibrantes dos filamentos 3D (amarelo, azul, magenta, verde) contidas nos módulos.
* **Comportamento no Grid:** Funciona de forma excelente sobre o fundo preto do site, agindo como um portal luminoso e tecnológico de alta precisão.

### B. Projeto Mano's Car (`assets/manos-car-identity.jpg`)
* **Linguagem Visual:** Flat lay fotográfico com estética automotiva clássica e artesanal.
* **Cores Predominantes:** Laranja quente (Pantone 158/137), preto graxa e tons quentes de papelaria craft.
* **Comportamento no Grid:** Demonstra a versatilidade do estúdio — do universo tech ao branding vintage detalhado e materiais físicos impressos.

