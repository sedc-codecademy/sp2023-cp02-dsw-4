export async function getSubCategoryByID(ID) {
    const response = await fetch('/mockData/products.json')/// PLACEHOLDER

    if (!response.ok) {
        throw new Error('Cannot find subcategory')
    }

    /// PLACEHOLDER
    const subcategory = response.json().filter(e => e.subcategoryid === ID)
    if(subcategory.length > 0) {
        return subcategory
    }
    throw new Error('Cannot find subcategory')
}