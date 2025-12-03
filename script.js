// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navIndicator = document.getElementById("nav-indicator");
  const navLinks = document.querySelectorAll(".nav-link");
  const navContainer = document.getElementById("nav-container");

  // Initialize indicator position
  function updateIndicator(link) {
    if (!navIndicator || !navContainer) return;

    const containerRect = navContainer.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const leftPosition = linkRect.left - containerRect.left;

    navIndicator.style.left = `${leftPosition}px`;
    navIndicator.style.width = `${linkRect.width}px`;
  }

  // Set initial position
  const activeLink = document.querySelector(".nav-link.active");
  if (activeLink) {
    updateIndicator(activeLink);
  }

  // Toggle mobile menu with animation
  mobileMenuBtn.addEventListener("click", function () {
    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
      // Close menu with animation
      mobileMenu.classList.add("slide-exit");
      mobileMenu.classList.remove("slide-enter");

      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("slide-exit");
      }, 300);

      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    } else {
      // Open menu with animation
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("slide-enter");
      mobileMenu.classList.remove("slide-exit");

      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("slide-exit");

      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("slide-exit");
      }, 300);

      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });

  // Close mobile menu when window is resized to desktop size
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("slide-enter", "slide-exit");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }

    // Update indicator position on resize
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
      updateIndicator(activeLink);
    }
  });

  // Desktop nav link click handling with animated indicator
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => {
        l.classList.remove("active");
        l.classList.remove("text-white");
        l.classList.add("text-epic-gray");
      });

      // Add active class to clicked link
      this.classList.add("active");
      this.classList.remove("text-epic-gray");
      this.classList.add("text-white");

      // Animate indicator to new position
      updateIndicator(this);

      // Scroll to section (optional)
      const target = this.getAttribute("href");
      if (target && target !== "#") {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
