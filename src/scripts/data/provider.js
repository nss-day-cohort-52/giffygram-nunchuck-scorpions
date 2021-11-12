const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    users: [],
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    posts: []
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
export const fetchFavorites = () => { // fetches the favorites for when something is starred.
    return fetch(`${apiURL}/favorites`)
    .then(response => response.json())
    .then(
        (favorites) => {
            applicationState.users = favorites
        }
    )
}

export const fetchDates = () => { // will fetch the dates for when the scrollable footer date is selected.
    return fetch(`${apiURL}/dates`)
    .then(response => response.json())
    .then(
        (dates) => {
            applicationState.users = dates
        }
    )
}




export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}
export const getFavorites = () => {
    return applicationState.favorites.map(favorite => ({...favorite}))
}
export const getDates = () => {
    return applicationState.dates.map(date => ({...date}))
}

export const sendPost = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    
    
    return fetch(`${apiURL}/posts`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
    .then(response => response.json())
    .then(
        (servicePosts) => {
            applicationState.posts = servicePosts
        }
        )
    }
    
    export const getPosts = () => {
        return applicationState.posts.map(post => ({...post}))
    }