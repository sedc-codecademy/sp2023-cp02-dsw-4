const mainURL = process.env.REACT_APP_BASE_URL

export async function getSearch(word) {
    const response = await fetch(`${mainURL}/Product/SearchProductsByName/${word}`)

    if (!response.ok) {
        throw new Error('Nothing Found')
    }

    return response.json()
}

export async function searchProductApi({ ID }) {
    const url = `${mainURL}/Product/UpdateSearches/${ID}`

    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}