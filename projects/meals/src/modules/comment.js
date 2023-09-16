// Define the base URL for the Involvement API
import commentCount from './commentCounter.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9oi34w1aSiFtzn6asAJ/comments';

// Function to fetch comments for a specific item
export const fetchComments = async (id) => {
  try {
    const response = await fetch(`${apiUrl}?item_id=${id}`);
    if (response.status !== 200) throw new Error('Something Wrong!');
    const comments = await response.json();
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; // Clear previous comments
    comments.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.textContent = `${comment.creation_date} >> ${comment.username}: ${comment.comment}`;
      commentsList.appendChild(commentItem);
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

// Function to submit a new comment
const comment = async (id, userName, commentValue) => {
  try {
    const itemId = id;
    const username = userName;
    const comment = commentValue;
    const userNameInput = document.getElementById('userNameInput');
    const commentInput = document.getElementById('commentInput');

    if (itemId && username && comment) {
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          username,
          comment,
        }),
      });

      if (response.status === 201) {
        // Comment successfully submitted, refresh comments
        userNameInput.value = '';
        commentInput.value = '';
      } else {
        console.error('Error submitting comment:', response.statusText);
      }
    }
  } catch (error) {
    console.error('Error submitting comment:', error);
  }
};

// Submits a comment
export const submitComment = () => {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.id === 'submitButton') {
      const itemId = clickedElement.dataset.id;
      const userNameInput = document.getElementById('userNameInput').value.trim();
      const commentInput = document.getElementById('commentInput').value.trim();
      const updateCommentCounting = async () => {
        await comment(itemId, userNameInput, commentInput);
        await fetchComments(itemId);
        commentCount();
      };
      updateCommentCounting();
    }
  });
};