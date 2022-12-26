import ModalReducer from "./ModalReducer";
import { useReducer, createContext } from "react";

const Intial_state = {
    isModalOpen : false,
    deleteID : null, 
    isMenuOpen : false
}

export const ModalContext = createContext(Intial_state);

export const ModalContextProvider = ({ children }) => {
    const [state, modaldispatch] = useReducer(ModalReducer, Intial_state);

    return(
        <ModalContext.Provider value={{isModalOpen: state.isModalOpen, deleteID:state.deleteID,isMenuOpen:state.isMenuOpen, modaldispatch}}>
            {children}
        </ModalContext.Provider>
    )
}