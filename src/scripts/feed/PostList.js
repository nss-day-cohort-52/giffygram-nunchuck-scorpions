import { getPosts, getUsers } from "../data/provider.js"



export const postList = () => {
    const user = getUsers() 
    const posts = getPosts()
    let html = ""

    html += `
    <section class="post_list">
    ${
        posts.map((post) => {
            const currentUser = user.find((x) => {
                if (x.id === post.userId) {
                    return true
                }
                return false

            })
            return `
            <div><h2>${post.title}</h2></div>
            <div>
            <img src="${post.imageUrl}"></div>
            <div><p>${post.description}</p><p>Posted by ${currentUser.name}</p><div>`
        }).join("")

        

    }
    </section>`
    return html
    
    


}