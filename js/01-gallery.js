import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const galleryImage = galleryItems
  .map(
    (galleryItem) =>
      `
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
      `
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryImage);
console.log(galleryItems);
