export async function getCategories() {
    const response = await fetch('/mockData/categories.json')

    if (!response.ok) {
        throw new Error('Cannot get categories')
    }

    return response.json()
}

export async function getCategoryByID(ID) {
    console.log(ID)
    const response = await fetch('/mockData/oneCat.json')

    if (!response.ok) {
        throw new Error('Cannot find category')
    }

    /// PLACEHOLDER
    return response.json()
}

