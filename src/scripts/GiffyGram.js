import { createPost } from "./feed/PostEntry.js"






export const GiffyGram = () => {
    let html = "";

    html += `<h1>Giffygram</h1>`

    html += `${createPost()}`

    // Show main main UI
    return html
}
