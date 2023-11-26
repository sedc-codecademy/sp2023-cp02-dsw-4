// const mainURL = 'mockData/'

export async function getUser(ID) {
    console.log(ID)
    const response = await fetch('/mockData/user.json')

    if (!response.ok) {
        throw new Error('Cannot get user')
    }

    return response.json()
}

export const logInApi = async (credentials) => {
    console.log(credentials)
    const response = await fetch('/mockData/tokenExample.json')
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


export const logOutApi = async () => { // Should post log out Route instead
    const response = await fetch('/mockData/tokenExample.json')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}

export const registerApi = async (credentials) => {
    console.log(credentials)
    const response = await fetch('/mockData/register.json')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
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
// export async function logOutApi() {
//     const url = `${mainURL}/auth/logout`
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
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