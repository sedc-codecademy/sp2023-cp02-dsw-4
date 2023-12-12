export async function getSubCategoryByID(ID) { // api/Subcategory/{ID}
    const response = await fetch(`https://localhost:7168/api/Subcategory/${ID}`)/// PLACEHOLDER

    if (!response.ok) {
        throw new Error('Cannot find subcategory')
    }

    /// PLACEHOLDER
    return response.json()
}