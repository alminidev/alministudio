# Especificação Tipográfica Detalhada — ALMINI STUDIO

**Contrato de Tipografia**  
Famílias carregadas via Google Fonts: `Bebas Neue`, `IBM Plex Sans`, `IBM Plex Mono`, `Inter`.

---

## 1. Famílias e Aplicações

```css
--font-display: 'Bebas Neue', 'Inter', -apple-system, sans-serif;
--font-body:    'IBM Plex Sans', 'Inter', -apple-system, sans-serif;
--font-mono:    'IBM Plex Mono', ui-monospace, monospace;
```

* **`--font-display` (Bebas Neue):** Usada em todos os H1 e H2 da página. Traz o impacto brutalista monumental de cartazes industriais e editorial de vanguarda.
* **`--font-body` (IBM Plex Sans):** Usada em parágrafos, textos do manifesto e descrições de projetos. Desenvolvida pela IBM para leitura em telas com alta legibilidade técnica.
* **`--font-mono` (IBM Plex Mono):** Usada em metadados, tags de tecnologia, índices numéricos, botões, CTAs e chaves de sintaxe `{...}`.

---

## 2. Tabela de Escala Tipográfica Completa

| Token CSS | Tamanho Real | Clamp | Line-Height | Peso | Aplicação Principal |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `--text-hero` | 48px – 108px | `clamp(3rem, 8.5vw, 6.75rem)` | `0.92` | 400 | Título principal da dobra de entrada |
| `--text-h2` | 40px – 72px | `clamp(2.5rem, 6vw, 4.5rem)` | `0.95` | 400 | Títulos de seção (Selected Work, Services) |
| `--text-h3` | 32px – 48px | `clamp(2rem, 3.5vw, 3rem)` | `1.0` | 400 | Título de cards de projeto |
| `--text-body` | 18px | Fixo `1.125rem` | `1.85` | 400 | Parágrafos do manifesto e seções textuais |
| `--text-small` | 14px | Fixo `0.875rem` | `1.6` | 400 | Legendas, copyright e créditos |
| `--text-tag` | 11px | Fixo `0.6875rem` | `1.0` | 600 | Pills de categoria (`BRAND IDENTITY`) |
| `--text-btn` | 14px | Fixo `0.875rem` | `1.0` | 700 | Rótulos de botões e links de contato |

