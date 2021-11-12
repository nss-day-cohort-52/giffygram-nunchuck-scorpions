import { getUsers } from "../data/provider.js";

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logoutButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.loginEmail === email && user.password === password) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            localStorage.removeItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
})