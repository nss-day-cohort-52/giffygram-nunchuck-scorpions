





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


    
    
    `
    return html






}