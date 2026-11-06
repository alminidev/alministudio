# Histórico de Versões & Lançamento (Changelog) — ALMINI STUDIO

Todas as alterações notáveis deste projeto estão registradas neste documento.

---

## 2026-11-05 — Link Externo Oficial para o Projeto NIX
**Pedido por:** Usuário  
**O que mudou:**  
- O botão `{ VER PROJETO } →` (e `{ VIEW PROJECT } →` em EN) e o container de imagem do projeto NIX agora direcionam para o site oficial `https://www.nix3d.com.br` com abertura em nova aba (`target="_blank" rel="noopener noreferrer"`).  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `05-build/pt/index.html`, `05-build/en/index.html`.

---

## 2026-11-05 — Exibição Panorâmica Completa Sem Cortes no Case NIX
**Pedido por:** Usuário  
**O que mudou:**  
- Implementada classe `.project-visual-contain` no card do projeto 01 (NIX), removendo o corte lateral/vertical provocado por `object-fit: cover` e `min-height: 420px`.
- A imagem agora é renderizada 100% íntegra (`width: 100%; height: auto; object-fit: contain`), preservando todo o lineup de impressoras 3D, dry boxes e cabeçalho sem qualquer corte.  
**Arquivos alterados:** `styles.css`, `pt/index.html`, `en/index.html`, `05-build/styles.css`, `05-build/pt/index.html`, `05-build/en/index.html`.

---

## 2026-11-05 — Atualização da Imagem do Case NIX
**Pedido por:** Usuário  
**O que mudou:**  
- Atualizada a imagem visual do projeto 01 (NIX) para a nova composição panorâmica de equipamentos de impressão 3D e dry boxes (`assets/Evolução do Setup de Impressão 3D.png`).  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `assets/Evolução do Setup de Impressão 3D.png`, `05-build/pt/index.html`, `05-build/en/index.html`, `05-build/assets/Evolução do Setup de Impressão 3D.png`.

---

