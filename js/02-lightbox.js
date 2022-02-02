import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems
    .map((galleryItem) => {
      return `
        <li>
        <a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
        </a>
        </li>
        `;
    })
    .join("");
  gallery.insertAdjacentHTML("afterbegin", markup);
}
createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
