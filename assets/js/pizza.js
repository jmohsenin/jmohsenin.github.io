// jshint esversion: 6

// debounce function from: https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
const debounce = (func, delay) => {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
};

/* Update the carousel indicator 
    item = .pizza_carousel
*/ 
updateIndicator = item => {
    let indicator = item.parentNode.querySelector('.indicator');

    if (indicator) {
        // Get the current item by dividing the amount scrolled by the total width and multiplying it by the number of elements
        let activePhoto = Math.round(item.scrollLeft / item.scrollWidth * item.childElementCount);
        let currentDot = indicator.querySelector('.indicator-dot--active');

        // Remove the current indicator if it's present
        if (currentDot) {
            currentDot.classList.remove('indicator-dot--active');
        }
        
        // Add the current indicator if activePhoto is a number (occasionally it's NaN)
        if (!isNaN(activePhoto)) {
            indicator.children[activePhoto].classList.add('indicator-dot--active');
        }
    }
};

/* Change the carousel currently in the viewport */
changeCarousel = direction => {
    document.querySelectorAll('.pizza-carousel').forEach(item => {
        let rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth) {
            if (direction == 'left') {
                item.scrollLeft -= rect.width;
            } else {
                item.scrollLeft += rect.width;
            }
            
        }
    });
};

/* Open the gallery and scroll to the proper photo
*   photo = string in the form of 2020-10-10--1
*/
openOverlay = photo => {        
    let entry = photo.split('--')[0];

    // Show the pizza notes view
    document.querySelector('.pizza-overlay').classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';

    // Scroll the note list to the proper note
    let entryOffset = document.getElementById(entry).offsetTop;
    document.querySelector('.pizza-overlay').scrollTop = entryOffset;

    // Scroll the carousel to the proper photo
    let photoOffset = document.getElementById(photo).offsetLeft;
    document.getElementById(entry).querySelector('.pizza-carousel').scrollLeft = photoOffset;
};

closeOverlay = event => {
    // Hide the pizza overlay
    document.querySelector('.pizza-overlay').classList.add('hidden');
    document.querySelector('body').style.overflow = '';
};

window.onload = function() {
    // Open the overlay whenever a gallery photo is clicked 
    document.querySelectorAll('.pizza-gallery-photo').forEach(item => {
        item.addEventListener('click', () => {
            // Format is 2020-03-03--1
            openOverlay(item.dataset.id);
        });
    });

    // Close the overlay if the close button is clicked
    document.querySelector('.close-button').addEventListener('click', event => {
        closeOverlay();
        event.preventDefault();
    });

    // Bind escape and arrow keys to overlay navigation
    document.addEventListener('keydown', event => {
        if (event.key == "Escape") {
            closeOverlay();
        } else if (event.key == "ArrowRight") {
            changeCarousel("right");
        } else if (event.key == "ArrowLeft") {
            changeCarousel("left");
        }
    });

    // Update the carusel indicator whenever the carousel is scrolled
    document.querySelectorAll('.pizza-carousel').forEach(item => {
        item.addEventListener('scroll', debounce(() => {
            updateIndicator(item);
        }, 10));
    });
};
