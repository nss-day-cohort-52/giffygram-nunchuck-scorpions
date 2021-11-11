import { sendPost } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram")
applicationElement.addEventListener("click", (evt) =>{
    if (evt.target.id === "submitPost"){

        const user = parseInt(localStorage.getItem("gg_user"))
        const userTitle = applicationElement.querySelector("#title").value;
        const userGif = applicationElement.querySelector("#gifURL").value
        const userDescription = applicationElement.querySelector("#description").value

        const dataToSendAPI = {
            userId: user,
            title: userTitle,
            imageUrl: userGif,
            description: userDescription

        }

        sendPost(dataToSendAPI)
        sessionStorage.removeItem("create_post")
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))


    }
})

applicationElement.addEventListener("click", (evt) => {
    if (evt.target.id === "cancelPost") {
        sessionStorage.removeItem("create_post")
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const createPostButton = () => {
    let html = "" 

    html += `
    <div>
    <button class="button" id="createPost">Have a gif to post?</button>
    </div>`

    return html

}

export const createPost = () => {
    let html = ""

    html += `
    
    <div>
    <label class="titleLable" for="createPost">Title: </label>
    <input type="text" name="title" class="input" id="title" />
    </div>

    <div>
    <label for="gifURL">Add your gifURL:</label>
    <input type="url" id="gifURL" name="gifURL">
    </div>

    <div>
    <label class="description" for="createPost">Description: </label>
    <input type="text" name="description" class="input" id="description" />
    </div>

    <button class="button" id="submitPost">Submit post</button>
    <button class="button" id="cancelPost">Cancel post</button>
    
    `
    return html
}