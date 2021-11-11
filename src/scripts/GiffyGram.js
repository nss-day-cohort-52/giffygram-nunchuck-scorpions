import { createPost, createPostButton } from "./feed/PostEntry.js"

const applicationElement = document.querySelector(".giffygram")
    applicationElement.addEventListener("click", 
(evt) => {
    if (evt.target.id === "createPost") {
        sessionStorage.setItem("create_post", true)
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        
    }

}

)

export const GiffyGram = () => {
    let html = "";
    const createPostButtonExists = sessionStorage.getItem("create_post")

    html += `<h1>Giffygram</h1>`

    html += `${createPostButton()}`

    if (createPostButtonExists) {
        html += `${createPost()}`

    }
    
    // Show main main UI
    return html
}
