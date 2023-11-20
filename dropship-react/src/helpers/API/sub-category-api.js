export async function getSubCategoryByID(ID) {
    console.log(ID)
    const response = await fetch('/mockData/subCategory.json')/// PLACEHOLDER

    if (!response.ok) {
        throw new Error('Cannot find subcategory')
    }

    /// PLACEHOLDER
    return response.json()
}