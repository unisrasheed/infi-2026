const blogModal = document.getElementById("blogModal");
const closeBlogModal = document.getElementById("closeBlogModal");

const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalImage = document.getElementById("modalImage");

const modalText1 = document.getElementById("modalText1");
const modalText2 = document.getElementById("modalText2");
const modalText3 = document.getElementById("modalText3");
const modalText4 = document.getElementById("modalText4");

const modalBottom = document.getElementById("modalBottom");

/* =========================================
   BLOG DATA
========================================= */

const blogs = {
  winter: {
    title: "A Winter Morning in Gulmarg",

    subtitle: "",

    image: "media/winter-gulmarg.png",

    text1: `
            As I walked through the snow, puffs of breath escaping my mouth,
            a biting wind pierced my cheeks. I hadn't planned anything for that
            day except for a quiet stroll during winter and my camera.
            There is something about cold weather that strips everything down
            to its core, bare ZNo fancy colors to distract everything is just the truth.
        `,

    text2: `
            I then spotted a tree all by itself in a vast field of untouched snow.
            I gave no leaves or applause and only bare strong branches stretched
            upwards as if it was reaching for the clouds.
        `,

    text3: `
            Something about this tree hit me. It stood there alone, surrounded
            by silence, yet somehow it felt alive.
        `,

    text4: `
            While my fingers were numb, I took great care in preparing the shot
            because to me it was more than just a picture.
        `,

    bottom: `
            Now, whenever I look at that picture, I remember how the world seemed
            to pause. Winter doesn't just show you the land, it shows you something
            inside yourself too.
        `,
  },

  life: {
    title: "Where Things Come to Life",

    subtitle: "Existence and Development Seen Through the Lens",

    image: "media/blog2.png",

    text1: `
            In the peaceful folds of Kashmir, where the mountains stand eternally
            and the rivers continue to reflect the moods of the sky, we found a
            message for every brand.
        `,

    text2: `
            In this place, photography is not just a practice; it is a convergence
            of brand, presence fully seeing what is and purpose shaping what might be.
        `,

    text3: `
            There is a quiet power to every product we photograph, every brand story
            we help show to the world.
        `,

    text4: `
            The hand-made shawl with the mountain breeze giving it a gentle pause,
            they are not just products.
        `,

    bottom: `
            Sometimes the smallest things remind us—we're all rooted, and we're all
            meant to fly. Every story has a moment that deserves to be seen.
        `,
  },
};

/* =========================================
   OPEN MODAL
========================================= */

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const blogName = button.dataset.blog;

    const blog = blogs[blogName];

    if (!blog) return;

    modalTitle.textContent = blog.title;

    modalSubtitle.textContent = blog.subtitle;

    modalImage.src = blog.image;

    modalText1.textContent = blog.text1;

    modalText2.textContent = blog.text2;

    modalText3.textContent = blog.text3;

    modalText4.textContent = blog.text4;

    modalBottom.textContent = blog.bottom;

    blogModal.classList.add("show");

    document.body.style.overflow = "hidden";
  });
});

/* =========================================
   CLOSE MODAL
========================================= */

closeBlogModal.addEventListener("click", closeModal);

function closeModal() {
  blogModal.classList.remove("show");

  document.body.style.overflow = "";
}

/* CLICK OUTSIDE */

blogModal.addEventListener("click", (event) => {
  if (event.target === blogModal) {
    closeModal();
  }
});

/* ESC KEY */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
