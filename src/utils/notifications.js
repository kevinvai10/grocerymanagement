//
const addedProduct = {
        title: "Wonderful!",
        message: "Product added!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 1000,
            onScreen: true
        }
}

const addedProductFail = {
    title: "Something went wrong!",
    message: "Product was not added!",
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 1000,
        onScreen: true
    }
}

const productUpdated = {
    title: "Success!",
    message: "Product price was updated!",
    type: "info",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 1000,
        onScreen: true
    }
}
const signInFailed = {
    title: "Something went wrong!",
    message: "Check your fields in case something might be wrong!",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 1000,
        onScreen: true
    }
}

const registerFailed = {
    title: "Something went wrong!",
    message: "Check your fields in case something might be wrong!",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 1000,
        onScreen: true
    }
}

export {
    addedProduct,
    addedProductFail,
    productUpdated,
    signInFailed,
    registerFailed
}