# Arquitetura de Informação (Information Architecture) — ALMINI STUDIO

**Status:** Aprovado  
**Escopo:** Mapeamento de Rotas, Nós de Conteúdo e Âncoras

---

## 1. Topologia de Rotas do Website

```
[ https://alministudio.com/ ]
              │
              ├── [ /pt/ ]  (Padrão pt-BR)
              │     ├── #home        (Hero Section)
              │     ├── #manifesto   (Filosofia Editorial)
              │     ├── #work        (Projetos Selecionados)
              │     ├── #services    (O Que Fazemos)
              │     ├── #process     (Metodologia 01-04)
              │     ├── #about       (Sobre o Estúdio & Stack)
              │     └── #contact     (Chamada & Ações)
              │
              └── [ /en/ ]  (Versão Internacional en)
                    ├── #home        (Hero Section)
                    ├── #manifesto   (Editorial Philosophy)
                    ├── #work        (Selected Work)
                    ├── #services    (What We Do)
                    ├── #process     (Methodology 01-04)
                    ├── #about       (About & Stack)
                    └── #contact     (Closing & Actions)
```

---

## 2. Mapa de Fluxo de Navegação do Usuário

1. **Entrada na Raiz (`/`):**
   * Script síncrono avalia `localStorage.getItem('almini_lang')`.
   * Redirecionamento instantâneo sem flash para `/pt/` ou `/en/`.
2. **Navegação Interna:**
   * Rolagem suave nativa com compensação exata de `76px` (altura do header fixo), evitando que títulos fiquem ocultos sob o menu.
3. **Alternância de Idioma:**
   * Usuário em `/pt/` clica em `EN`: o navegador grava `localStorage.setItem('almini_lang', 'en')` e navega para `/en/`, preservando o contexto de navegação.

