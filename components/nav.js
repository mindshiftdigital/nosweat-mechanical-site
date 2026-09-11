/**
 * Navigation & Shared UI — No Sweat Mechanical
 */

(function () {
  'use strict';

  // ---- Mobile Menu Toggle ----
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Scrolled header shadow ----
  const header = document.getElementById('siteHeader');
  if (header) {
    var scrollThreshold = 8;
    function updateHeaderScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > scrollThreshold);
    }
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();
  }

  // ---- Active Nav Link ----
  // Uses the data-page attribute set on each page's <body>
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    const activeLink = nav ? nav.querySelector('[data-page="' + currentPage + '"]') : null;
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // ---- Footer Year ----
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Smooth anchor scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

}());
