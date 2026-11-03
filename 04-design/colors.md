# Sistema de Cores & Relação de Contraste — ALMINI STUDIO

**Contrato Cromático**  
O Almini Studio é estritamente monocromático escuro, derivado do portfólio autoral de Alexandre Polettini com o refinamento instrumental do template Amplify.

---

## 1. Mapeamento de Códigos HEX, RGB e Alpha

| Nome do Token | HEX | RGB / Alpha | Função / Uso no Sistema | Contraste sobre Fundo |
| :--- | :---: | :---: | :--- | :---: |
| `--bg` | `#000000` | `rgb(0, 0, 0)` | Fundo geral da página e base de viewport | — |
| `--surface-01` | `#0c0c0c` | `rgb(12, 12, 12)` | Superfície de cards e molduras de imagem | 1.1:1 |
| `--surface-02` | `#161616` | `rgb(22, 22, 22)` | Botão menu cockpit inativo | 1.3:1 |
| `--surface-menu` | `#1e1e1e` | `rgb(30, 30, 30)` | Drawer suspenso flutuante | 1.5:1 |
| `--text-white` | `#ffffff` | `rgb(255, 255, 255)` | Headings monumentais, CTAs ativos | **21:1** (AAA) |
| `--text-body` | `#e0e0e0` | `rgb(224, 224, 224)` | Texto do manifesto e leitura principal | **15:1** (AAA) |
| `--text-muted` | `#c2c2c2` | `rgb(194, 194, 194)` | Descrições secundárias e subtítulos | **11:1** (AAA) |
| `--text-subtle` | `#8a8a8a` | `rgb(138, 138, 138)` | Numerais de passos, índices e microtextos | **7:1** (AAA) |
| `--text-num` | `#444444` | `rgb(68, 68, 68)` | Numerais decorativos de fundo | 2.5:1 |
| `--border-hairline` | `#ffffff1a` | `rgba(255, 255, 255, 0.10)` | Divisões horizontais sutis de seção | — |
| `--border-visible` | `#ffffff33` | `rgba(255, 255, 255, 0.20)` | Bordas de tags e botões secundários | — |

---

## 2. Regras de Acessibilidade (WCAG 2.1 AA/AAA)
* Todos os textos de leitura (`--text-white`, `--text-body` e `--text-muted`) superam a nota máxima de contraste da Web Content Accessibility Guidelines (WCAG AAA), garantindo legibilidade perfeita mesmo em ambientes com reflexo ou iluminação desafiadora.

