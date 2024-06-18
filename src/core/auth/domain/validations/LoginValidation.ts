const MIN_USER_NAME: number = 4
const MIN_PASSWORD: number = 8

export default {
    /* userName */
    isValidUser(userName: string) {
        return userName.length >= MIN_USER_NAME
    },

    /* password */
    isValidPassword(password: string) {
        return password.length >= MIN_PASSWORD
    }
}