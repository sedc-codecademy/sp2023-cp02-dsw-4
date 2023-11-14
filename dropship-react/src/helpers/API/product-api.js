export async function getProductByID(ID) {
    console.log(ID)
    const response = await fetch('/mockData/product.json')

    if (!response.ok) {
        throw new Error('Cannot find product')
    }

    /// PLACEHOLDER
    return response.json()
}

export async function getPopularProducts() {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error('Cannot find products')
    }

    /// PLACEHOLDER
    const products = response.json()
    if (products) {
        return products
    }
    throw new Error('Cannot find products')
}

export async function getNewArrivalsProducts() {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error('Cannot find products')
    }

    /// PLACEHOLDER
    const products = response.json()
    if (products) {
        return products
    }
    throw new Error('Cannot find products')
}

export async function getDiscountedProducts() {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error('Cannot find products')
    }

    /// PLACEHOLDER
    const products = response.json()
    if (products) {
        return products
    }
    throw new Error('Cannot find products')
}