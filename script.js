const categoriesList = document.getElementById('categories-list');
const treesContainer =document.getElementById('trees-container');

const categoriesData = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await response.json();
    displayCategories(data.categories);
  } catch (error) {
    console.log('An error occurred while fetching categories:', error);
  }
}
const displayCategories = (categories) => {
  categories.forEach(category => {
    const li = document.createElement('li');
    li.classList.add('text-base', 'font-medium', 'px-2.5', 'py-2', 'capitalize', 'pointer');
    li.innerHTML = `<a>${category.category_name}</a>`;
    // console.log(category);
    
    categoriesList.appendChild(li);
  });
};

const treesData = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.log('An error occurred while fetching trees:', error);
  }
}

categoriesData()
treesData()
