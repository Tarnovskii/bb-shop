const getProductIndexFromCart = (productId, productsArray) => {
    return productsArray.findIndex(product => +product.id === +productId)
}

export const addProductToCart = (product) => {
    let productsArray = getCartProductsArrayFromCookie()

    const currentProductIndex = getProductIndexFromCart(product.id, productsArray)

    try {
        if (currentProductIndex !== -1) {
            const currentProduct = productsArray[currentProductIndex]
            productsArray.splice(currentProductIndex, 1, {...currentProduct, count: currentProduct.count + 1})
            document.cookie = `cart_content=${JSON.stringify(productsArray)}`
        } else if (!productsArray.length) {
            document.cookie = `cart_content=${JSON.stringify([{...product, count: 1}])};`
        }
        else document.cookie = `cart_content=${JSON.stringify([...productsArray, {...product, count: 1}])}`
    } catch (e) {
        clearCartProductsArrayInCookie()
    }
}

export const removeProductFromCart = productId => {
    let productsArray = getCartProductsArrayFromCookie()

    const currentProductIndex = getProductIndexFromCart(productId, productsArray)

    try {
        if (currentProductIndex !== -1) {
            const currentProduct = productsArray[currentProductIndex]

            if (currentProduct.count === 1) productsArray.splice(currentProductIndex, 1)
            else productsArray.splice(currentProductIndex, 1, {...currentProduct, count: currentProduct.count - 1})

            document.cookie = `cart_content=${JSON.stringify(productsArray)}`
        }
    } catch (e) {
        clearCartProductsArrayInCookie()
    }
}

export const getTotalProductsPrice = () => {
    return getCartProductsArrayFromCookie().reduce((total, product) => {
        return total + product.price * product.count
    }, 0)
}

export const getCartProductsArrayFromCookie = () => {
    if (document.cookie.indexOf('cart_content') === -1) clearCartProductsArrayInCookie()

    try {
        return JSON.parse(document.cookie.split('; ').find(cookieString => {
            return (cookieString.split('=')[0] === 'cart_content')
        }).split('=')[1])
    } catch (e) {
        clearCartProductsArrayInCookie()
    }
}

export const clearCartProductsArrayInCookie = () => document.cookie = 'cart_content=[]'


