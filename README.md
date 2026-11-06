# Almini Studio

Estúdio de design, sites e landing pages por **Alexandre Polettini**.

Projetos autorais que unem direção de arte, design de interfaces e desenvolvimento web, com estética brutalista editorial suíça contemporânea e rigor técnico.

🔗 **Site:** [alministudio.com.br](https://alministudio.com.br)  
📷 **Instagram:** [@almini.studio](https://instagram.com/almini.studio)  
👨‍💻 **Direção Criativa:** [Alexandre Polettini](https://www.alministudio.com.br/almini)

---

## Sobre

Este repositório contém o site oficial do **Almini Studio**. O projeto apresenta os serviços do estúdio, trabalhos selecionados, metodologia de processo e canais diretos de contato.

O estúdio nasce da combinação sólida de design gráfico, direção de arte editorial e produção visual com engenharia front-end moderna.

## Arquitetura & Tecnologias

- **HTML5 Semântico:** Marcação estruturada para SEO e acessibilidade.
- **CSS3 Puro com Tokens:** Variáveis CSS nativas, layout fluido via `clamp()`, Flexbox e Grid.
- **Vanilla JavaScript (ES6+):** Zero dependências externas; interações de drawer e `IntersectionObserver` acelerado por GPU.
- **Internacionalização (i18n):** Estrutura bilíngue nativa com diretórios `/pt/` e `/en/` e roteador automático com persistência via `localStorage`.
- **Tipografia:** Google Fonts (`Bebas Neue`, `IBM Plex Mono`, `IBM Plex Sans`, `Inter`).

## Estrutura do Projeto

```
alministudio/
├── index.html            # Roteador de entrada de idioma inteligente
├── styles.css            # Folha de estilos mestre (Design System & Tokens)
├── script.js             # Lógica de interações, menu drawer e scroll reveal
├── pt/                   # Versão em Português (pt-BR)
│   └── index.html
├── en/                   # Versão em Inglês (en-US)
│   └── index.html
├── assets/               # Imagens de projetos reais (NIX, Ikewai)
├── robots.txt            # Diretivas de rastreamento e indexação
├── sitemap.xml           # Mapa do site multilíngue
├── 00-brief/             # Briefing, escopo, stack lock e manifesto de ativos
├── 01-research/          # Pesquisa de mercado, concorrentes e público
├── 02-references/        # Creative DNA e análise visual
├── 03-strategy/          # Posicionamento, mensagens e SEO Brief
├── 04-design/            # Art Direction, Design System e especificações de UX
├── 05-build/             # Espelho da implementação com hero-approval.md
└── 06-audit/             # Auditoria crítica completa (Fidelidade, Visual, UX, SEO)
```

---

© 2026 Almini Studio. Todos os direitos reservados.  
Design & Code by [Alexandre Polettini](https://www.alministudio.com.br/almini).
