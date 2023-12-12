const mainURL = 'mockData/api'

export async function getPurchasedOrders() { // api/Order/PurchasedOrders
    const url = `${mainURL}/Order/PurchasedOrders`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function purchaseOrderApi({ orderData, tokens }) {
    const url = `https://localhost:7168/api/Order/NewOrder`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(orderData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function acceptOrderApi({ orderData, tokens }) { // api/UserOrder/AssignCourier/${ID}/toOrder/${ID}
    const url = `${mainURL}/Order/AcceptOrder`

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

export async function updateOrderApi({ orderId, tokens }) { // api/Order/UpdateUserOrder/${ID}
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

    return await response.json()
}