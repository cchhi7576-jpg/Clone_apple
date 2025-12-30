// Apple-style smooth dropdown animation
document.addEventListener("DOMContentLoaded", function () {
  // Store dropdown
  const storeNavItem = document.querySelector(".store-nav-item");
  const storeDropdownMenu = document.querySelector(".store-dropdown-menu");

  if (storeNavItem && storeDropdownMenu) {
    let closeTimeout;

    storeNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      storeDropdownMenu.style.maxHeight = "600px";
      storeDropdownMenu.style.opacity = "1";
    });

    storeNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!storeDropdownMenu.matches(":hover")) {
          storeDropdownMenu.style.maxHeight = "0";
          storeDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    storeDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      storeDropdownMenu.style.maxHeight = "600px";
      storeDropdownMenu.style.opacity = "1";
    });

    storeDropdownMenu.addEventListener("mouseleave", function () {
      storeDropdownMenu.style.maxHeight = "0";
      storeDropdownMenu.style.opacity = "0";
    });
  }

  // Mac dropdown
  const macNavItem = document.querySelector(".mac-nav-item");
  const macDropdownMenu = document.querySelector(".mac-dropdown-menu");

  if (macNavItem && macDropdownMenu) {
    let closeTimeout;

    macNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      macDropdownMenu.style.maxHeight = "600px";
      macDropdownMenu.style.opacity = "1";
    });

    macNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!macDropdownMenu.matches(":hover")) {
          macDropdownMenu.style.maxHeight = "0";
          macDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    macDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      macDropdownMenu.style.maxHeight = "600px";
      macDropdownMenu.style.opacity = "1";
    });

    macDropdownMenu.addEventListener("mouseleave", function () {
      macDropdownMenu.style.maxHeight = "0";
      macDropdownMenu.style.opacity = "0";
    });
  }

  // iPad dropdown
  const ipadNavItem = document.querySelector(".ipad-nav-item");
  const ipadDropdownMenu = document.querySelector(".ipad-dropdown-menu");

  if (ipadNavItem && ipadDropdownMenu) {
    let closeTimeout;

    ipadNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      ipadDropdownMenu.style.maxHeight = "600px";
      ipadDropdownMenu.style.opacity = "1";
    });

    ipadNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!ipadDropdownMenu.matches(":hover")) {
          ipadDropdownMenu.style.maxHeight = "0";
          ipadDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    ipadDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      ipadDropdownMenu.style.maxHeight = "600px";
      ipadDropdownMenu.style.opacity = "1";
    });

    ipadDropdownMenu.addEventListener("mouseleave", function () {
      ipadDropdownMenu.style.maxHeight = "0";
      ipadDropdownMenu.style.opacity = "0";
    });
  }

  // iPhone dropdown
  const iPhoneNavItem = document.querySelector(".iPhone-nav-item");
  const iPhoneDropdownMenu = document.querySelector(".iPhone-dropdown-menu");

  if (iPhoneNavItem && iPhoneDropdownMenu) {
    let closeTimeout;

    iPhoneNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      iPhoneDropdownMenu.style.maxHeight = "600px";
      iPhoneDropdownMenu.style.opacity = "1";
    });

    iPhoneNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!iPhoneDropdownMenu.matches(":hover")) {
          iPhoneDropdownMenu.style.maxHeight = "0";
          iPhoneDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    iPhoneDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      iPhoneDropdownMenu.style.maxHeight = "600px";
      iPhoneDropdownMenu.style.opacity = "1";
    });

    iPhoneDropdownMenu.addEventListener("mouseleave", function () {
      iPhoneDropdownMenu.style.maxHeight = "0";
      iPhoneDropdownMenu.style.opacity = "0";
    });
  }
  // Watch dropdown
  const WatchNavItem = document.querySelector(".Watch-nav-item");
  const WatchDropdownMenu = document.querySelector(".Watch-dropdown-menu");

  if (WatchNavItem && WatchDropdownMenu) {
    let closeTimeout;

    WatchNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      WatchDropdownMenu.style.maxHeight = "600px";
      WatchDropdownMenu.style.opacity = "1";
    });

    WatchNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!WatchDropdownMenu.matches(":hover")) {
          WatchDropdownMenu.style.maxHeight = "0";
          WatchDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    WatchDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      WatchDropdownMenu.style.maxHeight = "600px";
      WatchDropdownMenu.style.opacity = "1";
    });

    WatchDropdownMenu.addEventListener("mouseleave", function () {
      WatchDropdownMenu.style.maxHeight = "0";
      WatchDropdownMenu.style.opacity = "0";
    });
  }

  // Vision dropdown
  const visionNavItem = document.querySelector(".vision-nav-item");
  const visionDropdownMenu = document.querySelector(".vision-dropdown-menu");

  if (visionNavItem && visionDropdownMenu) {
    let closeTimeout;

    visionNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      visionDropdownMenu.style.maxHeight = "600px";
      visionDropdownMenu.style.opacity = "1";
    });

    visionNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!visionDropdownMenu.matches(":hover")) {
          visionDropdownMenu.style.maxHeight = "0";
          visionDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    visionDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      visionDropdownMenu.style.maxHeight = "600px";
      visionDropdownMenu.style.opacity = "1";
    });

    visionDropdownMenu.addEventListener("mouseleave", function () {
      visionDropdownMenu.style.maxHeight = "0";
      visionDropdownMenu.style.opacity = "0";
    });
  }

  // AirPods dropdown
  const airpodsNavItem = document.querySelector(".airpods-nav-item");
  const airpodsDropdownMenu = document.querySelector(".airpods-dropdown-menu");

  if (airpodsNavItem && airpodsDropdownMenu) {
    let closeTimeout;

    airpodsNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      airpodsDropdownMenu.style.maxHeight = "600px";
      airpodsDropdownMenu.style.opacity = "1";
    });

    airpodsNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!airpodsDropdownMenu.matches(":hover")) {
          airpodsDropdownMenu.style.maxHeight = "0";
          airpodsDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    airpodsDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      airpodsDropdownMenu.style.maxHeight = "600px";
      airpodsDropdownMenu.style.opacity = "1";
    });

    airpodsDropdownMenu.addEventListener("mouseleave", function () {
      airpodsDropdownMenu.style.maxHeight = "0";
      visionDropdownMenu.style.opacity = "0";
    });
  }

  // TV & Home dropdown
  const tvHomeNavItem = document.querySelector(".tv-home-nav-item");
  const tvHomeDropdownMenu = document.querySelector(".tv-home-dropdown-menu");

  if (tvHomeNavItem && tvHomeDropdownMenu) {
    let closeTimeout;

    tvHomeNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      tvHomeDropdownMenu.style.maxHeight = "600px";
      tvHomeDropdownMenu.style.opacity = "1";
    });

    tvHomeNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!tvHomeDropdownMenu.matches(":hover")) {
          tvHomeDropdownMenu.style.maxHeight = "0";
          tvHomeDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    tvHomeDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      tvHomeDropdownMenu.style.maxHeight = "600px";
      tvHomeDropdownMenu.style.opacity = "1";
    });

    tvHomeDropdownMenu.addEventListener("mouseleave", function () {
      tvHomeDropdownMenu.style.maxHeight = "0";
      tvHomeDropdownMenu.style.opacity = "0";
    });
  }

  // Entertainment dropdown
  const entertainmentNavItem = document.querySelector(
    ".entertainment-nav-item"
  );
  const entertainmentDropdownMenu = document.querySelector(
    ".entertainment-dropdown-menu"
  );

  if (entertainmentNavItem && entertainmentDropdownMenu) {
    let closeTimeout;

    entertainmentNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      entertainmentDropdownMenu.style.maxHeight = "600px";
      entertainmentDropdownMenu.style.opacity = "1";
    });

    entertainmentNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!entertainmentDropdownMenu.matches(":hover")) {
          entertainmentDropdownMenu.style.maxHeight = "0";
          entertainmentDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    entertainmentDropdownMenuDropdownMenu.addEventListener(
      "mouseenter",
      function () {
        clearTimeout(closeTimeout);
        entertainmentDropdownMenuDropdownMenu.style.maxHeight = "600px";
        entertainmentDropdownMenuDropdownMenu.style.opacity = "1";
      }
    );

    entertainmentDropdownMenuDropdownMenu.addEventListener(
      "mouseleave",
      function () {
        entertainmentDropdownMenuDropdownMenu.style.maxHeight = "0";
        entertainmentDropdownMenuDropdownMenu.style.opacity = "0";
      }
    );
  }

  // Accessories dropdown
  const accessoriesNavItem = document.querySelector(".accessories-nav-item");
  const accessoriesDropdownMenu = document.querySelector(
    ".accessories-dropdown-menu"
  );

  if (accessoriesNavItem && accessoriesDropdownMenu) {
    let closeTimeout;

    accessoriesNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      accessoriesDropdownMenu.style.maxHeight = "600px";
      accessoriesDropdownMenu.style.opacity = "1";
    });

    accessoriesNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!accessoriesDropdownMenu.matches(":hover")) {
          accessoriesDropdownMenu.style.maxHeight = "0";
          accessoriesDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    accessoriesDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      accessoriesDropdownMenu.style.maxHeight = "600px";
      accessoriesDropdownMenu.style.opacity = "1";
    });

    accessoriesDropdownMenu.addEventListener("mouseleave", function () {
      accessoriesDropdownMenu.style.maxHeight = "0";
      accessoriesDropdownMenu.style.opacity = "0";
    });
  }

  // Support dropdown
  const supportNavItem = document.querySelector(".support-nav-item");
  const supportDropdownMenu = document.querySelector(".support-dropdown-menu");

  if (supportNavItem && supportDropdownMenu) {
    let closeTimeout;

    supportNavItem.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      supportDropdownMenu.style.maxHeight = "600px";
      supportDropdownMenu.style.opacity = "1";
    });

    supportNavItem.addEventListener("mouseleave", function (e) {
      closeTimeout = setTimeout(() => {
        if (!supportDropdownMenu.matches(":hover")) {
          supportDropdownMenu.style.maxHeight = "0";
          supportDropdownMenu.style.opacity = "0";
        }
      }, 150);
    });

    supportDropdownMenu.addEventListener("mouseenter", function () {
      clearTimeout(closeTimeout);
      supportDropdownMenu.style.maxHeight = "600px";
      supportDropdownMenu.style.opacity = "1";
    });

    supportDropdownMenu.addEventListener("mouseleave", function () {
      supportDropdownMenu.style.maxHeight = "0";
      supportDropdownMenu.style.opacity = "0";
    });
  }
});

