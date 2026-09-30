const categories = document.querySelectorAll(".category-card");
const galleryGrid = document.getElementById("galleryGrid");

const portfolioImages = {
  wedding: [
    "assets/IMG_6669 1.png",
    "assets/Frame 104.png",
    "assets/wedding-top.png",
    "media/portfolio/Frame 108.png",
    "assets/wedding1.png",
    "assets/Frame 113.png",
  ],

  prewedding: [
    "assets/prewedding1.jpg",
    "assets/prewedding2.jpg",
    "assets/prewedding3.jpg",
    "assets/prewedding4.jpg",
    "assets/prewedding5.jpg",
    "assets/prewedding6.jpg",
  ],

  product: [
    "assets/product1.jpg",
    "assets/product2.jpg",
    "assets/product3.jpg",
    "assets/product4.jpg",
    "assets/product5.jpg",
    "assets/product6.jpg",
  ],

  commercial: [
    "assets/commercial1.jpg",
    "assets/commercial2.jpg",
    "assets/commercial3.jpg",
    "assets/commercial4.jpg",
    "assets/commercial5.jpg",
    "assets/commercial6.jpg",
  ],

  portrait: [
    "assets/portrait1.jpg",
    "assets/portrait2.jpg",
    "assets/portrait3.jpg",
    "assets/portrait4.jpg",
    "assets/portrait5.jpg",
    "assets/portrait6.jpg",
  ],
};

function showGallery(category) {
  galleryGrid.innerHTML = "";

  const images = portfolioImages[category];

  images.forEach((image) => {
    const item = document.createElement("div");

    item.className = "gallery-item";

    item.innerHTML = `
            <img src="${image}" alt="${category} photography">
        `;

    galleryGrid.appendChild(item);
  });
}

/* CATEGORY CLICK */

categories.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    /* Remove active */

    categories.forEach((item) => {
      item.classList.remove("active-category");
    });

    /* Activate clicked */

    card.classList.add("active-category");

    /* Change gallery */

    showGallery(category);
  });
});

/* LOAD WEDDING BY DEFAULT */

showGallery("wedding");
