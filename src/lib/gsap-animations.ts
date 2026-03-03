import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Webflow-compatible GSAP animations.
 * 
 * This script targets elements via data attributes:
 *   data-animate="fade-up"     — fade in + slide up
 *   data-animate="fade-left"   — fade in + slide from left
 *   data-animate="fade-right"  — fade in + slide from right
 *   data-animate="scale-in"    — fade in + scale up
 *   data-animate="stagger"     — parent: staggers direct children
 *   data-animate="hero"        — hero timeline (title, subtitle, buttons)
 *   data-animate="navbar"      — slide down navbar
 * 
 * Optional attributes:
 *   data-delay="0.2"           — animation delay in seconds
 *   data-duration="1"          — animation duration in seconds
 *   data-stagger="0.1"         — stagger delay between children
 * 
 * ─── WEBFLOW USAGE ───
 * 1. Add GSAP + ScrollTrigger via CDN in <head>:
 *    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
 *    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
 * 
 * 2. Paste the initGsapAnimations() function body into
 *    a <script> tag before </body> in Webflow custom code.
 * 
 * 3. Add the data-animate attributes to Webflow elements.
 */

export function initGsapAnimations() {
  // ── Navbar ──
  document.querySelectorAll('[data-animate="navbar"]').forEach((el) => {
    gsap.fromTo(el,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  });


  // ── Hero timeline ──
  document.querySelectorAll('[data-animate="hero"]').forEach((el) => {
    const title = el.querySelector('[data-hero="title"]');
    const subtitle = el.querySelector('[data-hero="subtitle"]');
    const buttons = el.querySelector('[data-hero="buttons"]');
    const banner = el.querySelector('[data-hero="banner"]');

    const tl = gsap.timeline({ delay: 0.5 });

    if (banner) {
      tl.fromTo(banner,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
    if (title) {
      tl.fromTo(title,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" },
        banner ? "-=0.3" : "+=0"
      );
    }
    if (subtitle) {
      tl.fromTo(subtitle,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }
    if (buttons) {
      tl.fromTo(buttons,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
    }
  });

  // ── Fade Up ──
  ScrollTrigger.batch('[data-animate="fade-up"]', {
    start: "top 85%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((el, i) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0") + i * 0.05;
        const duration = parseFloat(el.getAttribute("data-duration") || "1");
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration, delay, ease: "power3.out" }
        );
      });
    },
  });

  // ── Fade Left ──
  ScrollTrigger.batch('[data-animate="fade-left"]', {
    start: "top 85%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const duration = parseFloat(el.getAttribute("data-duration") || "1");
        gsap.fromTo(el,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration, delay, ease: "power3.out" }
        );
      });
    },
  });

  // ── Fade Right ──
  ScrollTrigger.batch('[data-animate="fade-right"]', {
    start: "top 85%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const duration = parseFloat(el.getAttribute("data-duration") || "1");
        gsap.fromTo(el,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration, delay, ease: "power3.out" }
        );
      });
    },
  });

  // ── Scale In ──
  ScrollTrigger.batch('[data-animate="scale-in"]', {
    start: "top 85%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        gsap.fromTo(el,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.8, delay, ease: "back.out(1.5)" }
        );
      });
    },
  });

  // ── Stagger children ──
  document.querySelectorAll('[data-animate="stagger"]').forEach((parent) => {
    const children = parent.children;
    const staggerDelay = parseFloat(parent.getAttribute("data-stagger") || "0.1");

    gsap.set(children, { opacity: 0, y: 40 });

    ScrollTrigger.create({
      trigger: parent,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: staggerDelay,
          ease: "power3.out",
        });
      },
    });
  });
}