//Tv gallery carousel with smooth infinite loop
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carouselContainer");
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const totalSlides = slides.length;
  let currentIndex = 1; // Start with F1 slide (index 1)
  let autoScrollInterval;

  // Function to update carousel with smooth infinite loop
  function updateCarousel(smooth = true) {
    // Calculate translation to center the current slide
    const slideWidth = slides[0].offsetWidth;
    const gap = 16; // gap-4 = 16px
    const centerOffset = (window.innerWidth - slideWidth) / 2;

    // Calculate translation
    const translation = centerOffset - currentIndex * (slideWidth + gap);

    if (smooth) {
      carouselContainer.style.transition = "transform 0.5s ease-in-out";
    } else {
      carouselContainer.style.transition = "none";
    }

    carouselContainer.style.transform = `translateX(${translation}px)`;

    // Update dots (map to actual slide index)
    const dotIndex = currentIndex % totalSlides;
    dots.forEach((dot, i) => {
      if (i === dotIndex) {
        dot.classList.remove("w-2", "bg-black/50");
        dot.classList.add("w-8", "bg-black");
      } else {
        dot.classList.remove("w-8", "bg-black");
        dot.classList.add("w-2", "bg-black/50");
      }
    });
  }

  // Function to go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  // Function to go to next slide with infinite loop
  function nextSlide() {
    currentIndex++;
    updateCarousel();

    // Reset to beginning for infinite loop
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        currentIndex = 0;
        updateCarousel(false);
      }, 500);
    }
  }

  // Function to go to previous slide with infinite loop
  function prevSlide() {
    currentIndex--;
    updateCarousel();

    // Reset to end for infinite loop
    if (currentIndex < 0) {
      setTimeout(() => {
        currentIndex = totalSlides - 1;
        updateCarousel(false);
      }, 500);
    }
  }

  // Start auto-scroll
  function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 5000);
  }

  // Stop auto-scroll
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Event listeners
  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCarousel, 250);
  });

  // Initialize
  updateCarousel();
});

