
import { getUsers, getPosts } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")
getUsers()
applicationElement.addEventListener("click", (evt) => {
    if (parseInt(evt.target.id) === 999) {
        sessionStorage.setItem("user_profile", evt.target.name)
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
    const currentUserId = parseInt(sessionStorage.getItem("user_profile"))
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
