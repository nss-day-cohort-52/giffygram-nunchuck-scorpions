import { GiffyGram } from "./GiffyGram.js"
import {LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchUsers } from "./data/provider.js"
import { userProfilePage } from "./friends/UserProfile.js"

const applicationElement = document.querySelector(".giffygram")
export const renderApp = () => {
    fetchUsers()
    .then(() => fetchPosts())
    .then(
        () => {
        const user = parseInt(localStorage.getItem("gg_user"))
        const userLinkClicked = sessionStorage.getItem("user_profile")

        if (userLinkClicked) {
            applicationElement.innerHTML = userProfilePage()
        } else if (user) {
            applicationElement.innerHTML = GiffyGram()
        } else {
            applicationElement.innerHTML = LoginForm()
        }

            }

    )
    
}

renderApp()

applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
        console.log("rerender")
    }
)


