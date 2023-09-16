const productsDOM = document.querySelector('.products-center');

// display function
const displayMeals = (list) => {
  const productList = list.meals
    .map((item) => {
      const { strMeal: title } = item;
      const { strMealThumb: img } = item;
      const { idMeal: id } = item;
      return ` <section class="single-product">
      <img
        src="${img}"
        alt="${title}"
        class="single-product-img img"
        data-id='${id}'
      />
      <div class="product-footer">
        <h5 class="name">${title}</h5>
        <div class="btn-container">
        <button class="btn-like" type="button" >&#10084</button>
        <span class="btn-span"></span><span class='likes-txt'>likes</span>
        <button class="btn-comment">COMMENTS</button>
        </div>
      </div>
    </section>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">
  ${productList}
  </div>`;
};
export default displayMeals;
