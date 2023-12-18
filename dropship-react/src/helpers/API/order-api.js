const mainURL = 'https://localhost:7168/api/'

export async function getPurchasedOrders(tokens) { // api/Order/PurchasedOrders
    const url = `https://localhost:7168/api/Order/PurchasedOrders`
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
    const url = `https://localhost:7168/api/Order/NewOrder`
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
    const url = `https://localhost:7168/api/UserOrder/AssignCourier/${orderData.userId}/toOrder/${orderData.orderId}`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        // body: JSON.stringify(orderData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function updateOrderApi({ orderId, tokens }) { // api/Order/UpdateUserOrder/${ID}
    const url = `https://localhost:7168/api/Order/UpdateOrder/${orderId}`

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