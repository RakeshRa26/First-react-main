import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const useAuth = () => {
    const {login, loggedInUser, getLoggedInUser } = useContext(AuthContext)

    return { login, loggedInUser, getLoggedInUser};
}