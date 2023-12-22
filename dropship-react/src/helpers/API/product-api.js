const mainURL = process.env.REACT_APP_BASE_URL

export async function getProductByID(ID) {
    const response = await fetch(`${mainURL}/Product/${ID}`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getPopularProducts() {
    const response = await fetch(`${mainURL}/Product/MostPopularProducts`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getNewArrivalsProducts() {
    const response = await fetch(`${mainURL}/Product/NewProducts`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getDiscountedProducts() {
    const response = await fetch(`${mainURL}/Product/DiscountedProducts`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function deleteReviewApi({ ratingId, userId, tokens }) {
    const url = `${mainURL}/Rating/${ratingId}/user/${userId}`

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

export async function updateReviewApi({ updatedData, tokens }) {
    const url = `${mainURL}/Rating/UpdateRating`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function createReviewApi({ reviewData, tokens }) {
    const url = `${mainURL}/Rating/AddRating`

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