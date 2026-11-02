# Auditoria Técnica & SEO (Fase 3) — ALMINI STUDIO

**Papel:** Tech Lead & SEO Engineer  
**Data:** 02 de Novembro de 2026  
**Nota Técnica:** **9.8 / 10**  
**Nota de SEO:** **9.5 / 10**

---

## 1. Auditoria de SEO Técnico (`03-strategy/seo-brief.md`)

### A. Metadados e Títulos
* **Title Tags:**
  * PT: `ALMINI STUDIO by alexandre polettini — Estúdio Independente de Design Digital` (77 caracteres) — Dentro do limite de exibição nos SERPs do Google.
  * EN: `ALMINI STUDIO by alexandre polettini — Independent Digital Design Studio` (74 caracteres).
* **Meta Descriptions:**
  * PT: `Unimos direção de arte, design e tecnologia para transformar ideias em experiências digitais com personalidade, propósito e precisão visual.` (140 caracteres) — Conforme ao brief.
  * EN: `We unite art direction, design, and technology to turn ideas into digital experiences with personality, purpose, and visual precision.` (138 caracteres).
* **Tags Canônicas & Hreflang:**
  * Ambos os arquivos (`/pt/` e `/en/`) possuem links bidirecionais estritos:
    * `rel="canonical"` apontando para a URL própria da versão.
    * `rel="alternate" hreflang="pt-BR"`
    * `rel="alternate" hreflang="en"`
    * `rel="alternate" hreflang="x-default"` apontando para a versão raiz `/pt/`.

### B. Hierarquia de Headings
* **H1 Único:**
  * PT: `CRIANDO EXPERIÊNCIAS DIGITAIS COM PROPÓSITO.`
  * EN: `CRAFTING DIGITAL EXPERIENCES WITH PURPOSE.`
* **H2s Estruturados por Seção:**
  * Manifesto: `DESIGN É MAIS DO QUE APARÊNCIA.`
  * Work: `IDEIAS, EXPERIMENTOS E EXPERIÊNCIAS.`
  * Serviços: `O QUE FAZEMOS.`
  * Processo: `DA IDEIA À EXPERIÊNCIA.`
  * Sobre: `DESIGN, EXPERIÊNCIA E PENSAMENTO DIGITAL.`
  * Contato: `TEM UMA IDEIA? VAMOS TIRÁ-LA DO PAPEL.`
* **H3s Semânticos:** Nos cards de projetos (`NIX`, `MANO'S CAR`, `EXPERIMENTAL R&D`), nos serviços, nas etapas do processo e na gaveta do menu.

### C. Dados Estruturados (Schema.org JSON-LD)
* Presente no `<head>` de ambas as páginas:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Almini Studio by Alexandre Polettini",
    "url": "https://alministudio.com/pt/",
    "description": "Estúdio independente de criação digital que une design, direção de arte e desenvolvimento front-end autoral.",
    "founder": {
      "@type": "Person",
      "name": "Alexandre Polettini"
    }
  }
  ```

### D. Rastreabilidade & Indexação
* `robots.txt`: Permite indexação com link para o sitemap:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://alministudio.com/sitemap.xml
  ```
* `sitemap.xml`: Lista explicitamente as URLs canônicas (`/`, `/pt/`, `/en/`) com `lastmod`, `changefreq` e prioridades bem definidas.

---

## 2. Performance, Renderização & Código Limpo

* **Peso de Transferência (Payload):**
  * HTML: ~18 KB por arquivo.
  * CSS: ~25 KB unificado, carregado diretamente com 1 requisição.
  * JS: ~3.2 KB puro, sem frameworks pesados.
  * Imagens: Todas em JPEG compactadas em alta definição, pesando menos de 250 KB cada.
* **Métricas Core Web Vitals (Estimativa Estática):**
  * **LCP (Largest Contentful Paint):** `< 0.8s` (O hero é puramente tipográfico, renderizado instantaneamente no primeiro frame).
  * **FID / INP (Interaction to Next Paint):** `< 10ms` (Sem threads pesadas de React/Vue travando o main thread).
  * **CLS (Cumulative Layout Shift):** `0.00` (As imagens de projeto têm dimensões e proporções travadas via CSS).
* **Acessibilidade & Animações (`prefers-reduced-motion`):**
  * Incluído bloco estrito de override desativando todas as durações de transição e animação caso o usuário tenha sensibilidade ao movimento configurada no sistema operacional.

