const { Recipie } = require('../models');

const meals = [
    {
        /* id: 655219, */
        title: "Peanut Butter And Chocolate Oatmeal",
        imageType: "jpg",
        readyInMinutes: 45,
        servings: 1,
        sourceUrl: "https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219"
    },
    {
        /* id: 649931, */
        title: "Lentil Salad With Vegetables",
        imageType: "jpg",
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: "https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931"
    },
    {
        /* id: 632854, */
        title: "Asian Noodles",
        imageType: "jpg",
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: "https://spoonacular.com/recipes/asian-noodles-632854"
    }
],

const seedMeals = () => Recipie.bulkCreate(meals);

module.exports = seedMeals;
