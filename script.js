/* =====================================================
   SPECIALITIES CAROUSEL
===================================================== */

const track = document.getElementById("specialitiesTrack");
const cards = document.querySelectorAll(".speciality-card");
const dots = document.querySelectorAll(".dot");

const previousButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 1;
let autoPlay;

/* =====================================================
   UPDATE ACTIVE CARD
===================================================== */

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove("active");

    if (index === currentIndex) {
      card.classList.add("active");
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.remove("active");

    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });

  /*
       Move the carousel slightly so the active
       card stays around the center.
    */

  if (window.innerWidth > 750) {
    const cardWidth = cards[0].offsetWidth;

    const gap = 12;

    const moveAmount = (currentIndex - 1) * (cardWidth + gap);

    track.style.transform = `translateX(-${moveAmount}px)`;
  }
}

/* =====================================================
   NEXT
===================================================== */

function nextSlide() {
  currentIndex++;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  updateCarousel();
}

/* =====================================================
   PREVIOUS
===================================================== */

function previousSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  updateCarousel();
}

/* =====================================================
   BUTTONS
===================================================== */

nextButton.addEventListener("click", () => {
  nextSlide();

  restartAutoPlay();
});

previousButton.addEventListener("click", () => {
  previousSlide();

  restartAutoPlay();
});

/* =====================================================
   DOTS
===================================================== */

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;

    updateCarousel();

    restartAutoPlay();
  });
});

/* =====================================================
   AUTO PLAY
===================================================== */

function startAutoPlay() {
  autoPlay = setInterval(() => {
    nextSlide();
  }, 2800);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

function restartAutoPlay() {
  stopAutoPlay();

  startAutoPlay();
}

/* =====================================================
   PAUSE WHEN MOUSE IS OVER CAROUSEL
===================================================== */

const carousel = document.querySelector(".specialities-carousel");

carousel.addEventListener("mouseenter", () => {
  stopAutoPlay();
});

carousel.addEventListener("mouseleave", () => {
  startAutoPlay();
});

/* =====================================================
   INITIALIZE
===================================================== */

updateCarousel();

startAutoPlay();

/* =====================================================
   RESPONSIVE UPDATE
===================================================== */

window.addEventListener("resize", () => {
  updateCarousel();
});

/* =====================================================
   INFINITE TESTIMONIAL SLIDER
===================================================== */

const testimonialTrack =
    document.getElementById("testimonialTrack");

const originalCards =
    Array.from(
        testimonialTrack.querySelectorAll(".testimonial-card")
    );

let testimonialPosition = 0;
let testimonialPaused = false;


/* =====================================================
   CLONE CARDS
===================================================== */

/*
   Clone all cards and add them after the originals.
   This creates a continuous sequence.
*/

originalCards.forEach(card => {

    const clone = card.cloneNode(true);

    testimonialTrack.appendChild(clone);

});


/* =====================================================
   GET SLIDE WIDTH
===================================================== */

function getSlideStep() {

    const card = testimonialTrack.querySelector(
        ".testimonial-card"
    );

    if (!card) return 0;

    const gap = 16;

    return card.offsetWidth + gap;
}


/* =====================================================
   MOVE SLIDER
===================================================== */

function moveTestimonials() {

    if (testimonialPaused) return;

    const step = getSlideStep();

    testimonialPosition++;

    testimonialTrack.style.transition =
        "transform 0.8s ease";

    testimonialTrack.style.transform =
        `translateX(-${testimonialPosition * step}px)`;


    /*
       After moving through the original cards,
       silently jump back by the same distance.

       Because the cards are cloned, the user
       sees exactly the same cards at that point.
    */

    if (
        testimonialPosition >=
        originalCards.length
    ) {

        setTimeout(() => {

            testimonialTrack.style.transition =
                "none";

            testimonialPosition = 0;

            testimonialTrack.style.transform =
                "translateX(0)";

        }, 800);
    }
}


/* =====================================================
   START AUTOMATIC SLIDER
===================================================== */

let testimonialAutoPlay =
    setInterval(
        moveTestimonials,
        2500
    );


/* =====================================================
   PAUSE ON HOVER
===================================================== */

const testimonialSection =
    document.querySelector(
        ".testimonial-section"
    );


testimonialSection.addEventListener(
    "mouseenter",
    () => {

        testimonialPaused = true;

    }
);


testimonialSection.addEventListener(
    "mouseleave",
    () => {

        testimonialPaused = false;

    }
);


/* =====================================================
   RESET ON WINDOW RESIZE
===================================================== */

window.addEventListener(
    "resize",
    () => {

        testimonialTrack.style.transition =
            "none";

        testimonialPosition = 0;

        testimonialTrack.style.transform =
            "translateX(0)";

    }
);



/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        /* Close all other FAQs */

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

        });


        /* Open clicked FAQ */

        if (!isActive) {

            item.classList.add("active");

        }

    });

});


/* =========================================
   FALLING PHOTO ENTRANCE
========================================= */

const fallingPhotos = document.querySelectorAll(".falling-photo");

const photoObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("photo-visible");

            }

        });

    },
    {
        threshold: 0.2
    }
);


fallingPhotos.forEach((photo) => {
    photoObserver.observe(photo);
});