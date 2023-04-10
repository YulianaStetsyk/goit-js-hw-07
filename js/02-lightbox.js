import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function renderGalleryItems(items) {
    const galleryItemsMarkup = items
    .map(({ preview, original, alt }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${alt}" />
            </a>
        </li>
        `;
    })
    .join('');


    galleryContainer.innerHTML = galleryItemsMarkup;
}

renderGalleryItems(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    });