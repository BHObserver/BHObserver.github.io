const fetchLikes = async () => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJcF5zgPNiWKSZNbuOO4';
  const response = await fetch(`${baseURL}/likes/`);
  const data = await response.json();
  const likesUpdate = document.querySelectorAll('.btn-span');
  try {
    const response = data;
    const likesArray = [];
    response.forEach((item) => {
      likesArray.push(item.likes);
    });

    likesUpdate.forEach((element) => {
      element.textContent = likesArray.shift();
    });
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
};

export default fetchLikes;
