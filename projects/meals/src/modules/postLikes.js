import baseURL from './baseURL.js';

const postLikes = async (id) => {
  const response = await fetch(`${baseURL}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return response;
};

export default postLikes;
