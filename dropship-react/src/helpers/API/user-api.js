const mainURL = 'mockData/'

export async function getUser(ID, tokens) {
    const url = `https://localhost:7168/api/User/${ID}`

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

/// LOGIN
export async function logInApi(credentials) {
    const url = `https://localhost:7168/api/User/Login`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

// /// LOGOUT
// export async function logOutApi(userId, tokens) {
//     const url = `${mainURL}/auth/logout/${useriId}`
//     const response = await fetch(url, {
//         method: 'POST',
// headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${tokens.accessToken}`,
// },
//     })

//     const textResponse = await response.text()  ////////////// ?????????????
//     return textResponse
// }

/// REGISTER
export async function registerApi(credentials) {
    const url = `https://localhost:7168/api/User/Register`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function deleteUserApi({ ID, tokens }) {
    const url = `${mainURL}/user/delete/${ID}`

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
    })

    const data = await response.text()
    return data
}

export async function updateUserApi({ updatedData, tokens }) {
    const url = `https://localhost:7168/api/User/UpdateUser/${updatedData.id}`

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function deleteCardApi({ ID, tokens }) { // api/Card/${ID}
    const url = `https://localhost:7168/api/Card/${ID}`

    const response = await fetch(url, {
        method: 'DELETE',
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

export async function updateCardApi({ updatedData, tokens }) { // api/Card/UpdateCard
    const url = `https://localhost:7168/api/Card/UpdateCard`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function createCardApi({ cardData, userID, tokens }) { // api/Card/AddCard/${ID}
    const url = `https://localhost:7168/api/Card/AddCard/${userID}`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(cardData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}

export async function subscribeApi(subscriberData) {
    const url = `https://localhost:7168/api/Subscriber/AddSubscriber`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.text()
}