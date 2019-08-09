import {getProductsUrl, addProductUrl, editProductUrl, deleteProductUrl,getStoresUrl, getCategoriesUrl} from './routes';
//--------------------------------------------------
                    //GET REQUESTS
//--------------------------------------------------
const getProducts = () => fetch(getProductsUrl).then(response => response.json());
const getCategories = () => fetch(getCategoriesUrl).then(response => response.json());
const getStores = () => fetch(getStoresUrl).then(response => response.json());
//--------------------------------------------------
                    //POST REQUESTS
//--------------------------------------------------
const addProduct = (data) => {
    return fetch(addProductUrl , {
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
            'Id': data.id
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
            'Id': id
        },
    })
    .then(response => response.json())
}

export {
    getProducts,
    getCategories,
    getStores,
    addProduct,
    editProductPrice,
    deleteProduct
}