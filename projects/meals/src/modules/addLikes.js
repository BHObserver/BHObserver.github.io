import fetchLikes from './getLikes.js';
import postLikes from './postLikes.js';

let isEventListenerAdded = false;

const addlikes = async () => {
  if (!isEventListenerAdded) {
    document.addEventListener('click', async (event) => {
      const clickedElement = event.target;
      if (clickedElement.className === 'btn-like') {
        const parentElement = clickedElement.closest('section');
        const itemId = parentElement.querySelector('.single-product-img').dataset.id;
        await postLikes(itemId);
        fetchLikes();
      }
    });

    isEventListenerAdded = true;
  }
};

export default addlikes;