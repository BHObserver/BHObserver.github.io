const displayLikes = (data) => {
  const btnSpan = document.querySelectorAll('.btn-span');
  data.map((result) => {
    const { likes } = result;
    btnSpan.innerHTML = `${likes} likes`;
    return btnSpan.innerHTML;
  });
};
export default displayLikes;
