const mainURL = 'https://localhost:7168/api/Category'

export async function getCategories() { // /api/Category
    const response = await fetch(mainURL)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function getCategoryByID(ID) { // /api/Category/{id}
    const response = await fetch(mainURL + `/${ID}`)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return response.json()
}

export async function updateCategoryApi({ catData, tokens }) { // api/Category/UpdateCategory
    const url = `${mainURL}/category/update/${catData.id}`

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

    return await response.json()
}

export async function createCategoryApi({ catData, tokens }) { // api/Category/AddCategory
    console.log(catData)
    const url = `https://localhost:7168/api/Category/AddCategory`

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

export async function deleteCategoryApi({ ID, tokens }) { // api/Category/${ID}
    const url = `${mainURL}/category/delete/${ID}`

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