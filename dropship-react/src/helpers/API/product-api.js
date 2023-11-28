const mainURL = 'mockData/'

export async function getProductByID(ID) {
    console.log(ID)
    const response = await fetch('/mockData/product.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getPopularProducts() {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getNewArrivalsProducts() {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getDiscountedProducts() {
    const response = await fetch('/mockData/products.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function deleteReviewApi({ ID, tokens }) {
    const url = `${mainURL}/reviews/delete/${ID}`

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function updateReviewApi({ updatedData, tokens }) {
    const url = `${mainURL}/reviews/update/${updatedData.id}`

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function createReviewApi({ reviewData, tokens }) {
    const url = `${mainURL}/reviews/create`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(reviewData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}