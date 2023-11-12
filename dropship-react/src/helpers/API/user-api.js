export async function getUser() {
    const response = await fetch('/mockData/user.json')

    if (!response.ok) {
        throw new Error('Cannot get user')
    }

    return response.json()
}

export const logInApi = async (credentials) => {
    console.log(credentials)
    // const response = await fetch('/mockData/tokenExample.json', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // });
    const response = await fetch('/mockData/tokenExample.json')
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


export const logOutApi = async () => { // Should post log out Route instead
    // const response = await fetch('/mockData/tokenExample.json', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // });
    const response = await fetch('/mockData/tokenExample.json')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}