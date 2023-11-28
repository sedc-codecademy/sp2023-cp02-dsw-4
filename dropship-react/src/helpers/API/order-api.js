const mainURL = 'mockData/'

export async function purchaseOrderApi({ orderData, tokens }) {
    const url = `${mainURL}/order/purchase`
    console.log(tokens, orderData)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(orderData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function updateOrderApi({ orderData, tokens }) {
    const url = `${mainURL}/order/update/${orderData.id}`
    console.log(tokens, orderData)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(orderData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}