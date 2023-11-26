const mainURL = 'mockData/'

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

export async function deleteReview(ID) {
    const url = `${mainURL}/news/delete/${ID}`

    const response = await fetch(url, {
        method: 'DELETE'
    })

    const data = await response.text()
    return data
}

export async function updateReview(ID, updatedData) {
    const url = `${mainURL}/news/update/${ID}`

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })

    const data = await response.text()
    return data
}

export async function createReview(reviewData) {
    const url = `${mainURL}/news/create`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    })

    const data = await response.text()
    return data
}