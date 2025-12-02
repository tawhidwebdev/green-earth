const categoriesContainer = document.getElementById('categories-list');
const treesContainer =document.getElementById('trees-container');

const categoriesData = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await response.json();
    const categories = data.categories;
    console.log(categories);
    
    showCategories(categories);
  } catch (error) {
    console.log('An error occurred while fetching categories:', error);
  }
}

const showCategories = (categories) => {
  categories.forEach(category => {
    categoriesContainer.innerHTML += `
      <li class="text-base font-medium px-2.5 pt-2 capitalize cursor-pointer">${category.category_name}</li>
    `
  });
};

categoriesData()
