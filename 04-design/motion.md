# Especificação de Motion & Microinterações — ALMINI STUDIO

**Contrato de Movimento**  
O movimento no Almini Studio é discreto, rápido e orgânico. Seu objetivo é prover feedback tátil ao usuário, nunca atrair atenção para si mesmo.

---

## 1. Curvas de Easing & Durações

```css
--ease-out:           cubic-bezier(0.25, 1, 0.5, 1);
--transition-fast:    0.2s var(--ease-out);
--transition-smooth:  0.35s var(--ease-out);
```

* **Transições Rápidas (`0.2s`):**
  * Hover em botões primários e secundários (`transform: translateY(-3px)`).
  * Hover em links de canais de contato (expansão do sublinhado de 0% a 100%).
  * Hover no quick contact button circular (`transform: scale(1.1)`).
  * Rotação do ícone `+` no menu (`transform: rotate(45deg)`).
* **Transições Suaves (`0.35s` a `0.95s`):**
  * Abertura e fechamento do drawer do menu cockpit (`opacity: 1`, `transform: translateX(-50%) translateY(0)`).
  * Elevação das molduras de imagem em Selected Work no hover (`transform: translateY(-6px)`).
  * Elevação dos cards de serviços no hover (`transform: translateY(-4px)`).
  * **Scroll Reveal de Conteúdo (`0.8s`):** `opacity: 0` -> `1`, `translateY(32px)` -> `0` acionado via `IntersectionObserver` conforme o usuário rola a página (referência Amplify Webflow).
  * **Scroll Reveal de Imagens (`0.95s`):** `opacity: 0` -> `1`, `translateY(28px) scale(1.03)` -> `scale(1)` para entrada cinematográfica de projetos.
  * **Efeito Cascata (Stagger):** Delays escalonados de `0.1s`, `0.2s`, `0.3s`, `0.4s` e `0.5s` para títulos, subtítulos, botões e grids.

---

## 2. Acessibilidade (Prefers-Reduced-Motion)

Para usuários com sensibilidade vestibular ou que configuraram redução de movimento no sistema operacional:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Isso zera todas as animações e transições instantaneamente, respeitando a diretriz de acessibilidade sem quebrar a renderização da interface.

