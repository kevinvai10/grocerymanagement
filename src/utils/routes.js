const API_KEY ="ab533dea159a45eaaf550aa99f6d445d";
const getProductsUrl = "http://localhost:3002/products";
const getCategoriesUrl = "http://localhost:3002/categories";
const getStoresUrl = "http://localhost:3002/stores";
const addProductUrl = "http://localhost:3002/addproduct";
const addCategoryUrl = "http://localhost:3002/addcategory";
const addStoreUrl = "http://localhost:3002/addstore";
const editProductUrl = "http://localhost:3002/edit";
const deleteProductUrl = "http://localhost:3002/delete";
const getRecipeByIngredientUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + API_KEY + "&ingredients=";
const getRandomFoodTriviaUrl = "https://api.spoonacular.com/food/trivia/random?apiKey=" + API_KEY;

export {
    getProductsUrl,
    getCategoriesUrl,
    getStoresUrl,
    addProductUrl,
    addStoreUrl,
    addCategoryUrl,
    editProductUrl,
    deleteProductUrl,
    getRecipeByIngredientUrl,
    getRandomFoodTriviaUrl
}