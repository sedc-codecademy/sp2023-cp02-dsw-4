const mainURL = process.env.REACT_APP_BASE_URL

export async function getUser(ID, tokens) {
    const url = `${mainURL}/User/${ID}`

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
    const url = `${mainURL}/User/Login`
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
    const url = `${mainURL}/User/Register`

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
    const url = `${mainURL}/User/${ID}`

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
    const url = `${mainURL}/User/UpdateUser/${updatedData.id}`

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
    const url = `${mainURL}/Card/${ID}`

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
    const url = `${mainURL}/Card/UpdateCard`
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
    const url = `${mainURL}/Card/AddCard/${userID}`

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
    const url = `${mainURL}/Subscriber/AddSubscriber`

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