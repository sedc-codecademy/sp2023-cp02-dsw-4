export async function getProductByID(ID) {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error('Cannot find product')
    }

    /// PLACEHOLDER
    const product = response.json().find(e => e.id === ID)
    if (product) {
        return product
    }
    throw new Error('Cannot find product')
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