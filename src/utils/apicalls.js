const getProductsUrl = "http://localhost:3002/products/";
const addProductUrl = "http://localhost:3002/addproduct";
const editProductUrl = "http://localhost:3002/edit";
//returns array of products
const getProducts = () => fetch(getProductsUrl).then(response => response.json());

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

export {
    getProducts,
    addProduct,
    editProductPrice,
}