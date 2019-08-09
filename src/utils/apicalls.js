import {getProductsUrl, addProductUrl, editProductUrl, deleteProductUrl,getStoresUrl, getCategoriesUrl} from './routes';
//returns array of products
const getProducts = () => fetch(getProductsUrl).then(response => response.json());
const getCategories = () => fetch(getCategoriesUrl).then(response => response.json());
const getStores = () => fetch(getStoresUrl).then(response => response.json());
//adds product to db
const addProduct = (data) => {
    return fetch(addProductUrl , {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
} 

const editProductPrice = (data) => {
    return fetch(editProductUrl , {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Id': data.id
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
} 

const deleteProduct = (id) => {
    return fetch(deleteProductUrl , {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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