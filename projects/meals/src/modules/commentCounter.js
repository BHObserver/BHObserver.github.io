const commentCount = () => {
  const commentList = document.querySelector('#commentsList');
  const popUpHeading = document.querySelector('.pop-up-heading');
  const commentCount = document.createElement('span');
  commentCount.setAttribute('class', 'comment-count');
  commentCount.textContent = `Comments (${commentList.children.length})`;
  popUpHeading.appendChild(commentCount);
};

export default commentCount;