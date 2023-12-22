const mainURL = process.env.REACT_APP_BASE_URL

export async function getPurchasedOrders(tokens) {
    const url = `${mainURL}/Order/PurchasedOrders`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function purchaseOrderApi({ orderData, tokens }) {
    const url = `${mainURL}/Order/NewOrder`
    console.log(orderData)

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

    return await response.text()
}

export async function acceptOrderApi({ orderData, tokens }) {
    const url = `${mainURL}/UserOrder/AssignCourier/${orderData.userId}/toOrder/${orderData.orderId}`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function updateOrderApi({ orderId, tokens }) {
    const url = `${mainURL}/Order/UpdateOrder/${orderId}`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}