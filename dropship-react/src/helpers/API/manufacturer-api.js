export async function getManufacturerByID(ID) { // api/Manufacturer/${ID}
    const response = await fetch(`https://localhost:7168/api/Manufacturer/${ID}`)

    if (!response.ok) {
        throw new Error('Cannot find manufacturer')
    } 
    
    return response.json()
}

