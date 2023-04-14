// trying to create unordered list with javascript

function makeRecipe() {
    let ingredients = [
        'flour',
        'sugar',
        'egg',
        'milk',
        'oil',
        'vanilla extract'
    ];
    let listContainer = document.createElement('div');
    let listElement = document.createElement('ul');
    let listItem = document.createElement('li');
    document.body.appendChild(listContainer);
    listContainer.appendChild(listElement);
    let numberOfListItems = ingredients.length;
    for (let i = 0; i < numberOfListItems; ++i) {
      listItem.textContent = ingredients[i];
      listElement.appendChild(ingredients);
      listItem = document.createElement('li');
    }
  }