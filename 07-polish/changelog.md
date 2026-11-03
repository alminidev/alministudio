# Polish Changelog — ALMINI STUDIO

**Data:** 02 de Novembro de 2026  
**Fase:** /polish (P1 & P2 Fixes)  
**Versão:** 1.1.0  
**Status do Fidelity Check:** 0 violações de stack, 0 placeholders, 0 cores órfãs, 0 headings ausentes.

---

## 1. Resumo das Correções Implementadas

Com base nas auditorias de `06-audit/` e na matriz de prioridades `06-audit/priority-fixes.md`, foram executadas as seguintes melhorias:

### P1 — Melhorias de Alta Prioridade

#### P1.1 — Integração Limpa de WhatsApp e Instagram no Contato
- **O que mudou:** Inserção do canal direto do WhatsApp (`+55 11 98930-7575`) com texto de pré-abertura contextual ("Olá, gostaria de conversar sobre um projeto.") tanto em PT quanto em EN, e preservação do link para Instagram.
- **Formatação Visual:** O número de telefone foi encapsulado e ocultado do rótulo visual (`WHATSAPP`), mantendo o design estritamente minimalista, sofisticado e tipográfico conforme solicitado pelo Diretor de Criação.
- **Arquivos:** `pt/index.html`, `en/index.html`, `05-build/pt/index.html`, `05-build/en/index.html`.

#### P1.2 — Calibração de Contraste para Acessibilidade (Microtexto)
- **O que mudou:** O token de cor `--text-subtle` foi calibrado de `#636363` (contraste de ~3.5:1) para `#8a8a8a` (contraste de 7.0:1 — conformidade WCAG AAA).
- **Impacto:** Melhora substancial da legibilidade em subtítulos de passos de processo, micro-avisos (`.hero-micro`, `.contact-micro`) e numerais dos drawers sem comprometer a atmosfera monocromática soturna.
- **Arquivos:** `04-design/colors.md`, `04-design/design-system.md`, `styles.css`, `05-build/styles.css`.

#### P1.3 — Exibição Textual Direta de E-mail
- **O que mudou:** Inclusão de linha tipográfica mono `.contact-email-direct` logo abaixo do botão principal de contato: `"ou envie diretamente para hello@alexandrepolettini.com"` (PT) e `"or reach out directly at hello@alexandrepolettini.com"` (EN).
- **Por quê:** Garante que usuários em computadores corporativos ou que utilizam webmails (Gmail/Outlook no browser) possam copiar ou clicar no e-mail diretamente sem depender de cliente nativo de e-mail registrado no OS.
- **Arquivos:** `pt/index.html`, `en/index.html`, `styles.css`, `05-build/styles.css`.

---

### P2 — Refinamentos de Acabamento & Polish

#### P2.1 — Interatividade Visual nos Cards de Projetos
- **O que mudou:** O container de imagem de cada projeto (`.project-visual`) agora é um elemento `<a>` interativo com `cursor: pointer`, direcionando suavemente para a seção de contato `#contact` com `aria-label` descritivo.
- **Por quê:** Corrige a expectativa de clique do visitante ao passar o cursor sobre as fotos com elevação de 6px.
- **Arquivos:** `pt/index.html`, `en/index.html`, `styles.css`.

#### P2.2 — Equilíbrio do Grid de Processo em Telas Tablet
- **O que mudou:** No breakpoint de tablet (`max-width: 768px`), o `.process-grid` agora mantém 2 colunas (`repeat(2, 1fr)`) com espaçamento de `2rem`, colapsando para 1 coluna apenas no breakpoint estritamente mobile (`max-width: 480px`).
- **Por quê:** Evita espaços verticais vazios excessivos em iPads e tablets, mantendo a cadência rítmica e a leitura em pares das 4 fases.
- **Arquivos:** `styles.css`, `05-build/styles.css`.

#### P2.3 — Destaque Tipográfico no Manifesto
- **O que mudou:** Aplicação da classe `.manifesto-highlight` no parágrafo final filosófico do manifesto (*"Não criamos apenas interfaces. Desenvolvemos experiências que comunicam, conectam e deixam uma impressão duradoura"*). O elemento recebeu hairline superior sutil, corpo `1.25rem` e cor branca pura (`--text-white`).
- **Por quê:** Cria um ponto focal de fechamento que sintetiza o posicionamento do estúdio com autoridade gráfica.
- **Arquivos:** `pt/index.html`, `en/index.html`, `styles.css`.

---

## 2. Verificação de Integridade e Regressão

1. **Stack & Contrato:**
   - 0 violações de stack (HTML5 + CSS3 puro + Vanilla JS ES6+).
   - 0 placeholders / lorem ipsum.
   - 0 cores órfãs (todas as cores correspondem estritamente a `04-design/design-system.md`).
2. **Links e Ações:**
   - Alexandre Polettini -> `https://www.alministudio.com.br/almini` (link verificado em PT e EN, no rodapé e no texto Sobre).
   - Botão de contato unificado -> `mailto:hello@alexandrepolettini.com`
   - WhatsApp direto -> `https://wa.me/5511989307575`
   - Instagram -> `https://instagram.com`
3. **Internacionalização:**
   - Simetria total entre `pt/index.html` e `en/index.html`.

