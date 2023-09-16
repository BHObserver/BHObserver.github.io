const commentCount = () => {
  const commentList = document.querySelector('#commentsList');
  const inputContainer = document.querySelector('.input-container');
  const commentCount = document.querySelector('.comment-count');
  commentCount.textContent = `Comments: ${commentList.children.length}`;
  inputContainer.appendChild(commentCount);
};

export default commentCount;