## 2026-11-05 — Substituição do Case 02: Mano's Car por IKEWAI
**Pedido por:** Usuário  
**O que mudou:**  
- Substituído o Case 02 de portfólio (anteriormente Mano's Car) pelo projeto **IKEWAI** (empresa focada em coaching, investimentos em negócios e projetos inovadores).
- Incorporada a imagem real de manual e aplicações de marca (`assets/ikewai-brand-identity.jpg`).
- Atualizados os textos em português e inglês com foco nos pilares da marca: *Vitória, coragem e confiança*.  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `README.md`, `assets/ikewai-brand-identity.jpg`, `05-build/pt/index.html`, `05-build/en/index.html`, `05-build/README.md`, `05-build/assets/ikewai-brand-identity.jpg`.

---

## 2026-11-05 — Remoção de Chaves { } no Microtexto do Hero
**Pedido por:** Usuário  
**O que mudou:**  
- Removidas as chaves `{ }` do microtexto editorial do Hero, exibindo: `"Design independente. Pensamento criativo. Experiências digitais."` (PT) e `"Independent design. Creative thinking. Digital experiences."` (EN).  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `05-build/pt/index.html`, `05-build/en/index.html`.

---

## 2026-11-05 — Remoção de Chaves { } no Microtexto de Contato
**Pedido por:** Usuário  
**O que mudou:**  
- Removidas as chaves `{ }` do microtexto de apoio da seção de contato, mantendo a leitura limpa: `"Conte um pouco sobre sua ideia. Vamos encontrar o melhor caminho para desenvolvê-la."` (PT) e `"Tell us a bit about your idea. We'll find the best path to build it."` (EN).  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `05-build/pt/index.html`, `05-build/en/index.html`.

---

## 2026-11-05 — Atualização dos Textos e Posicionamento dos Serviços
**Pedido por:** Usuário  
**O que mudou:**  
- Atualizados os 4 cards da seção de serviços (`#services`) com a nova matriz de ofertas e proposta de valor do estúdio:
  1. `01 / BRAND ECOSYSTEM | A SOLUÇÃO COMPLETA` — Ecossistema digital de ponta a ponta unindo identidade visual, verbal e web performance.
  2. `02 / BRAND IDENTITY & ART DIRECTION | POSICIONAMENTO VISUAL` — Linguagem estética, brand books e direção fotográfica com personalidade própria.
  3. `03 / DIGITAL EXPERIENCE & WEB DESIGN | SITES E INTERFACES DE ALTO PADRÃO` — Ambientes imersivos, navegação fluida e foco na jornada do usuário.
  4. `04 / HIGH-CONVERSION LANDING PAGES | PÁGINAS DE ALTA PERFORMANCE` — Páginas estratégicas para lançamentos, campanhas e tráfego pago.
- Textos bilíngues sincronizados em português e inglês.  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `05-build/pt/index.html`, `05-build/en/index.html`.

---

## 2026-11-05 — Simplificação do CTA de Contato e Remoção de E-mail Textual
**Pedido por:** Usuário  
**O que mudou:**  
- Botão de contato na seção `#contact` simplificado para `{ VAMOS INICIAR UM PROJETO? }` em Português e `{ LET'S START A PROJECT? }` em Inglês.
- Removida a linha de e-mail auxiliar em texto puro (`ou envie diretamente para hello@alexandrepolettini.com` / `or reach out directly at hello@alexandrepolettini.com`).
- Limpeza dos seletores `.contact-email-direct` em `styles.css`.  
**Arquivos alterados:** `pt/index.html`, `en/index.html`, `styles.css`, `05-build/pt/index.html`, `05-build/en/index.html`, `05-build/styles.css`.

---

## [Versão 1.1.0] — 2026-11-02 (Release de Produção & Polish /ship)

### Adicionado
- **Canal Direto do WhatsApp:** Integração de link de WhatsApp com pré-saudação nos contatos e no rodapé em PT e EN (`wa.me/5511989307575`). Rótulo limpo e elegante (`WHATSAPP`), preservando a estética minimalista.
- **Link do Autor:** Alexandre Polettini direcionado para `https://www.alministudio.com.br/almini` em todas as menções de autoria e rodapé.
- **Canal do Instagram:** Restaurado link com estética mono em ambas as páginas de contato e rodapé.
- **E-mail Textual Copiável:** Adicionada linha `.contact-email-direct` abaixo da ação primária de contato para facilitar cópia direta por usuários de webmail.
- **Página de Erro 404:** Criado `404.html` minimalista e semântico tanto na raiz quanto na pasta `05-build/`.
- **Favicon Vetorial SVG:** Criado `assets/favicon.svg` com monograma brutalista `{A}` do estúdio, vinculado em todas as páginas.
- **Documentação de Entrega:** Gerados `08-delivery/final-qa.md`, `08-delivery/handoff.md` e `08-delivery/changelog.md`.

### Modificado
- **Calibração de Acessibilidade (Microtextos):** Token `--text-subtle` elevado de `#636363` para `#8a8a8a` para atingir taxa de contraste 7:1 (WCAG AAA).
- **Interatividade nos Cards de Projeto:** As imagens dos projetos (`.project-visual`) agora são links clicáveis com `cursor: pointer` e `aria-label` descritivos direcionando para `#contact`.
- **Equilíbrio no Grid de Processo:** Em telas tablet (`max-width: 768px`), o grid agora se organiza em 2 colunas, colapsando para 1 coluna apenas em telas mobile (< 480px).
- **Destaque no Manifesto:** O fechamento conceitual do manifesto recebeu classe `.manifesto-highlight` com tipografia ampliada e linha de contenção superior.
- **Ação de Contato Consolidada:** Botão único de contato `{ VAMOS INICIAR UM PROJETO? ENTRE EM CONTATO }` eliminando dispersão cognitiva.
- **Sobre o Estúdio:** Simplificada a apresentação na seção Sobre, mantendo foco exclusivo na Direção Criativa.

### Verificado
- **Auditoria de Fidelidade:** `06-audit/` concluída com nota média **9.4 / 10**.
- **Fidelity Check:** 0 violações de stack, 0 placeholders, 0 cores órfãs, 0 headings ausentes.
- **Repositório Remoto:** Sincronizado com `https://github.com/alminidev/alministudio`.

---

## [Versão 1.0.0] — 2026-10-31 (Build Inicial & Estrutura Base)

### Adicionado
- Estrutura completa de pastas de projeto (`00-brief/` a `05-build/`).
- Design System suíço-brutalista monocromático com tokens de design em `styles.css`.
- Roteador de entrada internacional inteligente em Vanilla JavaScript (`index.html`).
- Experiências bilíngues completas em `pt/index.html` e `en/index.html`.
- Cockpit de navegação drawer com telemetria de scroll e cálculo dinâmico de offset.
- 3 cases de projeto com narrativa de impacto e tags de escopo.
- Gavetas sanfona (accordion) interativas de serviços com estado `aria-expanded`.
- Grid de processo metodológico em 4 etapas lineares numeradas.
- Metadados completos de SEO, Open Graph e Schema.org.

