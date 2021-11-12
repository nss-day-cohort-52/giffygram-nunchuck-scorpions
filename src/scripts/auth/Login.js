import { getUsers } from "../data/provider.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
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
            sessionStorage.setItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
})
const applicationElement = document.querySelector(".giffygram")
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logoutButton") {
        sessionStorage.removeItem("gg_user")
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        </div>
    `
}
