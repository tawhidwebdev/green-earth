const categoriesContainer = document.getElementById('categories-list');
const treesContainer = document.getElementById('trees-container');

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
      <li class="text-base font-medium px-2.5 py-2 capitalize rounded cursor-pointer">${category.category_name}</li>
    `
  });
  categoriesContainer.addEventListener('click', (e) => {
    const allCtegories = categoriesContainer.querySelectorAll('li');
    // console.log(allCtegories);
    allCtegories.forEach(li => li.classList.remove('bg-primary'))
    console.log(e.target.localName === 'li' ? e.target.classList.add('bg-primary') : '')
  })
};

categoriesData()
