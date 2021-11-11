import { getUsers } from "../data/provider.js";

export const showFavoritesBox = () => { // this will create the function to represent and show the favorited posts when the user checks the box in the footer
    const favorites = getFavorites()
    return `
    <h3>Show only favorites</h3>
    <select id="favorite">
        <option value="0"></option>
        ${favorites.map(
        (favoriteObj) => {
            return `
                <input type="checkbox" id="check" value="${favoriteObj.id}" /> ${favoriteObj.post}`
        }
    )}
            `

}

export const footerUsers = () => { // this will create the function to represent the posts by users from a dropdown menu of the footer
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

export const selectDates = () => {
    const dates = getDates()
    return `
    <h3>Posts since</h3>
    <select id="date">
        <option value="0"></option>
        ${dates.map(
        (dateObj) => {
            return `
                <option value="${dateObj.id}">${dateObj.date}</option>
                `
        }
    )
        }
        </select>
    `
}
