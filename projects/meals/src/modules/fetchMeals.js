// fetch  function
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const productsDOM = document.querySelector('.products-center');

const fetchMeals = async () => {
  productsDOM.innerHTML = 'Loading...';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = 'Error detected';
  }
  return null;
};

export default fetchMeals;
