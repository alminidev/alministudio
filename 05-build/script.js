/**
 * ALMINI STUDIO by ALEXANDRE POLETTINI
 * Interações de UI, Menu Drawer, Idioma e Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Drawer (Cockpit Navigation)
  const menuBtn = document.getElementById('alminiMenuBtn');
  const navDrawer = document.getElementById('alminiNavDrawer');

  if (menuBtn && navDrawer) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      navDrawer.classList.toggle('active');
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!navDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
        navDrawer.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Fechar ao pressionar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
        navDrawer.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Fechar ao clicar em qualquer link do drawer
    navDrawer.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Persistência de Idioma
  const langLinks = document.querySelectorAll('.lang-link');
  langLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang) {
        localStorage.setItem('almini_lang', selectedLang);
      }
    });
  });

  // 3. Smooth Scroll com Offset do Header Fixo
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerHeight = 76;
        const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Scroll Reveal Interativo (Estilo Amplify / Webflow IX2)
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-image');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  };

  initScrollReveal();
});
