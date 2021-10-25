import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
// разметка
const createMarkup = galleryItems.map((item) =>
    `<li><a class="gallery__link" href="${item.original}">
    <img
        class ="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        
        alt="${item.description}"
    />
</a></li>
 `,)
    .join('');
galleryEl.insertAdjacentHTML('beforeend', createMarkup)



// модальное окно
let gallery = new SimpleLightbox('.gallery a', {captionPosition:'bottom', captionsData:'alt', captionDelay:250});