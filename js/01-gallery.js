import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems
    .map((galleryItem) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
      />
      </a>
      </div>
      `;
    })
    .join("");
  gallery.insertAdjacentHTML("afterbegin", markup);
}

createGalleryMarkup(galleryItems);

gallery.addEventListener("click", openLargeImg);

function openLargeImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  document.addEventListener("keydown", closeLargeImg);
  function closeLargeImg(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", closeLargeImg);
  }
}
