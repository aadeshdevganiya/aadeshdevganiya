/* =========================================================
   Aadesh Devganiya – Portfolio (plain JS)
   Replaces: React state/effects, react-scroll, react-awesome-reveal,
   react-parallax-tilt, typewriter-effect, lottie player
   ========================================================= */
(function () {
  "use strict";

  var PRELOAD_MS = 3000;
  var HEADER_OFFSET = 70;

  /* ---------- Preloader -> app ---------- */
  function showApp() {
    document.documentElement.classList.add("is-ready");
    initPage();
    if (location.hash && location.hash.length > 1) {
      var el = document.getElementById(location.hash.slice(1));
      if (el) scrollToEl(el, false);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (document.documentElement.classList.contains("no-preload")) {
      showApp();
    } else {
      setTimeout(showApp, PRELOAD_MS);
    }
  });

  /* Skip the preloader when moving between pages of this site
     (the React app only showed it on first load, not on route change) */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    if (a.protocol === location.protocol && a.host === location.host && a.pathname !== location.pathname) {
      try { sessionStorage.setItem("skipPreloader", "1"); } catch (err) {}
    }
  });

  /* ---------- Smooth scroll (offset -70, 500ms) ---------- */
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  function scrollToEl(el, animate) {
    var target = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    if (animate === false) {
      window.scrollTo(0, target);
      return;
    }
    var start = window.pageYOffset;
    var change = target - start;
    var duration = 500;
    var t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / duration, 1);
      window.scrollTo(0, start + change * easeInOutQuad(p));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Page init (runs once the preloader is done) ---------- */
  function initPage() {
    initNavbar();
    initScrollLinks();
    initTabs();
    initReveal();
    initTimeline();
    initTilt();
    initTyping();
    initLottie();
    initContactForm();
    initFooterYear();
    if (document.body.hasAttribute("data-scroll-top")) {
      window.scrollTo(0, 0);
    }
  }

  /* ---------- Navbar ---------- */
  function initNavbar() {
    var toggle = document.getElementById("menu-toggle");
    var panel = document.getElementById("menu-panel");
    if (!toggle || !panel) return;
    var open = false;

    function render() {
      document.body.style.overflow = open ? "hidden" : "auto";
      panel.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
    }
    window.__closeMenu = function () { open = false; render(); };
    toggle.addEventListener("click", function () { open = !open; render(); });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { open = false; render(); });
    });
    render();
  }

  /* ---------- Scroll links (Contact us button) ---------- */
  function initScrollLinks() {
    document.querySelectorAll("[data-scroll]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = document.getElementById(a.getAttribute("data-scroll"));
        if (!target) return; /* not on this page -> normal link to index.html#id */
        e.preventDefault();
        if (window.__closeMenu) window.__closeMenu();
        scrollToEl(target, true);
      });
    });
  }

  /* ---------- About tabs ---------- */
  function initTabs() {
    var tabs = document.querySelectorAll("[role=tab]");
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var key = tab.getAttribute("data-tab");
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        document.querySelectorAll("[role=tabpanel]").forEach(function (p) {
          var show = p.id === "tab-panel-" + key;
          p.hidden = !show;
          /* timeline cards bounce in again, like a fresh mount */
          p.querySelectorAll(".vertical-timeline-element").forEach(function (el) {
            el.__done = false;
            el.querySelectorAll(".vertical-timeline-element-icon, .vertical-timeline-element-content").forEach(function (n) {
              n.classList.remove("bounce-in");
              n.classList.add("is-hidden");
            });
          });
          /* React re-mounted the panel, so its reveal animations replayed */
          p.querySelectorAll("[data-reveal]").forEach(function (el) {
            el.classList.remove("is-revealed");
            el.__inView = false;
          });
        });
        /* re-check what is visible now */
        document.querySelectorAll("[data-reveal]").forEach(function (el) {
          if (el.__io) { el.__io.unobserve(el); el.__io.observe(el); }
        });
        initTimeline();
      });
    });
  }

  /* ---------- Scroll reveal (Fade / Slide / Zoom) ---------- */
  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    els.forEach(function (el) {
      if (el.__io) return;
      var once = el.hasAttribute("data-once");
      var dur = el.getAttribute("data-duration") || "1000";
      el.style.animationDuration = dur + "ms";
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (el.__inView) return;
            el.__inView = true;
            el.classList.remove("is-revealed");
            void el.offsetWidth; /* restart animation */
            el.classList.add("is-revealed");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.__inView = false;
            el.classList.remove("is-revealed");
          }
        });
      });
      el.__io = io;
      io.observe(el);
    });
  }

  /* ---------- Vertical timeline (bounce-in on scroll) ---------- */
  function initTimeline() {
    document.querySelectorAll(".vertical-timeline-element").forEach(function (el) {
      if (el.__done || el.offsetParent === null) return;
      el.__done = true;
      var icon = el.querySelector(".vertical-timeline-element-icon");
      var content = el.querySelector(".vertical-timeline-element-content");
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        [icon, content].forEach(function (n) {
          n.classList.remove("is-hidden");
          n.classList.add("bounce-in");
        });
        io.disconnect();
      }, { rootMargin: "0px 0px -40px 0px" });
      io.observe(el);
    });
  }

  /* ---------- Tilt on profile image ---------- */
  function initTilt() {
    document.querySelectorAll(".tilt").forEach(function (el) {
      var MAX = 20, PERSPECTIVE = 1000, SPEED = 400;
      var EASING = "cubic-bezier(.03,.98,.52,.99)";
      function set(rx, ry) {
        el.style.transform =
          "perspective(" + PERSPECTIVE + "px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale3d(1,1,1)";
      }
      el.addEventListener("mouseenter", function () {
        el.style.transition = "all " + SPEED + "ms " + EASING;
      });
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        set(((0.5 - py) * 2 * MAX).toFixed(2), (-(0.5 - px) * 2 * MAX).toFixed(2));
      });
      el.addEventListener("mouseleave", function () {
        el.style.transition = "all " + SPEED + "ms " + EASING;
        set(0, 0);
      });
    });
  }

  /* ---------- Typewriter ---------- */
  function initTyping() {
    var el = document.getElementById("typing");
    if (!el || typeof Typewriter === "undefined" || el.__tw) return;
    el.__tw = new Typewriter(el, {
      strings: ["Web Designer", "Shopify Developer", "Frontend Developer"],
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    });
  }

  /* ---------- Lottie ---------- */
  function initLottie() {
    var el = document.getElementById("about-lottie");
    if (!el || typeof lottie === "undefined" || el.__lottie) return;
    el.__lottie = lottie.loadAnimation({
      container: el,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
    });
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      var formData = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        message: form.elements["message"].value
      };
      if (!(formData.name && formData.email && formData.message)) {
        alert("Please fill in all the fields.");
        return;
      }
      try {
        var response = await fetch("http://localhost:5000/api/submitForm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        var result = await response.json();
        console.log(result.message);
        alert("Thanks " + formData.name + ", I will shortly connect with you!");
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("Backend Server was not running while submitting the form.");
      }
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  function initFooterYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }
})();