// Services Gallery - Carousel Scroll Navigation
document.addEventListener("DOMContentLoaded", function () {
  // Target the Services Gallery section (with black background)
  const servicesSection = document.querySelector(
    ".relative.overflow-visible.bg-black"
  );

  if (servicesSection) {
    const wrapper = document.getElementById("servicesGalleryWrapper");
    const carousel = document.getElementById("servicesCarousel");
    const dots = servicesSection.querySelectorAll(".services-dot");
    const slides = servicesSection.querySelectorAll(".carousel-slide");

    let currentIndex = 0;

    // Function to scroll to specific slide
    function scrollToSlide(index) {
      if (slides[index]) {
        const slideWidth = slides[index].offsetWidth;
        const gap = 16; // 4 * 4px (gap-4 in Tailwind)
        const scrollPosition = index * (slideWidth + gap);

        wrapper.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });

        currentIndex = index;
        updateDots();
      }
    }

    // Update active dot
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.remove("w-2", "bg-white/50");
          dot.classList.add("w-8", "bg-white");
        } else {
          dot.classList.remove("w-8", "bg-white");
          dot.classList.add("w-2", "bg-white/50");
        }
      });
    }

    // Dot click navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        scrollToSlide(index);
      });
    });

    // Button click navigation
    const streamButtons = servicesSection.querySelectorAll(
      "button:not(.services-dot)"
    );
    streamButtons.forEach((button, index) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        // Get the slide content info
        const slide = button.closest(".carousel-slide");
        const genreText =
          slide.querySelector(".font-semibold")?.textContent || "Content";

        console.log("Button clicked");
        console.log(
          `Watch the film clicked for ${genreText} content (Slide ${index + 1})`
        );

        // Open Apple TV+ in new window
        window.open("https://tv.apple.com", "_blank");
      });
    });

    // Initialize first dot as active
    updateDots();
  }
});

// Footer Accordion for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const footerToggles = document.querySelectorAll(".footer-toggle");

  footerToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      // Find the next ul.footer-content element
      let content = this.nextElementSibling;
      while (content && !content.classList.contains("footer-content")) {
        content = content.nextElementSibling;
      }

      if (!content) return;

      const arrow = this.querySelector(".footer-arrow");

      // Check if currently expanded
      const isExpanded =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      // Toggle content with smooth animation
      if (isExpanded) {
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
        arrow.classList.remove("rotate-180");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
        arrow.classList.add("rotate-180");
      }
    });
  });
});
