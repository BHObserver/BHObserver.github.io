import './style.css';
import cancelIcon from './assets/cancel-icon.png';
import fetchMeals from './modules/fetchMeals.js';
import displayMeals from './modules/displayMeals.js';
import show, { cancel } from './modules/commentPopup.js';
import { submitComment } from './modules/comment.js';
import itemsCounter from './modules/itemCount.js';
import fetchLikes from './modules/getLikes.js';
import addlikes from './modules/addLikes.js';

const cancelIconContainer = document.querySelector('.close-pop-up');
cancelIconContainer.setAttribute('src', cancelIcon);
const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
  fetchLikes();
  itemsCounter();
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  addlikes();
  show();
  submitComment();
});

document.addEventListener('click', () => {
  show();
  addlikes();
  cancel();
});