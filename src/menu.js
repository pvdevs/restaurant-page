import FishBg from './img/background-fish.svg';
import Meal1 from './img/meal1.jpg';
import Meal2 from './img/meal2.jpg';
import Meal3 from './img/meal3.jpg';

function menu(){
    const page = document.createElement('div');
    const menuMeals = document.createElement('div');
    const bgImg = new Image();

    page.classList.add('menu-page-container');
    menuMeals.classList.add('menu-meals');

    bgImg.classList.add('bg-fish');
    bgImg.src = FishBg;

    const detailPlaceHolder = 'Lorem ipsum dolor sit amet consectetur. Pellentesque accumsan penatibus velit purus velit quisque hac. Ut amet adipiscing sit proin justo quis. Augue feugiat et id.';

    const meal1 = setMeal('Anchovo la Phabin', '39$', detailPlaceHolder, Meal1);
    const meal2 = setMeal('Chicos Salmon', '37$', detailPlaceHolder, Meal2);
    const meal3 = setMeal('Kawca Nina Shrimps', '42$', detailPlaceHolder, Meal3);

    menuMeals.append(meal1, meal2, meal3);
    page.append(menuMeals,bgImg);

    return page;
}

function setMeal(title,price,details,image){
    const mealContainer = document.createElement('div');
    const mealTitleContainer = document.createElement('div');
    const mealInfoContainer = document.createElement('div');
    const mealImageContainer = document.createElement('div');
    const mealTitle = document.createElement('h4');
    const mealPrice = document.createElement('h4');
    const mealDetails = document.createElement('p');
    const mealImage = new Image();

    mealImageContainer.classList.add('meal-image-container');
    mealContainer.classList.add('meal-container');
    mealTitleContainer.classList.add('meal-title-container');
    mealInfoContainer.classList.add('meal-info-container');
    mealTitle.classList.add('meal-title');
    mealPrice.classList.add('meal-price');
    mealDetails.classList.add('meal-details');
    mealImage.classList.add('meal-image');

    mealTitle.textContent = title;
    mealPrice.textContent = price;
    mealDetails.textContent = details;
    mealImage.src = image;


    mealTitleContainer.append(mealTitle, mealPrice);
    mealInfoContainer.append(mealTitleContainer, mealDetails);

    mealImageContainer.appendChild(mealImage);
    mealContainer.append(mealImageContainer,mealInfoContainer);
    return mealContainer;
}

export default menu;