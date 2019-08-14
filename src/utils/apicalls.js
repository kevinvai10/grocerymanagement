import {
    getProductsUrl, 
    addProductUrl, 
    editProductUrl, 
    deleteProductUrl,
    getStoresUrl, 
    getCategoriesUrl,
    getRecipeByIngredientUrl, 
    getRandomFoodTriviaUrl,
    addCategoryUrl, 
    addStoreUrl, 
    registerUrl,
    signinUrl,
} from './routes';
//--------------------------------------------------
                    //GET REQUESTS
//--------------------------------------------------
const getProducts = () => fetch(getProductsUrl,{headers: 
    {
        'Content-Type': 'application/json',
        'user_id': sessionStorage.getItem('user_id')
    }
}).then(response => response.json());
const getCategories = () => fetch(getCategoriesUrl).then(response => response.json());
const getStores = () => fetch(getStoresUrl).then(response => response.json());
const getRecipes = (ingredients) => fetch(getRecipeByIngredientUrl + ingredients).then(response => response.json());
const getRandomTrivia = () => fetch(getRandomFoodTriviaUrl).then(response => response.json());
//--------------------------------------------------
                    //POST REQUESTS
//--------------------------------------------------
const addProduct = (data) => {
    return fetch(addProductUrl , {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'user_id': sessionStorage.getItem('user_id')
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
} 

const addCategory = (data) => {
    return fetch(addCategoryUrl , {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'user_id': sessionStorage.getItem('user_id')
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
} 

const addStore = (data) => {
    return fetch(addStoreUrl , {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'user_id': sessionStorage.getItem('user_id')
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
} 

const register = (data) => {
    return fetch(registerUrl , {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'user_id': sessionStorage.getItem('user_id')
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}

const signIn = (data) => {
    return fetch(signinUrl , {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}
//--------------------------------------------------
                    //PUT REQUESTS
//--------------------------------------------------
const editProductPrice = (data) => {
    return fetch(editProductUrl , {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
            'Id': data.id,
            'user_id': sessionStorage.getItem('user_id')
        },
        body: JSON.stringify(data),
        })
    .then(response => response.json())
} 
//--------------------------------------------------
                    //DELETE REQUESTS
//--------------------------------------------------
const deleteProduct = (id) => {
    return fetch(deleteProductUrl , {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
            'Id': id,
            'user_id': sessionStorage.getItem('user_id')
        },
    })
    .then(response => response.json())
}

export {
    getProducts,
    getCategories,
    getStores,
    getRecipes,
    getRandomTrivia,
    addProduct,
    addStore,
    register,
    signIn,
    addCategory,
    editProductPrice,
    deleteProduct
}