# Referências de Estilo & Princípios Extraídos — ALMINI STUDIO

**Status:** Consolidado (Modo Híbrido: Diretivas do Usuário + Benchmarks Internacionais de Elite)  
**Data:** Outubro de 2026

---

## Referência 01: Amplify Webflow Template
* **URL:** `https://amplify-templates.webflow.io/`
* **Função Primária:** Arquitetura de Navegação & Tensão Tipográfica Monumental.
* **1. O que funciona?**
  * O header em formato "cockpit": botão central em cápsula com ícone `+` que desdobra um drawer suspenso de 320px sem cobrir a tela inteira.
  * O contraste violento de escala entre o título H1 hipercondensado (quase sem entrelinha) e os metadados técnicos secundários em monospace.
* **2. Por que funciona?**
  * Transmite autoridade imediata. O visitante compreende o nível de sofisticação visual nos primeiros 3 segundos de carregamento.
* **3. Qual princípio pode ser extraído?**
  * *Navegação como Instrumento de Precisão:* Menus não precisam ser faixas de texto estáticas e entediantes.
  * *Tensão de Escala:* Grandeza na mensagem principal, precisão milimétrica nos detalhes de suporte.
* **4. O que NÃO deve ser copiado?**
  * A paleta de cores original (laranja queimado `#df720c`, fundos cinzas claros e azul). A marca Almini Studio opera em preto puro.
  * Imagens ou fotos do template original.
* **5. Como adaptar a este projeto?**
  * Adotar o layout do header e do drawer suspensos, estilizados no tema preto puro (`#000000`) e superfícies translúcidas com bordas finas de 10% de branco.

---

## Referência 02: Portfólio Alexandre Polettini (Base Original)
* **Origem:** Base do repositório `alministudio` (`index.html` original).
* **Função Primária:** Atmosfera de Fundo, Identidade Brutalista e Sintaxe Técnica.
* **1. O que funciona?**
  * O fundo preto absoluto (`#000000`) de contraste infinito.
  * A utilização de brackets e chaves de programação (`{work}`, `{about}`, `{contact}`, `{SELECTED WORK}`).
  * A ausência deliberada de poluição visual e gradientes coloridos desnecessários.
* **2. Por que funciona?**
  * Conecta diretamente a mente do designer gráfico com a precisão do engenheiro front-end. Comunica rigor, sobriedade e maturidade.
* **3. Qual princípio pode ser extraído?**
  * *Brutalismo Técnico Funcional:* A beleza decorre da pureza da tipografia e da hierarquia da informação, não de ornamentos artificiais.
* **4. O que NÃO deve ser copiado?**
  * O layout excessivamente estático e a ausência de seções ricas de proposta de valor (o site original não tinha manifesto, serviços nem processo).
* **5. Como adaptar a este projeto?**
  * Preservar o preto puro e a notação de chaves sintáticas como marca registrada autoral, expandindo a estrutura com os novos blocos narrativos.

---

## Referência 03: Basement Studio & Swiss Digital Style
* **Função Primária:** Motion Design Sutil & Hierarquia Editorial.
* **1. O que funciona?**
  * Hover states com microtransições (`scale3d` sutil de 0.98 a 1.01 e translação suave de `-4px` a `-8px`).
  * Linhas estruturais de 1px com opacidade baixa que funcionam como grid aparente sem roubar o protagonismo do conteúdo.
* **2. Por que funciona?**
  * Dá vida à interface sem torná-la pesada ou cansativa. Cada movimento tem um propósito de feedback ao usuário.
* **3. Qual princípio pode ser extraído?**
  * *Motion Invisível:* A animação só deve ser percebida pela sensação de fluidez e refinamento tátil, nunca como distração.
* **4. O que NÃO deve ser copiado?**
  * Efeitos 3D excessivos que consomem CPU/GPU e tornam o carregamento lento.
* **5. Como adaptar a este projeto?**
  * CSS transitions nativas de 200ms a 350ms com curvas de desaceleração `cubic-bezier(0.25, 1, 0.5, 1)` aplicadas a botões, cards e drawers.

