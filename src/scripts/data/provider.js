const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    users: [],
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}


export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
    .then(response => response.json())
    .then(
        (serviceUsers) => {
            applicationState.users = serviceUsers
        }
    )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}