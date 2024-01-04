import { AuthContext } from "../context/Auth.context";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext must be inside an AuthCOntextProvider')
    }

    return context
}