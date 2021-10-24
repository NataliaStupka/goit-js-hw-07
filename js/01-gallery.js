import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log('Это import galleryEItems', galleryItems);




const galleryEl = document.querySelector('.gallery');
// разметка
const createMarkup = galleryItems.map((item) =>
    `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
    <img
        class ="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        
        alt="${item.description}"
    />
</a>
 </div>`,)
    .join('');
galleryEl.insertAdjacentHTML('beforeend', createMarkup)



// вешаю слушателя на предка (div)
galleryEl.addEventListener('click', foo);

function foo(event) {
    event.preventDefault();

    // модальное окно через basicLightbox
    const selectedImg = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${selectedImg}" width="800" height="600">`, {
    onShow: (instance) => {
        instance.element().querySelector('img').onclick = instance.close
    }
})
instance.show();

    // закрытие модального окна Esc
     window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close();
        };
    });
    
  
}



