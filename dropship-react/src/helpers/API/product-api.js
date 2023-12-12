export async function getProductByID(ID) { // api/Product/${ID}
    const response = await fetch(`https://localhost:7168/api/Product/${ID}`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getPopularProducts() { // api/Product/MostPopularProducts
    const response = await fetch(`https://localhost:7168/api/Product/MostPopularProducts`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getNewArrivalsProducts() { // api/Product/NewProducts
    const response = await fetch(`https://localhost:7168/api/Product/NewProducts`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getDiscountedProducts() { // api/Product/DiscountedProducts
    const response = await fetch(`https://localhost:7168/api/Product/DiscountedProducts`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function deleteReviewApi({ ratingId, userId, tokens }) { // api/Rating/${ID}/user/${userID}
    const url = `https://localhost:7168/api/Rating/${ratingId}/user/${userId}`

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

    return await response.text()
}

export async function updateReviewApi({ updatedData, tokens }) { // api/Rating/UpdateRating
    const url = `https://localhost:7168/api/Rating/UpdateRating`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function createReviewApi({ reviewData, tokens }) {
    const url = `https://localhost:7168/api/Rating/AddRating`

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

    return await response.text()
}