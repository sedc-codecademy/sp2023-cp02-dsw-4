export async function getManufacturerByID(ID) {
    console.log(ID)
    const response = await fetch('/mockData/manufacturer.json')

    if (!response.ok) {
        throw new Error('Cannot find manufacturer')
    }

    /// PLACEHOLDER
    return response.json()
}

