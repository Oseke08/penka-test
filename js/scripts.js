function selectPlatform(choice){
  sessionStorage.setItem('platform', choice);
  window.location.href = 'categories.html';
}

function goHome(){
  window.location.href = 'index.html';
}

function goBack(){
  window.location.href = 'categories.html';
}

async function loadCategories(){
  const response = await fetch('data/menu.json');
  const data = await response.json();
  const container = document.getElementById('categoriesContainer');
  Object.keys(data).forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.onclick = () => openCategory(category);
    container.appendChild(btn);
  });
}

function openCategory(category){
  sessionStorage.setItem('category', category);
  window.location.href = 'dish.html';
}

async function loadDishes(){
  const category = sessionStorage.getItem('category');
  const platform = sessionStorage.getItem('platform');
  const response = await fetch('data/menu.json');
  const data = await response.json();
  document.getElementById('categoryTitle').textContent = category;
  const dishes = data[category];
  const container = document.getElementById('dishesContainer');
  dishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${dish.name}</h3><p>${dish.price}</p>`;
    const btn = document.createElement('button');
    btn.textContent = 'Открыть AR';
    btn.onclick = () => {
      const model = platform === 'ios' ? dish.model_usdz : dish.model_glb;
      window.location.href = model;
    };
    card.appendChild(btn);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('categoriesContainer')) loadCategories();
  if(document.getElementById('dishesContainer')) loadDishes();
});
