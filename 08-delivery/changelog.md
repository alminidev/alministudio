# Histórico de Versões & Lançamento (Changelog) — ALMINI STUDIO

Todas as alterações notáveis deste projeto estão registradas neste documento.

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
