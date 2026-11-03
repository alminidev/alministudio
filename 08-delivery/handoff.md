# Manual de Handoff & Manutenção — ALMINI STUDIO

**Destinatário:** Alexandre Polettini / Equipe de Engenharia e Design  
**Data:** 02 de Novembro de 2026  
**Repositório:** [https://github.com/alminidev/alministudio](https://github.com/alminidev/alministudio)

---

## 1. Visão Geral da Arquitetura

O **Almini Studio** foi concebido e codificado sob a filosofia **Zero-Dependency Brutalism**:
- **Linguagens:** HTML5 Semântico, CSS3 Moderno (Custom Properties nativas), Vanilla JavaScript (ES6+).
- **Sem Frameworks:** Nenhum build complexo, sem npm, sem Webpack, sem Vite, sem React, sem Tailwind. O site roda diretamente servido por qualquer web server estático (Nginx, Apache, GitHub Pages, Vercel, Netlify, Cloudflare Pages).
- **Internacionalização Estática:** A raiz (`index.html`) atua como roteador cliente sutil, direcionando para `/pt/` (padrão) ou `/en/`. Ambas as pastas compartilham a mesma folha de estilo (`styles.css`), script (`script.js`) e diretório de mídia (`assets/`).

---

## 2. Estrutura de Arquivos

```
alministudio/
├── 00-brief/               # Contrato de escopo e stack-lock
├── 01-research/            # Benchmarks e análise de mercado
├── 02-strategy/            # Posicionamento e proposta de valor
├── 03-references/          # DNA criativo e referências visuais
├── 04-design/              # Design System e tokens de cores
├── 05-build/               # Cópia idêntica do build de produção
├── 06-audit/               # Auditorias de fidelidade, UX, SEO e visual
├── 07-polish/              # Histórico de refinamentos de acabamento
├── 08-delivery/            # Documentação final de entrega e QA
├── assets/                 # Imagens, fotografias e favicon vetorial
│   ├── favicon.svg         # Monograma vetorial {A} do estúdio
│   ├── nix-website-hero.jpg
│   ├── manos-car-identity.jpg
│   └── ...
├── pt/
│   └── index.html          # Experiência completa em Português
├── en/
│   └── index.html          # Experiência completa em Inglês
├── index.html              # Roteador de entrada de idioma inteligente
├── 404.html                # Página de erro 404 estática minimalista
├── styles.css              # Folha de estilo única com todos os tokens
├── script.js               # Micro-interações, gavetas, drawer e analytics
├── robots.txt              # Diretrizes de indexação para buscadores
└── sitemap.xml             # Mapeamento XML de rotas canônicas
```

---

## 3. Guia de Manutenção e Atualizações

### 3.1. Como Adicionar ou Alterar Projetos no Portfólio
1. Salve as novas imagens otimizadas na pasta `assets/`.
2. Abra `pt/index.html` e localize a seção `<section id="work">`.
3. Duplique ou edite o bloco `<article class="project-card">`:
   - Atualize o numeral em `.project-num` (ex: `04`).
   - Atualize título, categoria, escopo e tags em `.project-scope`.
   - No container `.project-visual`, atualize a tag `<img>` e o atributo `alt`.
4. Repita a mesma alteração no arquivo `en/index.html` traduzindo os textos para inglês.
5. Sincronize com a pasta `05-build/` copiando os arquivos atualizados.

### 3.2. Como Alterar Dados de Contato e Redes
- **WhatsApp:** O número está configurado no parâmetro internacional `5511989307575` nos atributos `href` de links com classe `.channel-link` e no rodapé.
- **E-mail:** Centralizado em `hello@alexandrepolettini.com` tanto nos links `mailto:` quanto no texto copiável `.contact-email-direct`.
- **Instagram:** Atualizar a URL destino em `pt/index.html` e `en/index.html` no elemento correspondente.
- **Link do Autor:** O nome Alexandre Polettini aponta para `https://www.alministudio.com.br/almini`.

### 3.3. Tokens de Cor e Tipografia
- Todas as variáveis visuais vivem no início de `styles.css` sob o seletor `:root`.
- **Atenção:** Qualquer alteração em variáveis hexadecimais deve ser registrada também em `04-design/design-system.md` e `04-design/colors.md` para manter a conformidade com o script de validação de fidelidade (`check-fidelity.js`).

---

## 4. Como Executar e Validar Localmente

1. **Servidor Local Simples:**
   ```bash
   # Com Python 3
   python -m http.server 8000

   # Com Node.js / npx
   npx serve .
   ```
2. **Checagem de Fidelidade ao Contrato:**
   ```bash
   node "C:\Users\Pichau\.gemini\config\skills\fidelity-check\scripts\check-fidelity.js" .
   ```

---

## 5. Procedimento de Deploy em Produção

O projeto está conectado ao GitHub: `https://github.com/alminidev/alministudio`.
Para publicar alterações:
```bash
git add -A
git commit -m "feat: sua mensagem de alteração"
git push origin main
```
Caso utilize serviços como **Vercel**, **Cloudflare Pages** ou **Netlify**, basta conectar o repositório — sem comandos de build necessários (`Build Command: [vazio]`, `Publish directory: .` ou `05-build`).

