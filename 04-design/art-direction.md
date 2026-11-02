# Direção de Arte (Art Direction) — ALMINI STUDIO by ALEXANDRE POLETTINI

**Papel:** Creative Director  
**Projeto:** ALMINI STUDIO by ALEXANDRE POLETTINI  
**Conceito Estético:** Brutalismo Técnico & Editorial Suíço Contemporâneo (*Swiss Precision Dark*)

---

## 1. Posicionamento Visual e Atmosfera

A direção de arte do Almini Studio é fundada na **antítese do template genérico**. Em vez de interfaces arredondadas, ilustrações coloridas e gradientes lilases/azuis corporativos comuns, a estética se apoia no contraste ótico radical:
* **Fundo Negro Infinito (`#000000`):** Cria um palco escuro de galeria onde a tipografia atua como arquitetura.
* **Monumentalidade Tipográfica com Entrelinha Comprimida:** Títulos colossais (`line-height: 0.92`, font-size até `6.75rem`) que ocupam a largura do viewport como blocos de concreto tipográfico.
* **Micro-Precisão Sintática Monospaçada:** Contraposição imediata com metadados técnicos minúsculos (`12px` a `14px`), usando notação de código (`{work}`, `{services}`, `01`, `02`) em `IBM Plex Mono`.

---

## 2. Tradução de Adjetivos em Valores Objetivos (Contrato de Decisão)

Para cumprir a regra de que nenhuma decisão estética pode ser meramente adjetiva:

| Adjetivo de Direção | Expressão Numérica e Regra Técnica Verificável |
| :--- | :--- |
| **"Monumental"** | `font-size: clamp(3rem, 8.5vw, 6.75rem)`; `line-height: 0.92`; `text-transform: uppercase`. |
| **"Generoso"** | Padding vertical de seções de exatamente `112px` (`7rem`) no desktop e `80px` (`5rem`) no mobile. |
| **"Assimétrico"** | Grid de cards de projetos com divisão exata de `1fr` (informação/metadados) para `1.3fr` (visual). |
| **"Editorial"** | Largura máxima de leitura de parágrafo travada em `680px` no Hero e `520px` nos projetos; `line-height: 1.85`. |
| **"Cockpit UI"** | Header de `76px` com menu trigger em pill (`padding: 8px 18px; border-radius: 999px`) e gaveta de `320px` suspensa. |
| **"Milimétrico"** | Linhas estruturais e divisórias de exatamente `1px` sólido com `10%` de opacidade de branco (`rgba(255, 255, 255, 0.10)`). |

---

## 3. O Que NÃO Fazer (Anti-Patterns Específicos Deste Projeto)

1. **NUNCA usar gradientes multicoloridos difusos (mesh gradients):** O fundo é preto absoluto sólido (`#000000`).
2. **NUNCA usar drop-shadows difusas ou borradas:** A interface não finge iluminação 3D falsa; a separação é feita exclusivamente por linhas de contenção de 1px e elevação discreta via `transform: translateY(-6px)`.
3. **NUNCA usar ilustrações 2D ou 3D genéricas ("flat characters corporativos"):** Todo visual deve ser fotografia real de projeto, mockup fotográfico de estúdio ou wireframe arquitetural puro.
4. **NUNCA usar cantos arredondados gigantes em cards:** Cards de serviço e projeto usam cantos retos ou raio discreto de `8px` (`--radius-md`). Apenas botões e badges operam em stadium/pill (`999px`).
5. **NUNCA suavizar a quebra de linha de títulos para evitar "impacto":** Os títulos são intencionalmente monolíticos e diagramados com quebras calculadas (`<span>CRIANDO EXPERIÊNCIAS</span><br><span>DIGITAIS COM</span><br><span>PROPÓSITO.</span>`).

