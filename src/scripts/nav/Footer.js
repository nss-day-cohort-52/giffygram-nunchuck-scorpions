import { getUsers } from "../data/provider.js";

export const Users = () => { // this will create the function to represent the posts by users from a dropdown menu of the footer
    const users = getUsers()
    return `
    <h3>Posts by user</h3> 
    <select id="user">
        <option value="0">Choose user...</option>
        ${users.map(
        (userObj) => {
            return `
                <option value="${userObj.id}">${userObj.name}</option>
                `
        }
    )
        }
        </select>
        `
}