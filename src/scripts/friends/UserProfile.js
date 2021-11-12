// create session storage variable that is created when clicking on user name 
// add if statement in giffygram i think, that will render user profile only   
// make the users profile just a header for quick testing purposes 
// profile should display first and last name 
// profile should display total number of posts, try iterating over post and for each post that has a matching userId, add one to variable i (google)

import { getUsers, getPosts } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")
getUsers()
applicationElement.addEventListener("click", (evt) => {
    if (parseInt(evt.target.id) === 999) {
        sessionStorage.setItem("user_profile", true)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", (evt) => {
    if (evt.target.id === "leaveProfile") {
        sessionStorage.removeItem("user_profile")
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const userProfilePage = () => {
    const userArray = getUsers()
    const postArray = getPosts()
    const currentUserId = parseInt(localStorage.getItem("gg_user"))
    let userName = null
    let i = 0

    for (const user of userArray) {
        
        if (user.id === currentUserId) {
            userName = user.name
            

        }
        for (const post of postArray) {
            if (post.userId === user.id) {
                i += 1
            }
            
        }

        
    }
    return `
    <h1>Welcome to ${userName}'s Profile!</h1>
    <div>Total number of posts: ${i}</div>
    <button id="leaveProfile">Leave ${userName}'s profile</button>
    `;
}
