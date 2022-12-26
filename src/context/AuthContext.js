import AuthReducer from "./AuthReducer";
import { useReducer, createContext, useEffect } from "react";

const Intial_state = {
    currentUser: JSON.parse(localStorage.getItem("user"))||null
}

export const AuthContext = createContext(Intial_state);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, Intial_state);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return(
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}