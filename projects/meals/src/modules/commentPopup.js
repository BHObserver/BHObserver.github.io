import { fetchComments } from './comment.js';
import commentCount from './commentCounter.js';

const popUp = document.querySelector('.blur-bg');
const popUpImg = popUp.querySelector('.img-pop-up');
const popUpHeading = popUp.querySelector('.pop-up-heading');

let isEventListenerAdded = false;

export default function show() {
  if (!isEventListenerAdded) {
    document.addEventListener('click', (event) => {
      const clickedElement = event.target;
      if (clickedElement.className === 'btn-comment') {
        const submitBtn = document.querySelector('#submitButton');
        const parentElement = clickedElement.closest('section');
        const img = parentElement.children[0];
        const imgSrc = img.getAttribute('src');
        const title = parentElement.children[1].getElementsByTagName('h5')[0].innerText;
        const itemId = img.dataset.id;
        submitBtn.setAttribute('data-id', itemId);
        popUpImg.setAttribute('src', imgSrc);
        popUpHeading.innerHTML = `<h2>${title}</h2>`;
        popUp.style.display = 'block';
        const updateCommentCounting = async () => {
          await fetchComments(itemId);
          commentCount();
        };
        updateCommentCounting();
      }
    });

    isEventListenerAdded = true;
  }
}

export function cancel() {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const commentsList = document.querySelector('#commentsList');
    if (clickedElement.className === 'close-pop-up') {
      popUp.style.display = 'none';
      commentsList.innerHTML = '';
    }
  });

  document.addEventListener('keydown', (event) => {
    const commentsList = document.querySelector('#commentsList');
    if (event.key === 'Escape') {
      popUp.style.display = 'none';
      commentsList.innerHTML = '';
    }
  });
}