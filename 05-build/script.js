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

  // 5. Navegação Horizontal na Seção WORKS (Desktop Pinned & Mobile Touch)
  const initHorizontalWorks = () => {
    const workSection = document.getElementById('work');
    const projectsTrack = document.getElementById('projectsList');
    if (!workSection || !projectsTrack) return;

    // Garante que todos os cards estejam visíveis (sem opacidade 0 de IntersectionObserver)
    workSection.querySelectorAll('.reveal, .reveal-image').forEach(el => {
      el.classList.add('is-revealed');
    });

    let maxTranslate = 0;
    let isDesktop = window.innerWidth > 1024;
    let ticking = false;

    const calculateTrackMetrics = () => {
      isDesktop = window.innerWidth > 1024;

      if (!isDesktop || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        workSection.style.height = 'auto';
        projectsTrack.style.transform = 'none';
        return;
      }

      // Distância horizontal total que o track precisa percorrer
      maxTranslate = Math.max(0, projectsTrack.scrollWidth - window.innerWidth);

      // Define a altura vertical da seção para mapeamento 1:1 exato com a rolagem
      workSection.style.height = `${window.innerHeight + maxTranslate}px`;

      updateDesktopScroll();
    };

    const updateDesktopScroll = () => {
      if (!isDesktop || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const rect = workSection.getBoundingClientRect();
      const scrollDist = workSection.offsetHeight - window.innerHeight;

      if (scrollDist <= 0) {
        projectsTrack.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      // Progresso vertical dentro da seção [0, 1]
      const progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);
      const currentTranslate = progress * maxTranslate;

      projectsTrack.style.transform = `translate3d(${-currentTranslate}px, 0, 0)`;
    };

    // Scroll listener otimizado com requestAnimationFrame e { passive: true }
    window.addEventListener('scroll', () => {
      if (isDesktop && !ticking) {
        requestAnimationFrame(() => {
          updateDesktopScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Recálculo em redimensionamento e mudança de orientação
    window.addEventListener('resize', calculateTrackMetrics, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(calculateTrackMetrics, 150);
    }, { passive: true });

    // Recalcular quando imagens e fontes estiverem carregadas
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(calculateTrackMetrics);
    }
    window.addEventListener('load', calculateTrackMetrics);

    // Observa mudanças nas dimensões do track
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => {
        if (isDesktop) calculateTrackMetrics();
      });
      ro.observe(projectsTrack);
    }

    calculateTrackMetrics();
  };

  initHorizontalWorks();
});
