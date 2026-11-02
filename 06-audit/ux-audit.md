# Auditoria de Experiência do Usuário (UX) — ALMINI STUDIO

**Papel:** UX Specialist & Auditor  
**Data:** 02 de Novembro de 2026  
**Nota de UX:** **9.4 / 10**  
**Nota de Responsividade:** **9.5 / 10**

---

## 1. Arquitetura de Navegação & Fluxo

### A. Cockpit Navigation (Menu Drawer)
* **Comportamento Tátil e de Teclado:**
  * O menu abre e fecha com transição suave (`opacity` e `transform`).
  * **Fechamento inteligente:** Fecha ao clicar fora do drawer, ao clicar em qualquer link interno e ao pressionar a tecla `Escape`.
  * **Acessibilidade:** Atributo `aria-expanded` alterna corretamente entre `true` e `false`.
* **Âncoras de Rolagem Suave (Smooth Scroll):**
  * O script calcula `targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight;`.
  * Isso impede que os títulos das seções fiquem encobertos atrás do header fixo de 76px após o clique nos links.

### B. Seletor de Idioma & Internacionalização
* **Persistência de Sessão:** O idioma selecionado pelo usuário é gravado em `localStorage('almini_lang')`.
* **Entrada Inteligente (`index.html`):** Roteia instantaneamente no carregamento inicial para o idioma do navegador (`navigator.language`), com fallback obrigatório para `pt-BR`.
* **Sem Flash de Conteúdo:** O script de detecção no `index.html` executa imediatamente no `<head>`, sem recarregamentos visíveis.

---

## 2. Ergonomia Mobile & Breakpoints

### A. Breakpoint Tablet (768px a 1024px)
* Grids de 2 colunas nos serviços e processos mantêm densidade de informação sem espremer o conteúdo.
* O Manifesto e o Sobre convertem-se em leitura vertical contínua sem quebras de layout.

### B. Breakpoint Mobile (320px a 767px)
* **Touch Targets (Zonas de Toque):**
  * Todos os botões (`.btn-primary`, `.btn-secondary`), o gatilho do menu, os seletores `PT / EN` e o link do Instagram possuem altura mínima de **44px**, atendendo às diretrizes de ergonomia da Apple (HIG) e do Google (Material).
* **Tipografia Fluida (`clamp`):**
  * Nenhum título vaza lateralmente na viewport de 320px (iPhone SE).
  * O espaçamento horizontal de segurança (`container` com `1.25rem` de padding) evita toque de texto nas bordas da tela.
* **Gaveta de Navegação:**
  * A largura `min(320px, calc(100vw - 2.5rem))` garante que o menu nunca ultrapasse a largura do smartphone.

---

## 3. Oportunidades de Otimização em UX
* **Webmail Fallback no Contato:** O CTA principal dispara `mailto:`. Para usuários que não têm cliente padrão configurado (usam Gmail ou Outlook direto no navegador), exibir o e-mail em texto puro copiável (`hello@alexandrepolettini.com`) evita atrito de contato.
* **Indicador de Progresso de Leitura:** Em landing pages de narrativa contínua, uma linha milimétrica sutil no topo do header indicando o scroll é um recurso útil que harmoniza com a identidade instrumental.

