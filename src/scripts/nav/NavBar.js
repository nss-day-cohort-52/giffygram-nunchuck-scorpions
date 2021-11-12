// main function that exports all the buttons in the nav bar 
export const NavBar = () => {
    let navbarHTML = ""

    navbarHTML += "<ul>"

    navbarHTML += `<li>${DmButton()} ${createLogOutButton()}</li>`
    
    navbarHTML += "</ul>"

    return navbarHTML


}

// constructs the DM button in the navbar
const DmButton = () => {
    let DmBttnHTML = ``

    DmBttnHTML += `<button type="button" onclick=something;> Direct Message </button>`

    return DmBttnHTML
}

const createLogOutButton = () => {
    let html = ""

    html += `
    <div>
    <button class="navigation__logout" id="logoutButton">Logout</button>
    </div>`

    return html

}
