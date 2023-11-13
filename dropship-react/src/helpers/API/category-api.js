export async function getCategories() {
    const response = await fetch('/mockData/categories.json')

    if (!response.ok) {
        throw new Error('Cannot get categories')
    }

    return response.json()
}

export async function getCategoryByID(ID) {
    const response = await fetch('/mockData/categories.json')

    if (!response.ok) {
        throw new Error('Cannot find category')
    }

    /// PLACEHOLDER
    const category = response.json().find(e => e.id === ID)
    if(category) {
        return category
    }
    throw new Error('Cannot find category')
}

