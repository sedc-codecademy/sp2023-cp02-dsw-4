const mainURL = 'mockData/'

export async function getUser(ID) {
    console.log(ID)
    const response = await fetch('/mockData/user.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export const logInApi = async (credentials) => {
    console.log(credentials)
    const response = await fetch('/mockData/tokenExample.json')

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export const logOutApi = async ({ ID, tokens }) => { // Should post log out Route instead
    console.log(ID, tokens)
    const response = await fetch('/mockData/tokenExample.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export const registerApi = async (credentials) => {
    console.log(credentials)
    const response = await fetch('/mockData/register.json')

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

// /// LOGIN
// export async function logInApi(credentials) {
//     const url = `${mainURL}/auth/login`
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//     })

//     const textResponse = await response.text() /////////// ?????????????
//     return textResponse
// }

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


// /// REGISTER
// export async function registerApi(credentials) {
//     const url = `${mainURL}/auth/createAcc`

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//     })

//     if(!response.ok){
//         throw new Error(await response.text())
//     }

//     const textResponse = await response.text() ///////////// ??????????
//     return textResponse
// }

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
    const url = `${mainURL}/user/update/${updatedData.id}`

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function deleteCardApi({ ID, tokens }) {
    const url = `${mainURL}/cards/delete/${ID}`

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

    return await response.json()
}

export async function updateCardApi({ updatedData, tokens }) {
    const url = `${mainURL}/cards/update/${updatedData.id}`

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify(updatedData),
    })

    if (!response.ok) {
        throw new Error(await response.text())
    }

    return await response.json()
}

export async function createCardApi({ cardData, userID, tokens }) {
    const url = `${mainURL}/cards/create/${userID}`

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

    return await response.json()
}