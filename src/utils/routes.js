const API_KEY ="ab533dea159a45eaaf550aa99f6d445d";
const getProductsUrl = "https://hidden-falls-24272.herokuapp.com/products";
const getCategoriesUrl = "https://hidden-falls-24272.herokuapp.com/categories";
const getStoresUrl = "https://hidden-falls-24272.herokuapp.com/stores";
const addProductUrl = "https://hidden-falls-24272.herokuapp.com/addproduct";
const addCategoryUrl = "https://hidden-falls-24272.herokuapp.com/addcategory";
const addStoreUrl = "https://hidden-falls-24272.herokuapp.com/addstore";
const editProductUrl = "https://hidden-falls-24272.herokuapp.com/edit";
const deleteProductUrl = "https://hidden-falls-24272.herokuapp.com/delete";
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