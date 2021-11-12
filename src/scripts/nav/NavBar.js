// main function that exports all the buttons in the nav bar 
export const NavBar = () => {
    let navbarHTML = ""

    navbarHTML += "<ul>"
    
    navbarHTML += `<li>${DmButton()}</li>`

    navbarHTML += "</ul>"

return navbarHTML


}

// constructs the DM button in the navbar
const DmButton = () => {
    let DmBttnHTML = `` 
    
    DmBttnHTML += `<button type="button" onclick=something;> Direct Message </button>`

    return DmBttnHTML
}
