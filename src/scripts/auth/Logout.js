import { getUsers } from "../data/provider.js";
import { LoginForm } from "../data/Login.js";
// we just need to logout........

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

        if (foundUser) {
            localStorage.removeItem("gg_user", foundUser.id)
            document.querySelector(".loginForm").dispatchEvent(new CustomEvent("stateChanged"))
            return LoginForm()
        }
    }
})

