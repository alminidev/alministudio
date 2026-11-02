# Matriz de Correções Prioritárias (Priority Fixes) — ALMINI STUDIO

**Papel:** Diretor de Criação  
**Data:** 02 de Novembro de 2026  
**Documento Fonte:** Auditoria Completa (`06-audit/`)

---

## 1. Quadro de Notas Consolidadas (0 a 10)

| Dimensão Avaliada | Nota | Diagnóstico Resumido |
| :--- | :---: | :--- |
| **Fidelidade ao Contrato** | **10.0 / 10** | Zero violações de stack, zero placeholders, tokens seguidos à risca. |
| **Design & Direção de Arte** | **9.2 / 10** | Monumentalidade gráfica brutalista marcante, sem clichês de templates. |
| **Experiência do Usuário (UX)** | **9.4 / 10** | Cockpit drawer impecável, cálculo de offset no scroll perfeito. |
| **Conversão** | **9.0 / 10** | Chamadas diretas, CTA unificado sem dispersão. |
| **Responsividade & Mobile** | **9.5 / 10** | Touch targets de 44px, clamp tipográfico fluído de 320px a 1440px. |
| **Acessibilidade** | **8.8 / 10** | `prefers-reduced-motion` ativo; calibrar contraste de microtextos. |
| **Performance Web** | **9.8 / 10** | Zero frameworks, LCP instantâneo no Hero. |
| **Originalidade** | **9.3 / 10** | Estética suíça técnica brutalista altamente diferenciada. |
| **SEO Técnico** | **9.5 / 10** | Canonical, hreflang, schema.org, robots e sitemap 100% integrados. |
| **MÉDIA GERAL** | **9.4 / 10** | **Qualidade de Agência Internacional** |

---

## 2. Itens Priorizados por Severidade

### P0 — Bloqueantes Críticos (Bloqueiam Entrega)
> *Nenhuma violação encontrada. O projeto cumpre 100% do contrato de decisão e do stack lock.*
* **NENHUM (0 itens P0)**.

---

### P1 — Importantes (Recomendados para o `/polish`)
1. **Inclusão do WhatsApp Direto no Contato:**
   * *Status:* **CONCLUÍDO**.
   * *Onde:* Seção `#contact` e Rodapé (`.footer`).
   * *Implementação:* Canal direto `WHATSAPP: +55 11 98930-7575` com link `https://wa.me/5511989307575` e mensagem de abertura contextual em ambos os idiomas.
2. **Calibração de Contraste no Microtexto:**
   * *Onde:* `.hero-micro`, `.contact-micro`, `.drawer-idx`.
   * *Diagnóstico:* Cor `#636363` tem contraste de ~3.5:1 sobre o fundo preto.
   * *Ação sugerida:* Elevar para `#8a8a8a` para atingir 4.5:1 (WCAG AA).
3. **Exibição Textual do E-mail no Contato:**
   * *Onde:* Seção `#contact`.
   * *Diagnóstico:* O botão `{ VAMOS INICIAR UM PROJETO? ENTRE EM CONTATO }` dispara `mailto:`. Usuários de webmail (Gmail/Outlook no navegador) se beneficiam de ver o e-mail em texto puro copiável.
   * *Ação sugerida:* Adicionar linha sutil com o e-mail textual (`hello@alexandrepolettini.com`) logo abaixo da ação.

---

### P2 — Refinamentos de Acabamento & Polish
1. **Interatividade Visual nos Cards de Projetos:**
   * *Onde:* `.project-visual`.
   * *Diagnóstico:* O container da imagem sobe 6px no hover, mas falta `cursor: pointer` e link envolvendo o bloco visual para facilitar o clique.
2. **Layout do Processo no Breakpoint Tablet:**
   * *Onde:* Breakpoint 768px-1024px.
   * *Diagnóstico:* O grid cai diretamente para 1 coluna; mantê-lo em 2 colunas antes de ir para 1 coluna no mobile puro deixará o tablet mais equilibrado.
3. **Destaque Tipográfico no Manifesto:**
   * *Onde:* Último parágrafo da filosofia ("Não criamos apenas interfaces...").
   * *Diagnóstico:* Adicionar sutil tracking ou formatação de destaque gráfico para valorizar a assinatura conceitual.

---

### P3 — Nice-to-Have (Futuro)
1. **Favicon SVG Monocromático:**
   * Gerar e apontar `favicon.svg` com o monograma `{A}` para a aba do navegador.
2. **Vídeo/Animação no Case 03:**
   * Substituir o canvas escuro autoral por um MP4 em loop ou micro-interação interativa.

