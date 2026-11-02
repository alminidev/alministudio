# Experiência do Usuário (UX Design) — ALMINI STUDIO

**Papel:** UX Designer Sênior  
**Princípio Central:** Um elemento dominante por seção; clareza imediata nos primeiros 5 segundos.

---

## 1. Teste dos Primeiros 5 Segundos (5-Second Rule)

Ao aterrissar no site (desktop ou mobile), o visitante apreende instantaneamente:
* **O que é?** Estúdio independente de design digital.
* **Para quem é?** Marcas e empresas que valorizam identidade autêntica e acabamento de alto nível.
* **Qual o benefício?** Experiências digitais que unem direção de arte e código front-end sem intermediários.
* **Qual ação tomar?** `[ EXPLORAR PROJETOS ]` para ver o trabalho ou `[ VAMOS CONVERSAR ]` para iniciar contato.

---

## 2. Anatomia de Seções e Elemento Dominante

### Seção 01: Header & Cockpit Navigation
* **Objetivo:** Estabelecer a marca, oferecer controle de navegação concentrado e alternador de idioma.
* **Elemento Dominante:** O Menu Trigger central em formato pill (`+ MENU`), que ancora o olhar e atrai a interação.
* **Comportamento Desktop:** Fixo (`position: fixed`, altura `76px`), fundo com desfoque de `14px`, 3 zonas (brand, trigger, ações).
* **Comportamento Mobile:** Mantém o trigger central e o seletor `PT / EN`. A etiqueta de disponibilidade é ocultada para evitar quebras de linha.

### Seção 02: Hero
* **Objetivo:** Declaração de posicionamento de alto impacto e convite à exploração.
* **Elemento Dominante:** A tipografia colossal H1 (`CRIANDO EXPERIÊNCIAS DIGITAIS COM PROPÓSITO.`).
* **Conteúdo Real:** Eyebrow + H1 tripartido + Parágrafo de 680px + CTAs Duplos + Microtexto.
* **Comportamento Desktop:** Centralizado, altura mínima de viewport menos header (`min-height: calc(100vh - 76px)`).
* **Comportamento Mobile:** H1 redimensionado fluidamente via `clamp()` para `2.75rem`, botões empilhados verticalmente a 100% de largura.

### Seção 03: Manifesto (Nossa Filosofia)
* **Objetivo:** Estabelecer profundidade e autoridade conceitual, separando o estúdio de operadores de templates.
* **Elemento Dominante:** A frase de abertura em destaque: *"DESIGN É MAIS DO QUE APARÊNCIA."*
* **Conteúdo Real:** Proposta editorial em 5 parágrafos curtos e concisos.
* **Comportamento Desktop:** Grid 1:2 (Etiqueta à esquerda, texto corrido amplo à direita).
* **Comportamento Mobile:** Empilhamento sequencial em coluna única.

### Seção 04: Selected Work (Projetos)
* **Objetivo:** Prova de capacidade técnica e estética através de projetos concretos.
* **Elemento Dominante:** A imagem e o número monumental de cada card de projeto (`01`, `02`, `03`).
* **Conteúdo Real & Atribuição de Ativos:**
  * Projeto 01 NIX: Imagem real `assets/nix-website-hero.jpg` (1024×514).
  * Projeto 02 Mano's Car: Imagem real `assets/manos-car-identity.jpg` (1024×682).
  * Projeto 03 Autoral R&D: Moldura estilizada de laboratório experimental.
* **Comportamento Desktop:** Grid assimétrico de 2 colunas (`1fr` info / `1.3fr` imagem).
* **Comportamento Mobile:** Coluna única: texto acima, imagem abaixo com altura mínima de `260px`.

### Seção 05: Services (O Que Fazemos)
* **Objetivo:** Descrever com clareza matemática os 4 serviços entregues, sem generalismos.
* **Elemento Dominante:** O grid estruturado de 4 cards modulares com bordas finas de contenção.
* **Conteúdo Real:** 01 Direção de Arte Digital, 02 Web Design & UI/UX, 03 Desenvolvimento Web, 04 Landing Pages.
* **Comportamento Desktop:** Grid 2x2 equilibrado.
* **Comportamento Mobile:** Coluna única vertical com separação por borda de 1px.

### Seção 06: Process (Nosso Processo)
* **Objetivo:** Eliminar o medo do desconhecido de contratação, mostrando um fluxo linear seguro.
* **Elemento Dominante:** A numeração sequencial das 4 fases (`01` a `04`) em tipografia condensada.
* **Conteúdo Real:** Descobrir, Conceituar, Desenhar, Desenvolver.
* **Comportamento Desktop:** Linha horizontal de 4 colunas contíguas.
* **Comportamento Mobile:** Grid 2x2 no tablet e 1 coluna vertical no mobile portrait.

### Seção 07: About (Sobre o Estúdio)
* **Objetivo:** Apresentar a história de formação, a liderança de Alexandre Polettini e o tech stack nativo.
* **Elemento Dominante:** O texto autoral de conexão gráfica-digital ladeado pelas tags técnicas de código.
* **Comportamento Desktop:** Grid 1.2fr (prosa) para 1fr (sidebar com tags).
* **Comportamento Mobile:** Empilhamento vertical com sidebar dividida por borda superior.

### Seção 08: Contact (Fechamento)
* **Objetivo:** Conduzir o visitante engajado ao contato imediato.
* **Elemento Dominante:** O título monumental *"TEM UMA IDEIA? VAMOS TIRÁ-LA DO PAPEL."*
* **Ações:** Botões diretos de e-mail e canais de rede social sem formulários intrusivos.

