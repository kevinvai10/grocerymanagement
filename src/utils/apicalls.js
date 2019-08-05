const baseUrl = "http://localhost:3002/products/";

const getProducts = () => {
    console.log('url: ', baseUrl);
    return fetch(baseUrl).then(response => response.json())
}

export {
    getProducts,
}