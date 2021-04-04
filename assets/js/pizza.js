"use strict";

// debounce function from: https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

/* Update the carousel indicator
    item = .pizza_carousel
*/
const updateIndicator = (item) => {
  const indicator = item.parentNode.querySelector(".indicator");

  if (indicator) {
    // Get the current item by dividing the amount scrolled by the total width and multiplying it by the number of elements
    const activePhoto = Math.round(
      (item.scrollLeft / item.scrollWidth) * item.childElementCount
    );
    const currentDot = indicator.querySelector(".indicator-dot--active");

    // Remove the current indicator if it's present
    if (currentDot) {
      currentDot.classList.remove("indicator-dot--active");
    }

    // Add the current indicator if activePhoto is a number (occasionally it's NaN)
    if (!isNaN(activePhoto)) {
      indicator.children[activePhoto].classList.add("indicator-dot--active");
    }
  }
};

/* Change the carousel currently in the viewport */
/* TODO: update the URL based on carousel changes */
const changeCarousel = (direction) => {
  document.querySelectorAll(".pizza-carousel").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    ) {
      if (direction === "left") {
        item.scrollLeft -= rect.width;
      } else {
        item.scrollLeft += rect.width;
      }
    }
  });
};

/* Open the gallery and scroll to the proper pie
 *   pie = string in the form of 2020-10-10--1
 */
const openOverlay = (pie) => {
  const entry = pie.split("--")[0];

  // Show the pizza notes view
  document.querySelector(".pizza-overlay").classList.remove("hidden");
  document.querySelector("body").style.overflow = "hidden";

  // Scroll the note list to the proper note
  const entryOffset = document.getElementById(entry).offsetTop;
  document.querySelector(".pizza-overlay").scrollTop = entryOffset;

  // Scroll the carousel to the proper pie
  const pieOffset = document.getElementById(pie).offsetLeft;
  document
    .getElementById(entry)
    .querySelector(".pizza-carousel").scrollLeft = pieOffset;
};

const closeOverlay = (event) => {
  // Hide the pizza overlay
  document.querySelector(".pizza-overlay").classList.add("hidden");
  document.querySelector("body").style.overflow = "";
};

window.onload = function () {
  // Check the URL for an existing pie and open it
  const url = new URL(window.location);
  const pie = url.searchParams.get("pie");
  if (pie) {
    openOverlay(pie);
    window.history.replaceState({ pie: pie }, "", url);
  } else {
    window.history.replaceState({ pie: null }, "", url);
  }

  // Close the overlay when the back button is pressed
  window.addEventListener("popstate", function (event) {
    if (event && event.state && event.state.pie == null) {
      closeOverlay();
    }
  });

  // Open the overlay whenever a gallery photo is clicked
  document.querySelectorAll(".pizza-gallery-photo").forEach((item) => {
    item.addEventListener("click", () => {
      const pie = item.dataset.id;

      // Format is 2020-03-03--1
      openOverlay(pie);

      // Set the url to the current pie
      url.searchParams.set("pie", pie);
      window.history.pushState({ pie: pie }, "", url);
    });
  });

  // Close the overlay if the close button is clicked
  document.querySelector(".close-button").addEventListener("click", (event) => {
    closeOverlay();
    window.history.go(-1);
    event.preventDefault();
  });

  // Bind escape and arrow keys to overlay navigation
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOverlay();
      window.history.go(-1);
    } else if (event.key === "ArrowRight") {
      changeCarousel("right");
    } else if (event.key === "ArrowLeft") {
      changeCarousel("left");
    }
  });

  // Update the carusel indicator whenever the carousel is scrolled
  document.querySelectorAll(".pizza-carousel").forEach((item) => {
    item.addEventListener(
      "scroll",
      debounce(() => {
        updateIndicator(item);
      }, 10)
    );
  });
};
