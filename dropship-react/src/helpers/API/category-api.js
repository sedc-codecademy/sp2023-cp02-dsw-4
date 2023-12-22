const mainURL = process.env.REACT_APP_BASE_URL

export async function getCategories() {
    const response = await fetch(`${mainURL}/Category`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getCategoryByID(ID) {
    const response = await fetch(`${mainURL}/Category/${ID}`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return response.json()
}

export async function updateCategoryApi({ catData, tokens }) {
    const url = `${mainURL}/Category/UpdateCategory`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(catData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function createCategoryApi({ catData, tokens }) {
    const url = `${mainURL}/Category/AddCategory`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(catData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function deleteCategoryApi({ ID, tokens }) {
    const url = `${mainURL}/Category/${ID}`

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