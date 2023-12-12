export async function getSearch(word) { // api/Product/SearchProductByName
    const response = await fetch(`https://localhost:7168/api/Product/SearchProductsByName/${word}`)

    if (!response.ok) {
        throw new Error('Nothing Found')
    }

    return response.json()
}

export async function searchProductApi({ID, tokens}) {
    const url = `https://localhost:7168/api/Product/UpdateSearches/${ID}`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${tokens.accessToken}`,
        }
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    // return await response.text()
}