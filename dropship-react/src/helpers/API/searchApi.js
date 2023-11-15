export async function getSearch(word) {
    console.log(word)
    const response = await fetch('/mockData/searchResults.json')

    if (!response.ok) {
        throw new Error('Nothing Found')
    }

    return response.json()
}